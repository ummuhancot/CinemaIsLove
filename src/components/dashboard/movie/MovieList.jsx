"use client";

import { useState, useEffect } from "react";
import { useActionState } from "react";
import { Card, Button } from "@mantine/core";
import { appConfig } from "@/helpers/config";
import { TextInputSelect } from "@/components/common/form-fields/TextInputSelect";
import { movieAction } from "@/actions/movie-actions";
import "../movie/movie-form.scss";

const MovieList = () => {
  // 🔹 Form state
  const [formValues, setFormValues] = useState({
    title: "",
    slug: "",
    summary: "",
    releaseDate: "",
    durationDays: "",
    rating: "",
    director: "",
    genre: "",
    status: "",
    cast: "",
    formats: "",
    hallIds: "",
    specialHalls: "",
  });

  // 🔹 Movie action state
  const [state, formAction, isPending] = useActionState(movieAction);

  // 🔹 Slug otomatik oluştur
  useEffect(() => {
    const slug = formValues.title
      .toLowerCase()
      .trim()
      .replace(/[^a-z0-9\s-]/g, "")
      .replace(/\s+/g, "-");
    setFormValues((prev) => ({ ...prev, slug }));
  }, [formValues.title]);

  // 🔹 Input değişimi handle et
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues((prev) => ({ ...prev, [name]: value }));
  };

  // 🔹 Form submit
  const handleSubmit = (e) => {
    e.preventDefault();

    // Array alanları backend için split et
    const payload = {
      ...formValues,
      cast: formValues.cast.split(",").map((c) => c.trim()),
      formats: formValues.formats.split(",").map((f) => f.trim()),
      hallIds: formValues.hallIds.split(",").map((h) => Number(h.trim())),
      specialHalls: formValues.specialHalls.split(",").map((s) => s.trim()),
    };

    formAction(payload);
  };

  return (
    <div className="movie-form">
      <Card shadow="sm" padding="lg" radius="md" withBorder>
        <h3 className="m-1 text-center">Enter Movie Info</h3>

        <form onSubmit={movieAction}>
          {/* Title */}
          <TextInputSelect
            name="title"
            label="Title"
            placeholder="Movie title"
            iconBefore="video"
            value={formValues.title}
            onChange={handleChange}
            errorMessage={state?.errors?.title}
          />

          {/* Slug (auto, sadece gösteriliyor) */}
          <TextInputSelect
            name="slug"
            label="Slug (auto)"
            placeholder="Movie slug"
            iconBefore="file-arrow-up"
            value={formValues.slug}
            disabled
            errorMessage={state?.errors?.slug}
          />

          {/* Summary */}
          <TextInputSelect
            name="summary"
            label="Summary"
            placeholder="Movie summary"
            iconBefore="file-edit"
            value={formValues.summary}
            onChange={handleChange}
            errorMessage={state?.errors?.summary}
          />

          {/* Release Date */}
          <TextInputSelect
            name="releaseDate"
            label="Release Date"
            type="date"
            placeholder="yyyy-mm-dd"
            iconBefore="calendar-plus"
            value={formValues.releaseDate}
            onChange={handleChange}
            errorMessage={state?.errors?.releaseDate}
          />

          {/* Duration */}
          <TextInputSelect
            name="durationDays"
            label="Duration Days"
            placeholder="Movie durationDays"
            iconBefore="sort-numeric-up-alt"
            value={formValues.durationDays}
            onChange={handleChange}
            errorMessage={state?.errors?.durationDays}
          />

          {/* Rating */}
          <TextInputSelect
            name="rating"
            label="Rating"
            placeholder="Movie Rating"
            iconBefore="wave-pulse"
            value={formValues.rating}
            onChange={handleChange}
            errorMessage={state?.errors?.rating}
          />

          {/* Director */}
          <TextInputSelect
            name="director"
            label="Director"
            placeholder="Movie Director"
            iconBefore="users"
            value={formValues.director}
            onChange={handleChange}
            errorMessage={state?.errors?.director}
          />

          {/* Genre */}
          <TextInputSelect
            name="genre"
            label="Genre"
            placeholder="Action, Comedy, Drama..."
            iconBefore="play"
            value={formValues.genre}
            onChange={handleChange}
            errorMessage={state?.errors?.genre}
          />

          {/* Status */}
          <div className="mb-3">
            <label htmlFor="status" className="form-label">
              Movie Status
            </label>
            <select
              id="status"
              name="status"
              className="form-select"
              value={formValues.status}
              onChange={handleChange}
            >
              <option value="">Select Status</option>
              {appConfig.movestatus.map((g) => (
                <option key={g.value} value={g.value}>
                  {g.label}
                </option>
              ))}
            </select>
            {state?.errors?.status && (
              <div className="text-danger small mt-1">
                {state.errors.status}
              </div>
            )}
          </div>

          {/* Cast */}
          <TextInputSelect
            name="cast"
            label="Cast"
            placeholder="Comma separated e.g. Alice,Bob,Charlie"
            iconBefore="users"
            value={formValues.cast}
            onChange={handleChange}
            errorMessage={state?.errors?.cast}
          />

          {/* Formats */}
          <TextInputSelect
            name="formats"
            label="Formats"
            placeholder="Comma separated e.g. 2D,IMAX"
            iconBefore="shop"
            value={formValues.formats}
            onChange={handleChange}
            errorMessage={state?.errors?.formats}
          />

          {/* Hall IDs */}
          <TextInputSelect
            name="hallIds"
            label="Hall IDs"
            placeholder="Comma separated e.g. 1,2,3"
            iconBefore="shop"
            value={formValues.hallIds}
            onChange={handleChange}
            errorMessage={state?.errors?.hallIds}
          />

          {/* Special Halls */}
          <TextInputSelect
            name="specialHalls"
            label="Special Halls"
            placeholder="Comma separated e.g. VIP,Golden"
            iconBefore="building-columns"
            value={formValues.specialHalls}
            onChange={handleChange}
            errorMessage={state?.errors?.specialHalls}
          />

          {/* Submit Button */}
          <Button
            type="submit"
            fullWidth
            mt="md"
            loading={isPending}
            disabled={isPending}
            className="p-3"
          >
            {isPending ? "Registering..." : "Register"}
          </Button>
        </form>
      </Card>
    </div>
  );
};

export default MovieList;
