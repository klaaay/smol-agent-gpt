import { createRouter } from '@trpc/server';
import { z } from 'zod';

export const router = createRouter()
  .query('getHello', {
    input: z.object({
      name: z.string(),
    }),
    resolve: async ({ input }) => {
      return `Hello ${input.name}`;
    },
  });