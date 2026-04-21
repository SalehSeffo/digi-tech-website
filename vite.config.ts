import { defineConfig } from 'vite'
import path from 'path'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import { copyFileSync } from 'fs'


function figmaAssetResolver() {
  return {
    name: 'figma-asset-resolver',
    resolveId(id) {
      if (id.startsWith('figma:asset/')) {
        const filename = id.replace('figma:asset/', '')
        return path.resolve(__dirname, 'src/assets', filename)
      }
    },
  }
}

function copyHtaccessPlugin() {
  return {
    name: 'copy-htaccess',
    writeBundle() {
      try {
        copyFileSync(
          path.resolve(__dirname, '.htaccess'),
          path.resolve(__dirname, 'dist', '.htaccess')
        )
        console.log('✓ .htaccess copied to dist/')
      } catch (err) {
        console.warn('⚠️  Could not copy .htaccess file:', err)
      }
    },
  }
}

export default defineConfig({
  plugins: [
    figmaAssetResolver(),
    copyHtaccessPlugin(),
    // The React and Tailwind plugins are both required for Make, even if
    // Tailwind is not being actively used – do not remove them
    react(),
    tailwindcss(),
  ],
  resolve: {
    alias: {
      // Alias @ to the src directory
      '@': path.resolve(__dirname, './src'),
    },
  },

  // File types to support raw imports. Never add .css, .tsx, or .ts files to this.
  assetsInclude: ['**/*.svg', '**/*.csv'],
})
