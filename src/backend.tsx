import { serve } from "bun";
import { Database } from "bun:sqlite";

import index from "./index.html";


const db = new Database("database.sqlite", { create: true });
db.run(`CREATE TABLE IF NOT EXISTS items (id INTEGER PRIMARY KEY, name TEXT);`);
for (let i = 1; i <= 10000; i++) {
  db.run(`INSERT OR IGNORE INTO items (id, name) VALUES (?, ?);`, [i, `Item ${i}`]);
}


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

    "/api/hello/:name": async req => {
      const name = req.params.name;
      return Response.json({
        message: `Hello, ${name}!`,
      });
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
