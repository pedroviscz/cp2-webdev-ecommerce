import React from "react";

export default function Section({ products, title }) {
  return (
    <section className="flex flex-col">
        <h1 className="font-semibold text-2xl mb-5">{title}</h1>
      <div className="flex grid-cols-3 gap-3 mb-5">
        {products.map((cloth) => (
          <div
            className="flex pb-3 flex-col text-center min-h-100 border rounded-2xl border-gray-500 max-w-1/2 justify-center items-center"
            key={cloth.id}
          >
            <img src={cloth.image} alt="" />
            <hr className="w-full pt-3" />
            <p>{cloth.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
