"use server"

import { redirect } from "next/navigation";
import z from "zod";
import db from "../lib/db";
import { IronSession, getIronSession } from "iron-session";
import { cookies } from "next/headers";
import bcrypt from "bcrypt";
import getSession from "../lib/session";

const checkUsername = (username: string) => !username.includes("potato");
const checkPassword = (password: string, confirmPassword:string) => { return password === confirmPassword; };

const checkUniqueUsername: any = async (username: string) => {
    const user = await db.user.findUnique({where: {username},
    select: {id: true}}); // id만 가져오기
    console.log(user);
    return !user;
};


const formSchema = z.object({
    username: z.string().min(3,"이름이 너무 짧습니다.").max(10).refine(checkUsername, {message: "이름에 potato가 포함되어 있습니다."}).refine(checkUniqueUsername, {message: "이미 사용중인 이름입니다."}),
    email: z.string().email(),
    password: z.string().min(3),
    confirmPassword: z.string().min(3),
}).refine(data => checkPassword(data.password, data.confirmPassword), {message: "비밀번호가 일치하지 않습니다.", path: ["confirmPassword"]});

export default async function handleCreateAccount(prevState: any, formData: FormData) {
    const data = { 
        username: formData.get("username") as string, 
        email: formData.get("email") as string, 
        password: formData.get("password") as string, 
        confirmPassword: formData.get("confirmPassword") as string
    };
    const result = await formSchema.spa(data);
    if (!result.success) {
        console.log(result.error.flatten());
        return result.error.flatten();
    } else {
    result.data.password = await bcrypt.hash(data.password, 10);
       const user = await db.user.create({data: {username: result.data.username, email: result.data.email, password: result.data.password}});
 const session = await getSession();
 session.id = user.id;
    await session.save();
 redirect("/profile");
        return null;
    }
}