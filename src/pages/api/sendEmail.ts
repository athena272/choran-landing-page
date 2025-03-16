import { SMTPClient } from "emailjs";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== "POST") {
        return res.status(405).json({ error: "Método não permitido" });
    }

    const { messageBody } = req.body;

    if (!messageBody) {
        return res.status(400).json({ error: "Corpo da mensagem é obrigatório" });
    }

    const client = new SMTPClient({
        user: process.env.EMAIL as string,
        password: process.env.PASSWORD as string,
        host: "smtp.gmail.com",
        ssl: true,
    });

    try {
        const message = await client.sendAsync({
            text: messageBody,
            from: "guilhermera272@gmail.com",
            to: "guilhermera272@gmail.com",
            subject: "Choran - Landingpage",
        });

        console.log("E-mail enviado:", message);
        return res.status(200).json({ message: "E-mail enviado com sucesso!" });
    } catch (err) {
        console.error("Erro ao enviar e-mail:", err);
        return res.status(500).json({ error: "Falha ao enviar e-mail" });
    }
}
