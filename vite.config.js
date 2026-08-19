import { defineConfig } from 'vite';

// base: './' — GitHub Pages 등 하위 경로 배포에서도 자산 경로가 깨지지 않게 한다.
// 브랜드 콘텐츠(JSON)는 public/brands 에 두고 런타임에 fetch 하므로,
// 빌드를 다시 하지 않아도 데이터 교체만으로 사이트 내용이 바뀐다.
export default defineConfig({
  root: '.',
  base: './',
  publicDir: 'public',
  server: {
    port: 5173,
    open: true
  },
  build: {
    outDir: 'dist',
    target: 'es2020'
  }
});
