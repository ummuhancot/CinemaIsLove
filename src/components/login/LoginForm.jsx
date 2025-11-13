"use client";

import { Alert, Card } from "react-bootstrap";
import { SubmitButton } from "../common/form-fields/SubmitButton";
import { useActionState } from "react";
import { loginAction } from "@/actions/auth-actions";

import "../login/login-form.scss";
import { TextInput } from "../common/form-fields/TextInput";
import { PasswordImput } from "../common/form-fields/PasswordImput";


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
              iconBefore="user"
              errorMessage={state?.errors?.email}
            />

            <PasswordImput
              label="Password"
              name="password"
              className="mb-3"
              iconAfter="key"
              errorMessage={state?.errors?.password}
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
