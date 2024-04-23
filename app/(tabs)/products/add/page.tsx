"use client";
import { PhotoIcon } from "@heroicons/react/24/outline";
import FormInput from "@/components/FormInput";
import FormButton from "@/components/form-btn";
export default function AddProduct() {
  const onImageChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log("event", event);
    const {
      target: { files },
    } = event;
  };
  console.log();

  return (
    <div>
      <form className="flex flex-col gap-3 p-5">
        <label
          htmlFor="photo"
          className="border-2 aspect-square flex justify-center items-center flex-col border-dashed border-neutral-200 rounded-lg cursor-pointer"
        >
          <PhotoIcon className="size-20"></PhotoIcon>
          <div>사진을 추가하세요</div>
        </label>
        <input
          onChange={onImageChange}
          type="file"
          id="photo"
          name="photo"
          className="hidden"
        />
        <FormInput name="title" placeholder="제목" type="text" />
        <FormInput name="price" type="number" placeholder="가격" />
        <FormInput name="description" type="text" placeholder="자세한 설명" />
        <FormButton text="작성 완료" />
      </form>
    </div>
  );
}
