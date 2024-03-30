"use server"

import { redirect } from "next/dist/server/api-utils";
import z from "zod";

const checkUsername = (username: string) => !username.includes("potato");
const checkPassword = (password: string, confirmPassword:string) => { return password === confirmPassword; };



const formSchema = z.object({
    username: z.string().min(3,"이름이 너무 짧습니다.").max(10).refine(checkUsername, {message: "이름에 potato가 포함되어 있습니다."}),
    email: z.string().email(),
    password: z.string().min(3),
    confirmPassword: z.string().min(3),
}).refine(data => checkPassword(data.password, data.confirmPassword), {message: "비밀번호가 일치하지 않습니다.", path: ["confirmPassword"]});

export default async function handleCreateAccount(prevState: any, formData: FormData) {
    const data = { username: formData.get("username"), email: formData.get("email"), password: formData.get("password"), confirmPassword: formData.get("confirmPassword")};
const result = formSchema.safeParse(data);
if (!result.success) {
    console.log(result.error.flatten());
    return result.error.flatten();
} else {
    console.log(data);
    return null;
    
}
}