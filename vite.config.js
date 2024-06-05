import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	build: {
		sourcemap: true // 프로덕션 빌드에서도 소스 맵 생성
	},
	server: {
		sourcemap: true // 개발 서버에서 소스 맵 생성
	}
});
