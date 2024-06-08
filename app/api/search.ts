import type { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { query } = req.query;

  if (typeof query !== 'string') {
    return res.status(400).json({ message: 'Query must be a string' });
  }

  try {
    console.log(`Searching for exercises with query: ${query}`); // Adicionar log

    const exercises = await prisma.exercise.findMany({
      where: {
        name: {
          contains: query,
          mode: 'insensitive',
        },
      },
    });

    console.log(`Found exercises: ${JSON.stringify(exercises)}`); // Adicionar log

    res.status(200).json(exercises);
  } catch (error) {
    console.error('Error fetching exercises:', error); // Adicionar log
    res.status(500).json({ message: 'Internal server error' });
  }
}