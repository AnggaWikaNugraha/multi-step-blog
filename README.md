
## How to Run
```bash
# 1. Clone repo
git clone https://github.com/AnggaWikaNugraha/multi-step-blog.git

# 2. Install dependencies

npm install
# or
yarn install

# 3. Run development server
npm run dev
# or
yarn dev

# App will be running on http://localhost:3000

# 📝 MyBoost FE Test

## Overview
This project is a **multi-step blog creation wizard** built with **Next.js (App Router)**.  
It allows users to create blog posts step-by-step and view them on a blog homepage.  
Blog posts are stored locally (in global state) without a backend.

## Features
- **Multi-Step Wizard**
  - Step 1: Blog Metadata (Title, Author)
  - Step 2: Blog Summary & Category (Tech, Lifestyle, Business)
  - Step 3: Blog Content (Text area)
  - Step 4: Review & Submit
  - Completion: Success screen + post added to list
- **Form Validation** per step (required fields)
- **Blog List Page** with Title, Author, Summary, Date, Category
- **Blog Detail Page** showing full post
- **Global State Management** with `useReducer + Context`
- **Reusable Components**: Stepper, WizardNavigation, SearchInput, SelectSearch, EmptyState, Skeleton

## Tech Stack
- [Next.js 13+ (App Router)](https://nextjs.org/)
- React Context + useReducer (state management)
- Tailwind CSS (UI styling)
- TypeScript (types & safety)

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