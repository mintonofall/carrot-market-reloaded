"use client";
import Link from "next/link";
import { ChatBubbleOvalLeftIcon } from "@heroicons/react/24/outline";
import FormInput from "@/components/FormInput";
import FormButton from "@/components/form-btn";
import SocialLogin from "@/components/social-login";
import smsLogin from "./action";
import { useFormState } from "react-dom";

export default function CreateAccount() {
  const intialState = { token: true };
  const [state, action] = useFormState(smsLogin, intialState);
  return (
    <div className="flex flex-col gap-10 px-8 py-6">
      <div className="flex flex-col gap-2 *:font-medium">
        <h1>안녕하세요..</h1>
        <h2>Verify your phone number</h2>
      </div>
      <form action={action} className="flex flex-col gap-3">
        <div className="flex flex-col gap-2">
          <FormInput
            name="phoneNumber"
            type="string"
            placeholder="Phone number"
            errors={[]}
          />
          {state.token ? (
            <FormInput
              name="verification"
              type="string"
              placeholder="Verification code"
              errors={[]}
            />
          ) : null}
        </div>
        <FormButton text="Verify" type="submit" />
      </form>
    </div>
  );
}
