"use client";
import React from "react";
import { useState } from "react";
import { FaStar } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

const colors = {
  orange: "#FFBA5A",
  grey: "#a9a9a9",
};

function StarRating() {
  const [currentValue, setCurrentValue] = useState<number>(0);
  // Pour `useState` sans valeur initiale spécifique, vous pouvez utiliser `useState<number | undefined>(undefined)`
  const [hoverValue, setHoverValue] = useState<number | undefined>(undefined);
  const stars = Array(5).fill(0);

  const handleClick = (value: number) => {
    setCurrentValue(value);
    if (value === 5) {
      window.location.href = "https://g.page/r/Cd9XXCv3nalWEB0/review";
    }
  };

  const handleMouseOver = (newHoverValue: number) => {
    setHoverValue(newHoverValue);
  };

  const handleMouseLeave = () => {
    setHoverValue(undefined);
  };

  return (
    <div className="flex flex-col">
      <div className="flex items-center">
        {stars.map((_, index) => {
          return (
            <FaStar
              key={index}
              size={42}
              onClick={() => handleClick(index + 1)}
              onMouseOver={() => handleMouseOver(index + 1)}
              onMouseLeave={handleMouseLeave}
              color={
                (hoverValue || currentValue) > index
                  ? colors.orange
                  : colors.grey
              }
              style={{
                marginRight: 10,
                cursor: "pointer",
              }}
            />
          );
        })}
      </div>
      <Label htmlFor="message" className="mt-2">
        Envie de laisser un commentaire ?
      </Label>
      <Textarea
        placeholder="Décrivez votre expérience"
        className="mt-2"
        id="message"
      />
      <Dialog>
        <DialogTrigger asChild>
          <Button className="mt-2">Envoyer</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Evaluation envoyée</DialogTitle>
            <DialogDescription>
              <p>
                Nous avons bien reçu votre avis, il sera attentivement pris en
                considération.{" "}
              </p>
              <p>
                Votre retour est essentiel pour nous aider à améliorer
                constamment nos services.
              </p>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default StarRating;
