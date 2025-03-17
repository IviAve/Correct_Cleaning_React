import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { viteStaticCopy } from 'vite-plugin-static-copy';
import tailwindcss from '@tailwindcss/vite';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    tailwindcss(),
    react(),
    viteStaticCopy({
      targets: [{ src: 'public/_redirects', dest: '' }]
    }),
    

  ],
  "rules": {
      "react/prop-types": false
    },
  server:{
    port:3001,
  },
  define: {
    "window.jQuery": "jQuery",
  },
  
})
