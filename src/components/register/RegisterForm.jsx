"use client";

import { useActionState } from "react";
import { Card, Button } from "@mantine/core";
import { registerAction } from "@/actions/register-actions";
import { PasswordImput } from "../common/form-fields/PasswordImput";
import { appConfig } from "@/helpers/config";
import { TextInputSelect } from "../common/form-fields/TextInputSelect";
import "../register/register-form.scss";

const RegisterForm = () => {
  const [state, formAction, isPending] = useActionState(registerAction);

  return (
    <div className="register-form">
      <Card shadow="sm" padding="lg" radius="md" withBorder>
        <h3 className="mb-3 text-center">
          Please Enter Your Registration Info
        </h3>

        <form action={formAction}>
          <TextInputSelect
            name="name"
            label="Name"
            placeholder="Your name"
            iconBefore="user"
            errorMessage={state?.errors?.name}
          />

          <TextInputSelect
            name="surname"
            label="Surname"
            placeholder="Your surname"
            iconBefore="user"
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

          <div className="mb-3">
            <label htmlFor="gender" className="form-label">
              Gender
            </label>
            <select
              id="gender"
              name="gender"
              className="form-select"
              defaultValue=""
            >
              <option value="">Select Gender</option>
              {appConfig.genders.map((g) => (
                <option key={g.value} value={g.value}>
                  {g.label}
                </option>
              ))}
            </select>

            {state?.errors?.gender && (
              <div className="text-danger small mt-1">
                {state.errors.gender}
              </div>
            )}
          </div>

          <TextInputSelect
            name="birthDate"
            label="Birth Date"
            type="date"
            errorMessage={state?.errors?.birthDate}
          />

          <PasswordImput
            label="Password"
            name="password"
            className="mb-3"
            iconAfter="key"
            errorMessage={state?.errors?.password}
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

export default RegisterForm;
