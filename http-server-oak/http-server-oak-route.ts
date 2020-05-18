import { Application, Router } from "https://deno.land/x/oak/mod.ts";
//https://deno.land/x/oak

const books = new Map<string, any>();
books.set("1", {
  id: "1",
  title: "The Hound of the Baskervilles",
  author: "Conan Doyle, Author",
});

const router = new Router();
router
  .get("/", (ctx) => {
    ctx.response.body = "Hello world!";
  })
  .get("/book", (ctx) => {
    ctx.response.body = Array.from(books.values());
  })
  .get("/book/:id", (ctx) => {
    if (ctx.params && ctx.params.id && books.has(ctx.params.id)) {
      ctx.response.body = books.get(ctx.params.id);
    }
  });

const app = new Application();
app.use(router.routes());
app.use(router.allowedMethods());

await app.listen({ port: 8000 });