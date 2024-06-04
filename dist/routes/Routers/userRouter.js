"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const controller_1 = require("../../controllers/controller");
const postTarea_1 = require("../../controllers/tareas/postTarea");
const getTarea_1 = require("../../controllers/tareas/getTarea");
const userRouter = (0, express_1.Router)();
userRouter.get("/", controller_1.getTareasUsers);
userRouter.get("/:id", getTarea_1.getTareaUserId);
userRouter.post("/register", postTarea_1.createUserTarea);
userRouter.post("/login", postTarea_1.login);
userRouter.put("/");
userRouter.delete("/");
exports.default = userRouter;
