"use client";

import { useFormStatus } from "react-dom";

interface FormButtonProps {
  text: string;
  type?: "submit" | "button";
}

export default function FormButton({ text, type }: FormButtonProps) {
  const { pending } = useFormStatus();
  return (
    <button
      disabled={pending}
      type={type}
      className="primary-btn h-10 disabled:bg-neutral-400 disabled:text-neutral-300 disabled:cursor-not-allowed"
    >
      {pending ? "Loading..." : text}
    </button>
  );
}
