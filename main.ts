import { Client } from "mtkruto/mod.ts";
import { StorageDenoKV } from "mtkruto/storage/1_storage_deno_kv.ts";
import env from "./env.ts";

const client = new Client(new StorageDenoKV(), env.API_ID, env.API_HASH);

await client.start(env.BOT_TOKEN);

const me = await client.getMe();
console.log(`Running as @${me.username}...`);
