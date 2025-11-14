"use client";
import { cinemaAction } from "@/actions/cinema-actions";
import { TextInputSelect } from "@/components/common/form-fields/TextInputSelect";
import { useActionState } from "react";
import { appConfig } from "@/helpers/config";
import { Button, Card } from "react-bootstrap";

const CinemaForm = () => {
  const [state, formAction, isPending] = useActionState(cinemaAction);
  return (
    <div className="register-form">
      <Card shadow="sm" padding="lg" radius="md">
        <h3 className="mb-3 text-center">
          Please Enter Your Registration Info
        </h3>

        <form action={formAction}>
          <TextInputSelect
            name="name"
            label="Cinema Name"
            iconBefore="building"
            errorMessage={state?.errors?.name}
          />

          <TextInputSelect
            name="cityName"
            label="Cinema City"
            iconBefore="map"
            errorMessage={state?.errors?.surname}
          />

          <TextInputSelect
            name="address"
            label="Cinema Address"
            iconBefore="map-marker"
            errorMessage={state?.errors?.surname}
          />

          <TextInputSelect
            name="email"
            label="Email"
            type="email"
            iconBefore="at"
            placeholder="you@example.com"
            errorMessage={state?.errors?.email}
          />

          <TextInputSelect
            name="phoneNumber"
            label="Phone Number"
            iconBefore="address-book"
            placeholder="(555) 555-5555"
            errorMessage={state?.errors?.phoneNumber}
          />

          <Button
            type="submit"
            variant="danger"
            disabled={isPending}
            className="w-100 p-3 mt-3"
          >
            {isPending ? "Cinemasss..." : "Cinemas"}
          </Button>
        </form>
      </Card>
    </div>
  );
};

export default CinemaForm;
