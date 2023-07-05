import { createTRPCClient } from '@trpc/client';
import { AppRouter } from '../proto/api';

const client = createTRPCClient<AppRouter>({
  url: 'http://localhost:3000/api/trpc',
});

export default client;