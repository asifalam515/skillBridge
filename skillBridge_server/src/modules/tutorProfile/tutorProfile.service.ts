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
const getAllTutorProfiles = async () => {
  const tutorsProfile = await prisma.tutorProfile.findMany();
  return tutorsProfile;
};
const getTutorProfileByUserId = async (userId: string) => {
  const tutorProfile = await prisma.tutorProfile.findUnique({
    where: { userId: userId },
  });
  return tutorProfile;
};
const updateTutorProfileById = async (
  updatedData: Partial<TutorProfile>,
  tutorProfileId: string,
) => {
  const updatedTutorProfile = await prisma.tutorProfile.update({
    where: { id: tutorProfileId },
    data: updatedData,
  });
  return updatedTutorProfile;
};
const deleteTutorProfileById = async (tutorProfileId: string) => {
  await prisma.tutorProfile.delete({
    where: { id: tutorProfileId },
  });
};
export const tutorProfileService = {
  createTutorProfile,
  getAllTutorProfiles,
  getTutorProfileByUserId,
  updateTutorProfileById,
  deleteTutorProfileById,
};
