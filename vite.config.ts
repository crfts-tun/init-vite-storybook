import dts from 'vite-plugin-dts';
import react from '@vitejs/plugin-react'
import tsconfigPaths from 'vite-tsconfig-paths'
import { resolve } from 'path';
import { defineConfig } from 'vite'
import { viteStaticCopy } from 'vite-plugin-static-copy'

// https://vitejs.dev/config/

const projectRoot = resolve(__dirname)

export default defineConfig({
  build: {
    minify: 'esbuild',
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'VespaDesignSystem',
      fileName: 'vespa-design-system',
      formats: ['es', 'cjs', 'umd']
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
        },
        {
          src: './src/hooks',
          dest: './hooks'
        }
      ]
    }),
  ],
})
