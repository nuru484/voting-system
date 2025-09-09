import { z } from "zod";

// Define the form schema using Zod
export const votersFormSchema = z.object({
  name: z.string().min(1, { message: "Voter name is required." }).trim(),
  voterId: z.string().optional(),
  phoneNumber: z
    .string()
    .optional()
    .refine((val) => !val || /^\+?\d{10,15}$/.test(val), {
      message: "Invalid phone number format.",
    }),
  profilePicture: z.string().optional(),
  electionIds: z
    .array(
      z.string().refine((val) => !isNaN(parseInt(val)), {
        message: "Invalid election ID.",
      })
    )
    .min(1, { message: "At least one election is required." }),
});
