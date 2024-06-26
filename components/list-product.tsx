import Link from "next/link";
import Image from "next/image";

interface ListProductProps {
  title: string;
  createdAt: Date;
  id: number;
  price: number;
  photo: string;
}

export default function ListProduct({
  title,
  createdAt,
  id,
  price,
  photo,
}: ListProductProps) {
  return (
    <Link className="flex gap-5" href={`/products/${id}`}>
      <div className="relative size-28 rounded-md overflow-hidden">
        <Image fill src={photo} alt={title} />
      </div>
      <div className="flex flex-col gap-1 *:text-white ">
        <span className="text-lg text-white">{title}</span>
        <span className="text-sm text-neutral-500">{createdAt.toString()}</span>
        <span className="text-lg font-semibold">{price} </span>
      </div>
    </Link>
  );
}
