import "std/dotenv/load.ts";
import { cleanEnv, num, str } from "envalid/mod.ts";

export default cleanEnv(Deno.env.toObject(), {
  API_ID: num(),
  API_HASH: str(),
  BOT_TOKEN: str(),
  CHAT_ID: num(),
});
