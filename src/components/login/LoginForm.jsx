"use client";

import { PasswordInput, TextInput } from "@mantine/core";
import { Alert, Card } from "react-bootstrap";
import { SubmitButton } from "../common/form-fields/SubmitButton";
import { useActionState } from "react";
import { loginAction } from "@/actions/auth-actions";

import "../login/login-form.scss";


const LoginForm = () => {
  const [state, formAction, isPending] = useActionState(loginAction);

  return (
    <div className="login-form">
      <Card>
        <Card.Body>
          <h4>Please Enter Your Email &amp; Password</h4>

          <form action={formAction}>
            <TextInput
              label="Email"
              name="email"
              className="mb-3"
              errorMessage={state?.errors?.email}
              defaultValue="admin@example.com"
            />

            <PasswordInput
              label="Password"
              name="password"
              className="mb-3"
              errorMessage={state?.errors?.password}
              defaultValue="Admin123!"
            />

            {!state?.ok && state?.message && (
              <Alert variant="danger">{state?.message}</Alert>
            )}
            <SubmitButton title="Login" pending={isPending} />
          </form>
        </Card.Body>
      </Card>
    </div>
  );
};

export default LoginForm; 
