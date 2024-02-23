import Image from "next/image";
import React from "react";
import ReactStars from "react-stars";
import { render } from "react-dom";
import StarRating from "@/components/StarRating";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center mt-10 p-24">
      <h1 className="font-extrabold">Donnez nous une évaluation</h1>
      <div>
        <h2>Envie de laisser un commentaire ?</h2>
        <StarRating />
      </div>
    </main>
  );
}
