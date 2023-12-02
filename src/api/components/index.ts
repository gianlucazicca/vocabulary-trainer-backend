import { Router } from "express";
import { userRouter } from "./user/routes";
import { boxRouter } from "./boxes/routes";
export function registerApiRoutes(router: Router, prefix: string = ''): void {
    router.use(`${prefix}/users`, userRouter);
    router.use(`${prefix}/boxes`, boxRouter);
}