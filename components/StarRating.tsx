"use client";
import React, { useState } from "react";
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
  const [hoverValue, setHoverValue] = useState<number | undefined>(undefined);
  const [comment, setComment] = useState<string>("");
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

  const sendFeedback = async () => {
    try {
      const response = await fetch("/api/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          rating: currentValue,
          commentaire: comment,
        }),
      });

      if (!response.ok) {
        throw new Error("Erreur lors de l'envoi des données");
      }

      // Logique de gestion de la réponse ici
      console.log("Avis envoyé avec succès !");
    } catch (error) {
      console.error("Erreur lors de l'envoi de l'avis : ", error);
    }
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
              style={{ marginRight: 10, cursor: "pointer" }}
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
        value={comment}
        onChange={(e) => setComment(e.target.value)}
      />
      <Dialog>
        <DialogTrigger asChild>
          <Button className="mt-2" onClick={sendFeedback}>
            Envoyer
          </Button>
        </DialogTrigger>
        <DialogContent className="">
          <DialogHeader className="">
            <DialogTitle>Evaluation envoyée</DialogTitle>
            <DialogDescription>
              <p>
                Nous avons bien reçu votre avis, il sera attentivement pris en
                considération.
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
