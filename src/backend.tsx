import { serve } from "bun";
import { Database } from "bun:sqlite";
import puppeteer from "puppeteer";
import index from "./index.html";


const db = new Database("database.sqlite", { create: true });
db.run(`CREATE TABLE IF NOT EXISTS items (id INTEGER PRIMARY KEY, name TEXT);`);
for (let i = 1; i <= 10000; i++) {
  db.run(`INSERT OR IGNORE INTO items (id, name) VALUES (?, ?);`, [i, `Item ${i}`]);
}

  const browser = await puppeteer.launch()
  const page = await browser.newPage()

const server = serve({
  routes: {
    // Serve index.html for all unmatched routes.
    "/*": index,

    "/api/items": {
      async GET(req) {
        const items = db.query("SELECT * FROM items;").all();
        return Response.json(items);
      },
      async PUT(req) {
        return Response.json({
          message: "Hello, world!",
          method: "PUT",
        });
      },
    },

    "/api/pdf": {
      async POST(req) {
        const body = await req.json()
      const { title, content } = body


      await page.setContent(`
        <html>
          <head>
            <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet">
          </head>
          <body class="p-10">
            <h1 class="text-3xl font-bold mb-4">${title}</h1>
            <p class="text-gray-700">${content}</p>
          </body>
        </html>
      `)
      const pdf = await page.pdf({ format: "A4"})

      // Convert Uint8Array to Buffer for Blob compatibility
      const buffer = Buffer.from(pdf)
      const blob = new Blob([buffer], { type: "application/pdf" })
      return new Response(blob)
      },
    },
  },

  development: process.env.NODE_ENV !== "production" && {
    // Enable browser hot reloading in development
    hmr: true,

    // Echo console logs from the browser to the server
    console: true,
  },
});

console.log(`🚀 Server running at ${server.url}`);
