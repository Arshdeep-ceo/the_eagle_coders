import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
// import { VitePWA } from 'vite-plugin-pwa';
// import VitePluginGhPages from 'vite-plugin-gh-pages';


// https://vitejs.dev/config/
export default defineConfig({

  build: {
    // Other build settings...
    base: '/the_eagle_coders/', // Replace with your repository name
  },
  plugins: [react()],
})
