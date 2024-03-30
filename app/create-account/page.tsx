"use client";
import Link from "next/link";
import { ChatBubbleOvalLeftIcon } from "@heroicons/react/24/outline";
import FormInput from "@/components/FormInput";
import FormButton from "@/components/form-btn";
import SocialLogin from "@/components/social-login";
import { useFormState } from "react-dom";
import handleCreateAccount from "./action";

export default function CreateAccount() {
  const [state, action] = useFormState(handleCreateAccount, null);
  return (
    <div className="flex flex-col gap-10 px-8 py-6">
      <div className="flex flex-col gap-2 *:font-medium">
        <h1>안녕하세요</h1>
        <h2>Fill in the form below to join</h2>
      </div>
      <form action={action} className="flex flex-col gap-3">
        <div className="flex flex-col gap-2">
          <FormInput
            type="text"
            placeholder="Username"
            name="username"
            errors={state?.fieldErrors.username}
          />
          <FormInput
            type="email"
            placeholder="Email"
            errors={state?.fieldErrors.email}
            name="email"
          />
          <FormInput
            type="password"
            placeholder="Password"
            errors={state?.fieldErrors.password}
            name="password"
          />
          <FormInput
            type="password"
            placeholder="Confirm Password"
            name="confirmPassword"
            errors={state?.fieldErrors.confirmPassword}
          />
        </div>
        <FormButton type="submit" text="Create Account" />
      </form>
      <div className="w-full h-px bg-neutral-500" />
      <div className="flex flex-col gap-2">
        <SocialLogin />
      </div>
    </div>
  );
}
