import { TutorProfile } from "../../../generated/prisma/browser";
import { prisma } from "../../../lib/prisma";

const createTutorProfile = async (
  tutorProfileData: TutorProfile,
  userId: string,
) => {
  const newTutorProfile = await prisma.tutorProfile.create({
    data: {
      ...tutorProfileData,
      userId: userId,
    },
  });
  return newTutorProfile;
};
export const tutorProfileService = {
  createTutorProfile,
};
