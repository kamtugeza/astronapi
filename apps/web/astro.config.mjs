// @ts-check
import { defineConfig } from 'astro/config';
import dotenv from 'dotenv';

dotenv.config();

const isDev = process.env.NODE_ENV === 'development';
const isContainer = isDev && process.env.SERVER_HOST === '0.0.0.0';

// https://astro.build/config
export default defineConfig({
  server: {
      host: process.env.SERVER_HOST || '127.0.0.1',
      port: Number.parseInt(process.env.SERVER_PORT || '4312', 10),
  },
  vite: {
    server: {
      watch: isContainer ? { usePolling: true, interval: 300 } : undefined,
    },
  },
});
