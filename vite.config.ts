import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import biomePlugin from "vite-plugin-biome";

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react(), biomePlugin()],
	resolve: {
		alias: {
			"@": path.resolve(__dirname, "./src"),
		},
	},

	server: {
		port: 3000,
	},
});
