import { Client } from "mtkruto/mod.ts";
import { StorageDenoKV } from "mtkruto/storage/1_storage_deno_kv.ts";
import env from "./env.ts";

const client = new Client(new StorageDenoKV(), env.API_ID, env.API_HASH, { initialDc: "1" }); // the initialDc parameters makes sure that we connect to prod servers

client.on("authorizationState", async ({ authorizationState: { authorized } }) => { // this is called when the client’s connection state is changed, and should be applied before authorizing the client
  if (authorized) {
    const me = await client.getMe();
    console.log(`Running as @${me.username}...`);
  }
});

await client.start(env.BOT_TOKEN);
