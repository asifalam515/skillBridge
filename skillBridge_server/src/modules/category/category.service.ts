import { prisma } from "../../../lib/prisma";

const createCategoryByAdmin = async (categoryData: any) => {
  try {
    // Admin specific logic can be added here
    const createdCategory = await prisma.category.create({
      data: categoryData,
    });
    return createdCategory;
  } catch (error) {
    console.error("Error creating category:", error);
    throw error; // Re-throw to be caught by controller
  }
};

export const categoryService = {
  createCategoryByAdmin,
};
