## Create Flow

1.  `npm create vite@latest`
2.  create `vite.config.js` to configure path aliases
    ```javascript
    export default {
      // ...
      resolve: {
        alias: {
          "@": ".",
          "@assets": "./assets",
          "@features": "./features",
          "@anything": "./anything",
        },
      },
    };
    ```
3.  create `jsconfig.json` to configure path aliases for path inference
    ```json
    {
      "compilerOptions": {
        "baseUrl": ".",
        "paths": {
          "@/*": ["./*"],
          "@features/*": ["./features/*"],
          "@anything/*": ["./anything/*"]
        }
      }
    }
    ```
4.  [install `tailwind`](https://tailwindcss.com/docs/guides/vite)

        `npm install -D tailwindcss postcss autoprefixer`
        `npx tailwindcss init -p`

        Configure your template paths

        ```javascript
        /** @type {import('tailwindcss').Config} */
        export default {
          content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
          // ...
        };
        ```

        Add the Tailwind directives to your CSS

        ```css
        @tailwind base;
        @tailwind components;
        @tailwind utilities;
        ```

😋
