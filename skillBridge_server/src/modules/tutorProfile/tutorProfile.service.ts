import { TutorProfile } from "../../../generated/prisma/browser";
import { prisma } from "../../../lib/prisma";

const createTutorProfile = async (
  data: {
    bio: string;
    pricePerHr: number;
    experience: number;
    categoryIds?: string[];
  },
  userId: string,
) => {
  return await prisma.$transaction(async (tx) => {
    // Create tutor profile
    const tutorProfile = await tx.tutorProfile.create({
      data: {
        bio: data.bio,
        pricePerHr: data.pricePerHr,
        experience: data.experience,
        userId: userId,
      },
    });

    // Add categories if provided
    if (data.categoryIds && data.categoryIds.length > 0) {
      const tutorCategories = data.categoryIds.map((categoryId) => ({
        tutorId: tutorProfile.id,
        categoryId,
      }));

      await tx.tutorCategory.createMany({
        data: tutorCategories,
        skipDuplicates: true,
      });
    }

    return await tx.tutorProfile.findUnique({
      where: { id: tutorProfile.id },
      include: {
        user: {
          select: {
            id: true,
            name: true,
            email: true,
            image: true,
          },
        },
        categories: {
          include: {
            category: true,
          },
        },
      },
    });
  });
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
