import type { NextApiRequest, NextApiResponse } from 'next';

type Event = {
  nome: string;
  totalEquipes: number;
  status: string;
  data: string;
};

const events: Event[] = [
  {
    nome: 'Clube do Laço Coração Pantaneiro',
    totalEquipes: 10,
    status: 'Ativo',
    data: '09 a 11 de Junho',
  },
  {
    nome: 'Festa Junina Campo Alegre',
    totalEquipes: 5,
    status: 'Ativo',
    data: '20 a 22 de Junho',
  },
  {
    nome: 'Festival da Cultura',
    totalEquipes: 8,
    status: 'Inativo',
    data: '15 a 17 de Julho',
  },
];

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json(events);
}
