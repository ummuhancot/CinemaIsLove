"use client";

import { hallAction } from "@/actions/hall-action";
import { TextInputSelect } from "@/components/common/form-fields/TextInputSelect";
import { useActionState } from "react";
import { Button, Card, Form } from "react-bootstrap";
import { appConfig } from "@/helpers/config";

const HallForm = () => {
  const [state, formAction, isPending] = useActionState(hallAction);

  return (
    <div className="register-form">
      <Card className="shadow-sm border p-3 rounded">
        <h3 className="mb-3 text-center">Add a New Hall</h3>

        <form action={formAction}>
          <TextInputSelect
            name="name"
            label="Hall Name"
            type="text"
            iconBefore="building"
            placeholder="Enter hall name"
            errorMessage={state?.errors?.name}
          />

          <TextInputSelect
            name="seatCapacity"
            label="Seat Capacity"
            type="number"
            iconBefore="users"
            placeholder="Enter seat capacity"
            errorMessage={state?.errors?.seatCapacity}
          />

          <TextInputSelect
            name="type"
            label="Hall Type"
            as="select"
            iconBefore="tag"
            errorMessage={state?.errors?.type}
          >
            <option value="">Select hall type</option>
            {appConfig.haltype.map((type) => (
              <option key={type.value} value={type.value}>
                {type.label}
              </option>
            ))}
          </TextInputSelect>

          <TextInputSelect
            name="cinemaId"
            label="Cinema ID"
            type="number"
            iconBefore="map-marker"
            placeholder="Enter cinema ID"
            errorMessage={state?.errors?.cinemaId}
          />

          <Form.Check
            type="checkbox"
            name="isSpecial"
            id="isSpecial"
            label="Is Special Hall"
            className="mb-3"
          />

          <Button
            type="submit"
            variant="danger"
            disabled={isPending}
            className="w-100 p-3 mt-3"
          >
            {isPending ? "Saving..." : "Save Hall"}
          </Button>
        </form>

        {state?.message && (
          <div
            className={`mt-3 p-2 ${
              state.success ? "text-success" : "text-danger"
            }`}
          >
            {state.message}
          </div>
        )}
      </Card>
    </div>
  );
};

export default HallForm;

