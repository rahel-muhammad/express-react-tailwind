# Minimalist Express + React + Tailwind boilerplate

After installing dependencies, run `npm start` in root directory, this will:

-   Start express server on env.PORT or 3500 by default
-   CRA bundling, which also builds tailwindcss thanks to craco
-   Open default browser at port 3000 to start developing with react

Please note if you change 3500 port in server/server.js be sure  
to also update "proxy" in client/package.json (development)
