import { Request, Response } from "express";
import { tutorProfileService } from "./tutorProfile.service";
const createTutorProfile = async (req: Request, res: Response) => {
  try {
    const tutorProfileData = req.body;
    console.log(req.user?.role);
    const userId = req.user?.id as string; // Assuming user ID is available in req.user
    if (req.user?.role != "TUTOR") {
      return res
        .status(403)
        .json({ error: "Only tutors can create tutor profiles" });
    }
    if (!userId) {
      return res.status(400).json({ error: "User ID is required" });
    }
    const newTutorProfile = await tutorProfileService.createTutorProfile(
      tutorProfileData,
      userId,
    );
    res.status(201).json(newTutorProfile);
  } catch (error) {
    console.error("Error creating tutor profile:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};
export const tutorProfileController = {
  createTutorProfile,
};
