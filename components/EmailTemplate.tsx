import * as React from "react";

interface EmailTemplateProps {
  rating: string;
  commentaire: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  rating,
  commentaire,
}) => (
  <div>
    <h1>Voici votre note : {rating} / 5</h1>
    <h2>Commentaire: {commentaire}</h2>
  </div>
);
