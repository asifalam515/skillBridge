import { NextFunction, Request, Response } from "express";
import { auth as betterAuth } from "../../lib/auth";

export const auth = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const session = await betterAuth.api.getSession({
      headers: req.headers,
    });

    if (!session || !session.user) {
      return res.status(401).json({ message: "Unauthorized" });
    }

    // attach user to request
    (req as any).user = session.user;

    next();
  } catch (error) {
    console.error("Auth error:", error);
    return res.status(401).json({ message: "Unauthorized" });
  }
};
