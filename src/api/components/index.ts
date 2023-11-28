import { Router } from "express";
import { userRouter } from "./user/routes";

export function registerApiRoutes(router: Router, prefix: string = ''): void {
    router.use(`${prefix}/users`, userRouter);
}