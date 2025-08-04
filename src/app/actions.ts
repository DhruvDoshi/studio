"use server";

import { z } from "zod";
import { db } from "@/lib/firebase";
import { collection, addDoc } from "firebase/firestore";

const applicationSchema = z.object({
  product: z.string().min(10, { message: "Please provide a detailed description." }),
  problem: z.string().min(10, { message: "Please provide a detailed description." }),
  customers: z.string().min(10, { message: "Please describe your target customers." }),
  strategy: z.string().min(10, { message: "Please describe your go-to-market strategy." }),
  traction: z.string().min(10, { message: "Please describe your traction or validation." }),
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email." }),
});


export async function submitApplication(prevState: any, formData: FormData) {
  const validatedFields = applicationSchema.safeParse({
    product: formData.get("product"),
    problem: formData.get("problem"),
    customers: formData.get("customers"),
    strategy: formData.get("strategy"),
    traction: formData.get("traction"),
    name: formData.get("name"),
    email: formData.get("email"),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: "Please correct the errors and try again.",
    };
  }

  try {
    const docRef = await addDoc(collection(db, "applications"), {
      ...validatedFields.data,
      submittedAt: new Date(),
    });
    console.log("Document written with ID: ", docRef.id);
    return { message: "Application submitted successfully!", errors: {} };
  } catch (e) {
    console.error("Error adding document: ", e);
    return {
      message: "An error occurred while submitting the application. Please try again.",
      errors: {},
    };
  }
}
