import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react' // Or your framework plugin

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/CalcSite/', // Replace <your-repo-name> with your GitHub repository name
})