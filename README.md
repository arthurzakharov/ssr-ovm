# SSR OVM

A small [Next.js](https://nextjs.org) demo that fetches recipes from [DummyJSON](https://dummyjson.com/docs/recipes).

## Getting Started

Install dependencies and run the development server:

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Production Build

```bash
npm run build
npm run start
```

## Docker

Build and run the production image locally:

```bash
docker build -t ssr-ovm .
docker run --rm -p 3000:3000 ssr-ovm
```

## Deploy To Railway

Railway will detect the root `Dockerfile` and build the app as a Docker service.

1. Push this repository to GitHub.
2. In Railway, create a new project.
3. Choose **Deploy from GitHub repo** and select this repo.
4. Deploy the service.
5. In the service Networking settings, generate a public domain.

The app listens on `process.env.PORT`, so Railway can provide the runtime port automatically.
