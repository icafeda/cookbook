# REACT INITIATION PROJECT
1. Create project (ReactJs)
    1.1 `npx create-react-app myapp` // use react without vite
    1.2 `npm create vite@latest myapp` // use vite to create app react

2. Install Tailwindcss
    2.1 For Tailwindcss@3
        - `npm i -D tailwindcss@3` // install tailwindcss under version 3 (-D = `--save-dev`: install into devdependency)
        - `npx tailwindcss init -p` // create file tailwind.comfig.js và postcss.config.js (if using tailwindcss@latest then do not implement this step )
        - Copy code below and paste into src/index.css at the top
            @tailwind base;
            @tailwind components;
            @tailwind utilities;
    2.2 For Tailwindcss@latest
        - `npm install tailwindcss @tailwindcss/vite` // install tailwindcss latest version
        - In vite.config.jsx
            `import { defineConfig } from 'vite'`
            `import tailwindcss from '@tailwindcss/vite'`
            `export default defineConfig({`
                `plugins: [`
                    `tailwindcss(),`
               ` ],`
            `})`
        - In every CSS file, paste:
            `@import "tailwindcss";`

3. npm i react-router-dom@6 or latest // install router
4. npm i -D json-server json-server-auth // virtual json server 
5. install icon bootstrap (install or CDN)