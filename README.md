### component ini complete dengan storybook dengan port 6006

#### 📂 Feature-Based Architecture (Modular Feature Architecture)
##### Strukturnya sudah dipisah per fitur (misalnya features/blog, features/blogDetails), dan ada juga folder app/_components buat global/shared component.
#### Tiap feature punya:
```
   - hooks → custom hooks spesifik feature.
   - service → API call untuk feature tsb.
   - model → type/TS interface untuk domain itu.
   - view → komponen UI untuk domain itu (misal list blog, blog card).
```

Granular Subfolder → di dalam view/_components kamu pecah lagi per widget (misal blog-card, list-blog).
### jalankan storybook 
npm run storybook

### jalankan project 
npm run dev

### npm create storybook@latest
```
 - recomended
 - rm -rf node_modules package-lock.json
   npm install
   npm install --save-dev esbuild @esbuild/darwin-arm64
   npm run storybook
```