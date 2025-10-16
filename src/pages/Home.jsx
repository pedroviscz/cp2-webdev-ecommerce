import { useEffect, useState } from "react";
import Section from "../components/Section";

const categories = ["men's clothing", "jewelery", "electronics"];

export default function Home() {
  const [products, setProducts] = useState({
    mensclothing: [],
    jewelery: [],
    electronics: [],
  });

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const allPromises = categories.map(async (category) => {
          const response = await fetch(`${import.meta.env.VITE_API_URL}/products/category/${category}`);
          const data = await response.json();
          return data;
        });

        const promises = await Promise.all(allPromises);

        setProducts({
          mensclothing: promises[0],
          jewelery: promises[1],
          electronics: promises[2],
        });
      } catch (e) {
        console.error("Erro ao buscar produtos:", e.message);
      }
    };

    fetchProducts();
  }, [categories]);

  return (
    <div className="flex flex-col">
      <Section products={products.mensclothing} title='Mensclothing' />
      <Section products={products.jewelery} title='Jewelery' />
      <Section products={products.electronics} title='Electronics' />
    </div>
  );
}
