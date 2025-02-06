"use server";
import { z } from "zod";
import postgres from "postgres";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
const sql = postgres(process.env.POSTGRES_URL!, { ssl: "require" });

const FormSchema = z.object({
  id: z.string(),
  customerId: z.string(),
  amount: z.coerce.number(),
  status: z.enum(["pending", "paid"]), // harus antara 'paid' atau pending
  date: z.string(),
});

const CreateInvoice = FormSchema.omit({ id: true, date: true }); //.omit() digunakan untuk menghapus beberapa properti dari skema validasi.

export const createInvoice = async (formData: FormData) => {
  const { customerId, amount, status } = CreateInvoice.parse({
    customerId: formData.get("customerId"),
    amount: formData.get("amount"),
    status: formData.get("status"),
  });
  const amountInCent = amount * 100;
  const date = new Date().toISOString().split("T")[0];
  await sql`
    INSERT INTO invoices (customer_id, amount, status, date)
    VALUES (${customerId}, ${amountInCent}, ${status}, ${date})
  `;
  redirect("/dashboard/invoices");
};
