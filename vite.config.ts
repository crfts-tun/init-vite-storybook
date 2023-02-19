import { resolve } from 'path';
import { defineConfig } from 'vite'
import tsconfigPaths from 'vite-tsconfig-paths'
import {viteStaticCopy} from 'vite-plugin-static-copy'
import react from '@vitejs/plugin-react'
import dts from 'vite-plugin-dts';

const projectRoot = resolve(__dirname)

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      "@": resolve(projectRoot, "src"),
    }
  },
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'VespaDesignSystem',
      fileName: 'vespa-design-system',
      formats: ['es', 'cjs', 'umd', 'iife']
      // fileName: (format) => `test-vespa-design-system.${format}.js`
    },
    rollupOptions: {
      // Make sure to externalize dependencies
      external: ['react'],
      output: {
        // Provide global variables to use in the UMD build for externalized deps
        globals: {
          react: 'React',
        },
      },
    },
  },
  plugins: [
    react({
      // Exclude storybook stories
      exclude: /\.stories\.(t|j)sx?$/,
      // Only .tsx files
      include: '**/*.tsx',
    }),
    dts({
      insertTypesEntry: true,
    }),
    tsconfigPaths(),
    viteStaticCopy({
      targets: [
        {
          src: 'custom-theme.cjs',
          dest: './'
        }
      ]
    }),
  ],
})
