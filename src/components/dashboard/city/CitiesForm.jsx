"use client";

import { citiesAction } from "@/actions/cities-action";
import { TextInputSelect } from "@/components/common/form-fields/TextInputSelect";
import { useActionState } from "react";
import { Button, Card } from "react-bootstrap";

const CitiesForm = () => {
  const [state, formAction, isPending] = useActionState(citiesAction);

  return (
    <div className="register-form">
      <Card className="shadow-sm border p-3 rounded">
        <h3 className="mb-3 text-center">Add a New City</h3>

        <form action={formAction}>
          <TextInputSelect
            name="name"
            label="City Name"
            type="text"
            iconBefore="building"
            placeholder="Enter city name"
            errorMessage={state?.errors?.name} // backend uyarısı burada gösterilecek
          />

          <Button
            type="submit"
            variant="danger"
            disabled={isPending}
            className="w-100 p-3 mt-3"
          >
            {isPending ? "Saving..." : "Save City"}
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

export default CitiesForm;
