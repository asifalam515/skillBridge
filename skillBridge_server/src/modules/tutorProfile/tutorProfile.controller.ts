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
const getAllTutorProfiles = async (req: Request, res: Response) => {
  try {
    const tutorsProfile = await tutorProfileService.getAllTutorProfiles();
    res.status(200).json(tutorsProfile);
  } catch (error) {
    console.error("Error fetching tutor profiles:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};
const getTutorProfileByUserId = async (req: Request, res: Response) => {
  try {
    const userId = req.params.userId as string;
    const tutorProfile =
      await tutorProfileService.getTutorProfileByUserId(userId);
    if (!tutorProfile) {
      return res.status(404).json({ error: "Tutor profile not found" });
    }
    res.status(200).json(tutorProfile);
  } catch (error) {
    console.error("Error fetching tutor profile:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};
const updateTutorProfileById = async (req: Request, res: Response) => {
  try {
    const tutorProfileId = req.params.id as string;
    const updatedData = req.body;
    const updatedTutorProfile =
      await tutorProfileService.updateTutorProfileById(
        updatedData,
        tutorProfileId,
      );
    res.status(200).json(updatedTutorProfile);
  } catch (error) {
    console.error("Error updating tutor profile:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};
export const tutorProfileController = {
  createTutorProfile,
  getAllTutorProfiles,
  getTutorProfileByUserId,
  updateTutorProfileById,
};
