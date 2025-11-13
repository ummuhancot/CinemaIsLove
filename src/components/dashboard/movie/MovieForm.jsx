"use client";

import { useActionState } from "react";
import { Card, Button } from "@mantine/core";
import { appConfig } from "@/helpers/config";
import { TextInputSelect } from "@/components/common/form-fields/TextInputSelect";
import { movieAction } from "@/actions/movie-actions";
import "../movie/movie-form.scss";




const Moviea = () => {
  const [state, formAction, isPending] = useActionState(movieAction);

  const payload = {
    ...formValues,
    slug: generateSlug(formValues.title), 
  };

  return (
    <div className="movie-form">
      <Card shadow="sm" padding="lg" radius="md" withBorder>
        <h3 className="m-1 text-center">Please Enter Your Registration Info</h3>

        <form action={formAction}>
          <TextInputSelect
            name="title"
            label="title"
            placeholder="Movie title"
            iconBefore="video"
            errorMessage={state?.errors?.name}
          />
          <TextInputSelect
            name="slug"
            label="Slug (auto)"
            placeholder="Movie slug"
            iconBefore="file-arrow-up"
            value={formValues.title} 
            disabled
            errorMessage={state?.errors?.slug}
          />

          <TextInputSelect
            name="summary"
            label="summary"
            placeholder="Movie summary"
            iconBefore="file-edit"
            errorMessage={state?.errors?.email}
          />

          <TextInputSelect
            name="releaseDate"
            label="releaseDate"
            placeholder="Movie releaseDate"
            iconBefore="calendar-plus"
            errorMessage={state?.errors?.phoneNumber}
          />

          <TextInputSelect
            name="durationDays"
            label="durationDays"
            placeholder="Movie durationDays"
            iconBefore="calendar"
            errorMessage={state?.errors?.phoneNumber}
          />

          <TextInputSelect
            name="rating"
            label="rating"
            placeholder="Movie Rating"
            iconBefore="wave-pulse"
            errorMessage={state?.errors?.phoneNumber}
          />

          <TextInputSelect
            name="director"
            label="director"
            placeholder="Movie Director"
            iconBefore="users"
            errorMessage={state?.errors?.phoneNumber}
          />

          <TextInputSelect
            name="genre"
            label="Movie Genre"
            placeholder="Action, Comedy, Drama..."
            iconBefore="play"
            errorMessage={state?.errors?.phoneNumber}
          />

          <div className="mb-3">
            <label htmlFor="status" className="form-label">
              Movie Status
            </label>
            <select name="status" className="form-select" defaultValue="">
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

          <TextInputSelect
            name="cast"
            label="cast"
            placeholder="Movie Cast"
            iconBefore="users"
            errorMessage={state?.errors?.birthDate}
          />

          <TextInputSelect
            name="formats"
            label="formats"
            placeholder="Movie Formats"
            iconBefore="shop"
            errorMessage={state?.errors?.birthDate}
          />

          <TextInputSelect
            name="hallIds"
            label="hallIds"
            placeholder="Movie Hall Ids"
            iconBefore="shop"
            errorMessage={state?.errors?.birthDate}
          />

          <TextInputSelect
            name="specialHalls"
            label="specialHalls"
            placeholder="Movie specialHalls"
            iconBefore="building-columns"
            errorMessage={state?.errors?.birthDate}
          />

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

export default MovieForm;
