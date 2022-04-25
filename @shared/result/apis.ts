
import { Router } from "https://deno.land/x/nhttp@1.1.10/mod.ts";
import { RequestEvent } from "https://raw.githubusercontent.com/herudi/maze/dev-0.0.8/core/types.ts";

const api = new Router<RequestEvent>();
  
export default api;
