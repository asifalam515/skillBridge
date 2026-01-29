import { Router } from "express";
import { auth, UserRole } from "../../middleware/auth";
import { tutorProfileController } from "./tutorProfile.controller";

export const tutorProfileRouter = Router();
tutorProfileRouter.post(
  "/",
  auth(UserRole.TUTOR),
  tutorProfileController.createTutorProfile,
);
