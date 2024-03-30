interface FormInputProps {
  type: string;
  placeholder: string;
  name?: string;
  errors?: string[];
}

export default function FormInput({
  type,
  placeholder,
  name,
  errors,
}: FormInputProps) {
  return (
    <div>
      <input
        className="bg-transparent rounded-md ring-1 w-full h-10 focus:outline-none focus:ring-2 ring-neutal-200 placeholder:text-neutral-400 focus:ring-orange-500"
        type={type}
        placeholder={placeholder}
        name={name}
      ></input>
      {errors?.map((error, index) => (
        <span key={index} className="text-red-500">
          {error}
        </span>
      ))}
    </div>
  );
}
