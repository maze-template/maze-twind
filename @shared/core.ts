import { initApp as baseInitApp } from "https://raw.githubusercontent.com/herudi/maze/dev-0.0.8/core/server.ts";
import ErrorPage from "../pages/_default/error.tsx";
import ssr from "../pages/_default/ssr.ts";
import config from "../maze.config.ts";
import RootApp from "./root_app.tsx";
import apis from "./result/apis.ts";
import { pages } from "./result/pages.ts";
import { BUILD_ID } from "./result/constant.ts";
import { pages as server_pages } from "./result/server_pages.ts";

export default (static_url?: string, {
  routerCallback,
  staticConfig,
} = {} as any) => {
  return baseInitApp({
    root: RootApp,
    error_page: ErrorPage,
    pages: pages,
    server_pages: server_pages,
    apis: apis,
    meta_url: static_url,
    build_id: BUILD_ID,
    ssr: ssr,
    static_config: staticConfig,
    etag: config.etag,
    cache_control: config.cache_control
  }, routerCallback);
};
