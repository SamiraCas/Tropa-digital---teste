import type { NextApiRequest, NextApiResponse } from "next";

type LoginResponse = {
  message: string;
  token?: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<LoginResponse>
) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Método não permitido" });
  }

  // Aceita qualquer email/senha
  return res.status(200).json({
    message: "Login bem-sucedido",
    token: "token-falso-qualquer-usuario",
  });
}
