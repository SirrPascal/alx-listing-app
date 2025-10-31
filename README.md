# ALX Listing App

This project is an Airbnb clone (listing page) built with Next.js, TypeScript, and Tailwind CSS. The goal is to create a well-structured, maintainable application foundation, including reusable components and a clear project structure.

This is a [Next.js](httpss://nextjs.org) project bootstrapped with [`create-next-app`](httpss://nextjs.org/docs/pages/api-reference/create-next-app).

## Project Structure

A brief explanation of the main directories used in this project:

* **`components/`**: Contains all reusable React components.
    * `common/`: For generic, application-wide components like `Button.tsx` and `Card.tsx`.
* **`interfaces/`**: Holds all TypeScript interface definitions (e.g., `CardProps`, `ButtonProps`) to ensure type safety across the project.
* **`constants/`**: A central location (`index.ts`) for storing reusable data, strings, API URLs, and configuration settings.
* **`public/`**:
    * `assets/`: Stores all static assets like images, SVGs, and icons that are publicly accessible.
* **`pages/`**: Contains the Next.js pages, which map to application routes (using the Pages Router).

## Getting Started: Running Locally

Follow these steps to get the project running on your local machine.

**1. Install Dependencies**

First, install all the project dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install


# alx-listing-appThis is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/pages/api-reference/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/pages/building-your-application/routing/api-routes) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/pages/building-your-application/routing/api-routes) instead of React pages.

This project uses [`next/font`](https://nextjs.org/docs/pages/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn-pages-router) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/pages/building-your-application/deploying) for more details.
