import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import dts from 'vite-plugin-dts';

export default defineConfig({
    build: {
        lib: {
            entry: 'src/index.ts',
            name: 'bones-design-system',
            fileName: (format) => `bones-design-system.${format}.js`,
            outDir: 'dist',
        },
        rollupOptions: {
            external: ['react', 'react-dom'],
            output: {
                globals: {
                    react: 'React',
                    'react-dom': 'ReactDOM',
                },
            },
        },
    },
    plugins: [
        react(),
        dts({
            insertTypesEntry: true, // Add a types entry to package.json
        }),
    ],
});
