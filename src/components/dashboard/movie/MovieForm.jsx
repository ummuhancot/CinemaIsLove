"use client";

import { useState } from "react";
import { useActionState } from "react";
import { Card, Button } from "@mantine/core";
import { movieAction } from "@/actions/movie-actions";
import { appConfig } from "@/helpers/config";
import { TextInputSelect } from "@/components/common/form-fields/TextInputSelect";
import "../movie/movie-form.scss";

const generateSlug = (text = "") =>
  text
    .toString()
    .toLowerCase()
    .trim()
    .replace(/\s+/g, "-")
    .replace(/[^a-z0-9-]/g, "")
    .replace(/-+/g, "-");

const MovieForm = () => {
  const [state, formAction, isPending] = useActionState(movieAction);

  const [formValues, setFormValues] = useState({
    title: "",
    slug: "",
    summary: "",
    releaseDate: new Date().toISOString().slice(0, 10),
    durationDays: 1,
    rating: 0,
    director: "",
    genre: "",
    posterId: 0,
    status: "COMING_SOON",
    cast: "",
    formats: "",
    hallIds: "",
    specialHalls: "",
    showDate: new Date().toISOString().slice(0, 10),
    startTime: "00:00",
    endTime: "00:00",
    showHallId: 0,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues((s) => ({ ...s, [name]: value }));
  };

  const handleNumberChange = (e) => {
    const { name, value } = e.target;
    const numeric = value === "" ? "" : Number(value);
    setFormValues((s) => ({ ...s, [name]: numeric }));
  };

  // With server action we submit the form using `action={formAction}` below.
  // Server action `movieAction` will receive FormData and handle validation and creation.

  return (
    <div className="movie-form">
      <Card shadow="sm" padding="lg" radius="md" withBorder>
        <h3 className="m-1 text-center">Create Movie</h3>

        <form action={formAction}>
          <TextInputSelect
            name="title"
            label="Title"
            placeholder="Movie title"
            iconBefore="video"
            value={formValues.title}
            onChange={handleChange}
            errorMessage={state?.errors?.title}
          />

          <TextInputSelect
            name="slug"
            label="Slug (auto)"
            placeholder="Movie slug"
            iconBefore="file-arrow-up"
            value={formValues.slug}
            onChange={handleChange}
            disabled={false}
            errorMessage={state?.errors?.slug}
          />

          <TextInputSelect
            name="summary"
            label="Summary"
            placeholder="Movie summary"
            iconBefore="file-edit"
            value={formValues.summary}
            onChange={handleChange}
            errorMessage={state?.errors?.summary}
          />

          <div className="row">
            <div className="col-md-4">
              <label className="form-label">Release Date</label>
              <input
                type="date"
                name="releaseDate"
                className="form-control"
                value={formValues.releaseDate}
                onChange={handleChange}
              />
            </div>

            <div className="col-md-4">
              <TextInputSelect
                name="durationDays"
                label="Duration (days)"
                placeholder="1"
                value={formValues.durationDays}
                onChange={handleNumberChange}
                errorMessage={state?.errors?.durationDays}
              />
            </div>

            <div className="col-md-4">
              <TextInputSelect
                name="rating"
                label="Rating"
                placeholder="0-10"
                value={formValues.rating}
                onChange={handleNumberChange}
                errorMessage={state?.errors?.rating}
              />
            </div>
          </div>

          <TextInputSelect
            name="director"
            label="Director"
            placeholder="Director name"
            value={formValues.director}
            onChange={handleChange}
            errorMessage={state?.errors?.director}
          />

          <TextInputSelect
            name="genre"
            label="Genre"
            placeholder="Action, Comedy..."
            value={formValues.genre}
            onChange={handleChange}
            errorMessage={state?.errors?.genre}
          />

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

          <TextInputSelect
            name="cast"
            label="Cast (comma-separated)"
            placeholder="Actor1, Actor2"
            value={formValues.cast}
            onChange={handleChange}
            errorMessage={state?.errors?.cast}
          />
          <TextInputSelect
            name="formats"
            label="Formats (comma-separated)"
            placeholder="IMAX, 3D"
            value={formValues.formats}
            onChange={handleChange}
            errorMessage={state?.errors?.formats}
          />
          <TextInputSelect
            name="hallIds"
            label="Hall Ids (comma-separated)"
            placeholder="1,2"
            value={formValues.hallIds}
            onChange={handleChange}
            errorMessage={state?.errors?.hallIds}
          />
          <TextInputSelect
            name="specialHalls"
            label="Special Halls (comma-separated)"
            placeholder="VIP"
            value={formValues.specialHalls}
            onChange={handleChange}
            errorMessage={state?.errors?.specialHalls}
          />

          <h5 className="mt-3">Show Time (single entry)</h5>
          <div className="row">
            <div className="col-md-4">
              <label className="form-label">Date</label>
              <input
                type="date"
                name="showDate"
                className="form-control"
                value={formValues.showDate}
                onChange={handleChange}
              />
              {state?.errors?.["showTimes[0].date"] && (
                <div className="text-danger small mt-1">
                  {state.errors["showTimes[0].date"]}
                </div>
              )}
            </div>
            <div className="col-md-4">
              <label className="form-label">Start Time</label>
              <input
                type="time"
                name="startTime"
                className="form-control"
                value={formValues.startTime}
                onChange={handleChange}
              />
              {state?.errors?.["showTimes[0].startTime"] && (
                <div className="text-danger small mt-1">
                  {state.errors["showTimes[0].startTime"]}
                </div>
              )}
            </div>
            <div className="col-md-4">
              <label className="form-label">End Time</label>
              <input
                type="time"
                name="endTime"
                className="form-control"
                value={formValues.endTime}
                onChange={handleChange}
              />
              {state?.errors?.["showTimes[0].endTime"] && (
                <div className="text-danger small mt-1">
                  {state.errors["showTimes[0].endTime"]}
                </div>
              )}
            </div>
          </div>

          <div className="mb-3 mt-2">
            <label className="form-label">Show Hall Id</label>
            <input
              type="number"
              name="showHallId"
              className="form-control"
              value={formValues.showHallId}
              onChange={handleNumberChange}
            />
            {state?.errors?.["showTimes[0].hallId"] && (
              <div className="text-danger small mt-1">
                {state.errors["showTimes[0].hallId"]}
              </div>
            )}
          </div>

          <Button
            type="submit"
            fullWidth
            loading={isPending}
            disabled={isPending}
            className="p-3 mt-3"
          >
            {isPending ? "Registering..." : "Register"}
          </Button>

          {state?.message && (
            <div className={`mt-3 text-${state.ok ? "success" : "danger"}`}>
              {state.message}
            </div>
          )}
        </form>
      </Card>
    </div>
  );
};

export default MovieForm;
