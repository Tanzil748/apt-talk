import express from "express";
import { getSelectedUser } from "../controllers/user.js";
const router = express.Router();

router.get("/:id", getSelectedUser); //user id
// router.put("/", updateLoggedUser);

export { router as userRouter };
