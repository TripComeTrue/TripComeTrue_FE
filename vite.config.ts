import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import { VitePWA } from 'vite-plugin-pwa';
import tsconfigPaths from 'vite-tsconfig-paths';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tsconfigPaths(),
    // VitePWA({
    //   registerType: 'autoUpdate',
    //   devOptions: {
    //     enabled: true,
    //   },
    //   manifest: {
    //     icons: [
    //       {
    //         src: 'logo192.png',
    //         type: 'image/png',
    //         sizes: '192x192',
    //       },
    //       {
    //         src: 'logo512.png',
    //         type: 'image/png',
    //         sizes: '512x512',
    //       },
    //     ],
    //   },
    // }),
  ],
});
