import { EmailTemplate } from "@/components/email-template";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST() {
  try {
    const data = await resend.emails.send({
      from: "Acme <onboarding@resend.dev>",
      to: ["delivered@resend.dev"],
      subject: "Hello world",
      react: EmailTemplate({ firstName: "John" }),
      text: "Hello John, welcome to Acme.", // Ajoutez un contenu textuel correspondant à votre email
    });

    return Response.json(data);
  } catch (error) {
    return Response.json({ error });
  }
}
