import Image from "next/image";
import React from "react";
import ReactStars from "react-stars";
import { render } from "react-dom";
import StarRating from "@/components/StarRating";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center mt-10 p-24">
      <h1 className="scroll-m-20 text-2xl font-extrabold tracking-tight md:text-3xl lg:text-5xl mb-2">
        Donnez nous une évaluation
      </h1>
      <div>
        <p className="leading-7 [&:not(:first-child)]:mt-6">
          Envie de laisser un commentaire ?
        </p>
        <StarRating />
      </div>
    </main>
  );
}
