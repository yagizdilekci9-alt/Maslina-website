"use client";

import { useState } from "react";
import Image from "next/image";
import { useCart } from "@/context/CartContext";

export function CartWidget({ className }: { className?: string }) {
  const { items, totalCount, removeFromCart } = useCart();
  const [open, setOpen] = useState(false);

  return (
    <div className="relative">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        className={
          className ?? "relative flex items-center gap-1 text-sm tracking-wide text-foreground uppercase"
        }
        aria-label="Cart"
      >
        Cart
        <span className="ml-1 flex h-5 w-5 items-center justify-center rounded-full bg-foreground text-[11px] text-background">
          {totalCount}
        </span>
      </button>

      {open && (
        <div className="absolute right-0 z-30 mt-3 w-80 bg-white text-foreground shadow-xl">
          <div className="max-h-96 overflow-y-auto p-4">
            {items.length === 0 ? (
              <p className="py-6 text-center text-sm text-foreground-muted">Your cart is empty.</p>
            ) : (
              <ul className="flex flex-col gap-4">
                {items.map((item) => (
                  <li key={item.slug} className="flex items-center gap-3">
                    <div className="relative h-16 w-16 shrink-0 overflow-hidden bg-field">
                      <Image src={item.image} alt={item.title} fill className="object-cover" />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm">{item.title}</p>
                      <p className="text-xs text-foreground-muted">Qty: {item.quantity}</p>
                    </div>
                    <button
                      type="button"
                      onClick={() => removeFromCart(item.slug)}
                      className="text-xs text-foreground-muted uppercase underline hover:text-foreground"
                    >
                      Remove
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
