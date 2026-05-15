import { useActionState } from "react";

import { submitForm } from "../services/register-form.ts";

import Input from "./Input.tsx";

export default function RegisterForm() {
  const [state, formAction, isPending] = useActionState(submitForm, {
    success: false,
    errors: {
      username: "",
      email: "",
      password: "",
    },
  });

  return (
    <div className="mx-auto mt-10 w-100 border border-gray-100 bg-white p-8 shadow-sm">
      <h2 className="mb-6 text-2xl font-bold tracking-tight text-gray-800">
        REGISTER
      </h2>
      <form action={formAction} className="space-y-6">
        <Input
          id="username"
          label="Username"
          type="text"
          required={true}
          placeholder="Ana_K"
          error={state?.errors.username}
        />

        <Input
          id="email"
          label="Email"
          type="email"
          required={true}
          placeholder="ana@gmail.com"
          error={state?.errors.email}
        />

        <Input
          id="password"
          label="Password"
          type="password"
          required={true}
          error={state?.errors.password}
        />

        <button
          className="w-full cursor-pointer bg-[#f36d21] py-3 font-bold tracking-wider text-white uppercase transition-colors hover:bg-[#e25c10]"
          disabled={isPending}
        >
          Register
        </button>
      </form>
    </div>
  );
}
