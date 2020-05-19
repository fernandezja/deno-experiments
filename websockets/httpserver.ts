import { Application, Router, send } from "https://deno.land/x/oak/mod.ts";

const currentWorkingDirectory = Deno.cwd();

const app = new Application();

app.use(async (ctx) => {
  console.log('Static....');
  console.log('Static....pathname: '+ctx.request.url.pathname);
  console.log('Static....currentWorkingDirectory: '+currentWorkingDirectory);
  
  await send(ctx, ctx.request.url.pathname, {
    root: `${currentWorkingDirectory}/public`,
    index: "index.html",
  });
});


await app.listen({ port: 8000 });