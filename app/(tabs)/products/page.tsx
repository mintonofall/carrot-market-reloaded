import db from "@/lib/db";
import Image from "next/image";
import ListProduct from "@/components/list-product";

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
      {products.map((product) => (
        <div className="py-2">
          <ListProduct key={product.id} {...product} />
        </div>
      ))}
    </div>
  );
}
