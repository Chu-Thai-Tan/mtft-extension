import { defineConfig } from 'vite';
import { resolve } from 'path';
import { writeFileSync, copyFileSync, mkdirSync } from 'fs';

// Helper function to copy files
function copyFiles(buildComplete) {
  // Ensure dist directory exists
  try {
    mkdirSync('dist');
  } catch (err) {
    if (err.code !== 'EEXIST') throw err;
  }

  // Copy manifest
  copyFileSync('manifest.json', 'dist/manifest.json');

  // Copy icons folder if it exists
  try {
    mkdirSync('dist/icons');
    copyFileSync('icons/tft13_kogmaw.png', 'dist/icons/tft13_kogmaw.png');
  } catch (err) {
    if (err.code !== 'EEXIST') console.error('Error copying icons:', err);
  }
}

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        'content-script': resolve(__dirname, 'content.js'),
      },
      output: {
        entryFileNames: '[name].js',
        format: 'iife',
      },
    },
    // Ensure source maps are generated
    sourcemap: true,
  },
  plugins: [
    {
      name: 'copy-files',
      writeBundle: copyFiles
    }
  ]
}); 