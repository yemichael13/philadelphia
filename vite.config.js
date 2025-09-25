import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import viteSitemap from 'vite-plugin-sitemap'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    tailwindcss(),
    react(),
  viteSitemap({
      hostname: 'https://yourdomain.com', // replace with your real domain
      routes: [
        '/',              // Home
        '/about',         // About page
        '/services',      // Services
        '/gallery',       // Gallery
        '/contact'        // Contact
      ]
    })
  ],
  theme: {
    extend: {
      keyframes: {
        scrollLeft: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        scrollRight: {
          "0%": { transform: "translateX(-50%)" },
          "100%": { transform: "translateX(0)" },
        },
      },
      animation: {
        scrollLeft: "scrollLeft 20s linear infinite",
        scrollRight: "scrollRight 20s linear infinite",
      },
    },
  },
})
