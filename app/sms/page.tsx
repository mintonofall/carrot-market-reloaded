import Link from "next/link";
import { ChatBubbleOvalLeftIcon } from "@heroicons/react/24/outline";
import FormInput from "@/components/FormInput";
import FormButton from "@/components/form-btn";
import SocialLogin from "@/components/social-login";

export default function CreateAccount() {
  return (
    <div className="flex flex-col gap-10 px-8 py-6">
      <div className="flex flex-col gap-2 *:font-medium">
        <h1>안녕하세요</h1>
        <h2>Verify your phone number</h2>
      </div>
      <form className="flex flex-col gap-3">
        <div className="flex flex-col gap-2">
          <FormInput
            type="string"
            placeholder="Phone number"
            required
            errors={[]}
          />
          <FormInput
            type="string"
            placeholder="Verification code"
            required
            errors={[]}
          />
        </div>
        <FormButton loading={false} text="Verify" />
      </form>
    </div>
  );
}
