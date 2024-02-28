import Image from "next/image";
import React from "react";
import StarRating from "@/components/StarRating";

export default function Home() {
  return (
    <main className="flex justify-center items-center min-h-screen flex-col  ">
      <h1 className="scroll-m-20 text-2xl font-extrabold tracking-tight md:text-4xl lg:text-5xl mb-2">
        Donnez nous une évaluation
      </h1>
      <div>
        <StarRating />
      </div>
    </main>
  );
}
