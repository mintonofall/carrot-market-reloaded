"use client";
import Link from "next/link";
import { ChatBubbleOvalLeftIcon } from "@heroicons/react/24/outline";
import FormInput from "@/components/FormInput";
import FormButton from "@/components/form-btn";
import SocialLogin from "@/components/social-login";

export default function Login() {
  const onClick = async () => {
    const response = await fetch("/www/users", {
      method: "POST",
      body: JSON.stringify({ username: "nico", password: "1234" }),
    });
    console.log(await response.json());
  };

  return (
    <div className="flex flex-col gap-10 px-8 py-6">
      <div className="flex flex-col gap-2 *:font-medium">
        <h1>안녕하세요</h1>
        <h2>Fill in the form below to join</h2>
      </div>
      <form className="flex flex-col gap-3">
        <div className="flex flex-col gap-2">
          <FormInput type="email" placeholder="Email" required errors={[]} />
          <FormInput
            type="password"
            placeholder="Password"
            required
            errors={[]}
          />
        </div>
      </form>
      <span onClick={onClick}>
        <FormButton loading={false} text="Log In" />
      </span>
      <div className="w-full h-px bg-neutral-500" />
      <div className="flex flex-col gap-2">
        <SocialLogin />
      </div>
    </div>
  );
}
