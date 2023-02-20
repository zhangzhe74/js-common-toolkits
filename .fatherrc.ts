import { defineConfig } from 'father';

export default defineConfig({
  sourcemap: true,
  platform: 'browser',
  esm: {
    input: "src/",
    output: "dist/",
    transformer: "babel",
  },
});
