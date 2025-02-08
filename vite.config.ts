import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import tsconfig from 'vite-tsconfig-paths';
import svgr from 'vite-plugin-svgr';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tsconfig(), svgr()],
});
