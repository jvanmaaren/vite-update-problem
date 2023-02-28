# Problem:

During development any changes to Javascript doesn't update the DOM, although the server and console both report "[vite] hot updated: /App.tsx"

## Setup:

I'm using a backend integration:
https://vitejs.dev/guide/backend-integration.html#backend-integration

- Python is running on port 8000 and is including the dev environment
- Vite is running on port 8080

## To reproduce:

- Install packages: `yarn`
- View `somer-other-server/index.html` on port 8000, for instance using: `cd some-other-server && python3 -m http.server 8000`
- Run the dev server: `yarn dev`
- View `localhost:8000`
- Now change text in App.tsx

## Update: fixed

This was fixed by updating the RefreshRuntime path:
https://github.com/vitejs/vite-plugin-react/issues/101
