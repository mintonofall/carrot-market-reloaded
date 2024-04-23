import db from "@/lib/db";
import Image from "next/image";
import ListProduct from "@/components/list-product";
import Link from "next/link";
import { PlusIcon } from "@heroicons/react/24/outline";

async function getProducts() {
  const products = await db.product.findMany({
    select: {
      title: true,
      createdAt: true,
      id: true,
      price: true,
      photo: true,
    },
  });
  return products;
}

export default async function Product() {
  const products = await getProducts();
  return (
    <div>
      <div>
        {products.map((product) => (
          <div className="py-2">
            <ListProduct key={product.id} {...product} />
          </div>
        ))}
      </div>
      <div>
        <Link href="/products/add">
          <div className="bg-orange-500 flex items-center justify-center rounded-full fixed bottom-20 right-8 size-20 p-5 ">
            <PlusIcon className="text-white"></PlusIcon>
          </div>
        </Link>
      </div>
    </div>
  );
}
