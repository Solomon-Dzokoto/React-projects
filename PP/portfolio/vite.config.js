import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
    host: 'localhost',  // Default, but can be set to '0.0.0.0' to make it accessible from other devices on your network
    open: true, // Automatically open the app in your browser after starting the server
    proxy: {
      // Proxy requests to specific URLs
      '/api': {
        target: 'http://localhost:3000', // Example: your backend API server
        changeOrigin: true, // Required for virtual hosted services
        rewrite: (path) => path.replace(/^\/api/, '') 
      }
    }
  },
  // Add additional Vite configurations as needed
})