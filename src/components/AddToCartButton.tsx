"use client";

import { useState } from "react";
import { useCart } from "@/context/CartContext";

export function AddToCartButton({
  slug,
  title,
  image,
  className,
}: {
  slug: string;
  title: string;
  image: string;
  className?: string;
}) {
  const { addToCart } = useCart();
  const [added, setAdded] = useState(false);

  return (
    <button
      type="button"
      onClick={() => {
        addToCart({ slug, title, image });
        setAdded(true);
        setTimeout(() => setAdded(false), 1500);
      }}
      className={
        className ??
        "w-full bg-button px-6 py-3 text-sm tracking-widest text-button-text uppercase transition-opacity hover:opacity-90"
      }
    >
      {added ? "Added" : "Add to Cart"}
    </button>
  );
}
