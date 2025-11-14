"use client";

import { useState } from "react";
import { useActionState } from "react";
import { Card, Button } from "@mantine/core";
import { imageAction } from "@/actions/image-action";
import { TextInputSelect } from "@/components/common/form-fields/TextInputSelect";

const ImageUploadForm = () => {
  const [state, formAction, isPending] = useActionState(imageAction);
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [movieId, setMovieId] = useState("");

  const handleFileChange = (e) => {
    const files = Array.from(e.target.files);
    setSelectedFiles(files);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("movieId", movieId);
    selectedFiles.forEach((file) => {
      formData.append("images", file);
    });
    formAction(formData);
  };

  return (
    <div className="image-upload-form">
      <Card shadow="sm" padding="lg" radius="md" withBorder>
        <h3 className="m-1 text-center mb-3">Upload Movie Images</h3>

        <form onSubmit={handleSubmit}>
          <TextInputSelect
            name="movieId"
            label="Movie ID"
            type="number"
            placeholder="Enter movie ID"
            iconBefore="video"
            value={movieId}
            onChange={(e) => setMovieId(e.target.value)}
            errorMessage={state?.errors?.movieId}
          />

          <div className="mb-3">
            <label htmlFor="images" className="form-label">
              Select Images (Multiple files allowed)
            </label>
            <input
              type="file"
              id="images"
              name="images"
              className="form-control"
              multiple
              accept="image/jpeg,image/jpg,image/png,image/webp"
              onChange={handleFileChange}
            />
            {selectedFiles.length > 0 && (
              <div className="mt-2">
                <small className="text-muted">
                  {selectedFiles.length} file(s) selected
                </small>
                <ul className="list-unstyled mt-1">
                  {selectedFiles.map((file, index) => (
                    <li key={index} className="small text-muted">
                      {file.name} ({(file.size / 1024).toFixed(2)} KB)
                    </li>
                  ))}
                </ul>
              </div>
            )}
            {state?.errors?.images && (
              <div className="text-danger small mt-1">{state.errors.images}</div>
            )}
          </div>

          <Button
            type="submit"
            fullWidth
            loading={isPending}
            disabled={isPending || !movieId || selectedFiles.length === 0}
            className="p-3 mt-3"
          >
            {isPending ? "Uploading..." : "Upload Images"}
          </Button>

          {state?.message && (
            <div
              className={`mt-3 p-2 ${
                state.success ? "text-success" : "text-danger"
              }`}
            >
              {state.message}
            </div>
          )}
        </form>
      </Card>
    </div>
  );
};

export default ImageUploadForm;

