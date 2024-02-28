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
      window.location.href =
        "https://www.google.com/maps/place/Microwest+-+R%C3%A9paration+et+vente+de+Smartphones/@46.9916092,6.9287078,17z/data=!4m8!3m7!1s0x478e0a232716a8e1:0x56a99df72b5c57df!8m2!3d46.9916092!4d6.9287078!9m1!1b1!16s%2Fg%2F11c0pjzwlv?entry=ttu";
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
      <Textarea placeholder="Décrivez votre expérience" className="mt-2" />
      <Dialog>
        <DialogTrigger asChild>
          <Button className="mt-2">Envoyer</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Evaluation envoyée</DialogTitle>
            <DialogDescription>
              <p>Merci pour votre évaluation !</p>
              <p>Elle a été transmise et sera prise compte</p>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default StarRating;
