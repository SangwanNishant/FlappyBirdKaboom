// vite.config.js
import { defineConfig } from 'vite';

export default defineConfig({
  server: {
    host: '0.0.0.0', // This allows the server to be accessed from outside your local machine
    port: 4173, // This is the port number the server will use
  },
});
