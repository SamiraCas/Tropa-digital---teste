import type { NextApiRequest, NextApiResponse } from "next";

type LoginResponse = {
  message: string;
  token?: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<LoginResponse>,
) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Método não permitido" });
  }

  const { email, password } = req.body;

  if (email === "teste@exemplo.com" && password === "123456") {
    return res.status(200).json({ message: "Login bem-sucedido", token: "token-falso-123" });
  } else {
    return res.status(401).json({ message: "Credenciais inválidas" });
  }
}
