import Link from "next/link";
import { ChatBubbleOvalLeftIcon } from "@heroicons/react/24/outline";

export default function CreateAccount() {
  return (
    <div className="flex flex-col gap-10 px-8 py-6">
      <div className="flex flex-col gap-2 *:font-medium">
        <h1>안녕하세요</h1>
        <h2>Fill in the form below to join</h2>
      </div>
      <form className="flex flex-col gap-3">
        <div className="flex flex-col gap-2">
          <input
            className="bg-transparent rounded-md w-full h-10 focus:outline-none focus:ring-2 ring-neutal-200 placeholder:text-neutral-400 focus:ring-orange-500"
            type="text"
            placeholder="Username"
            required
          />
          <span className="text-red-500">Input error</span>
        </div>
        <button className="primary-btn py-2.5">Create account</button>
      </form>
      <div className="w-full h-px bg-neutral-500" />
      <div>
        <Link
          className="primary-btn flex h-10 items-center justify-cente gap-2 w-full px-3 py-2.5 rounded-md bg-orange-500 text-white font-medium hover:bg-orange-600 focus:outline-none focus:ring-2 ring-orange-500 items-center justify-center gap-2 w-full px-3 py-2.5 rounded-md bg-orange-500 text-white font-medium hover:bg-orange-600 focus:outline-none focus:ring-2 ring-orange-500"
          href="/sms"
        >
          <span>
            <ChatBubbleOvalLeftIcon className="text-white h-6" />
          </span>
          <span>Sign up with SMS</span>
        </Link>
      </div>
    </div>
  );
}
