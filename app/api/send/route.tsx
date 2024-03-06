import { EmailTemplate } from "@/components/EmailTemplate";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: any) {
  // Simule l'extraction des données de la requête, dépend de comment les données sont envoyées (ex: JSON)
  const requestJson = await request.json(); // Supposons que la requête est au format JSON
  const { rating, commentaire } = requestJson; // Extraction de rating de la requête

  try {
    const data = await resend.emails.send({
      from: "Review Booster <onboarding@resend.dev>",
      to: ["microwestinformatique@gmail.com"],
      subject: "Nouvel Avis Google",
      react: EmailTemplate({ rating, commentaire }),
      text: "",
    });

    return Response.json(data);
  } catch (error) {
    return Response.json({ error });
  }
}
