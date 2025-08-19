import {defineConfig} from 'tsup';

export default defineConfig({
  entry: ['src/index.ts'],
  outDir: 'dist',
  format: ['cjs', 'esm'],
  dts: true,
  splitting: false,
  sourcemap: true,
  clean: true,
  minify: true,
  external: ['react', 'react-native', 'react-native-svg'], // don't bundle RN deps
  loader: {
    '.svg': 'copy', // copy .svg files directly
  },
});
