    "use server";

import { resolve } from "path";
import z from "zod";
import db from "../lib/db";
import { IronSession, getIronSession } from "iron-session";
import { cookies } from "next/headers";
import bcrypt from "bcrypt";
import { redirect } from "next/navigation";
import { error } from "console";

const checkUser = async (email: string) => {
    const user = await db.user.findUnique({where: {email}, select: {id: true}});
    return !user;
}

const checkPassword = async (email: string, password: string) => {
    const user = await db.user.findUnique({where: {email}, select: {id: true, password: true}});
    return bcrypt.compare(password, user!.password);
}

const formSchema = z.object({
    email: z.string().min(3, "이름이 너무 짧습니다."),
    password: z.string().min(3),
});

export default async function server(prevState: any, formData: FormData) {
    const data = {
        email: formData.get("email") as string,
        password: formData.get("password") as string,

    };
    const result = await formSchema.spa(data);
    if (!result.success) {
        return result.error.flatten();
    } else {
        const user = await db.user.findUnique({where: {email: result.data.email}});
        if(await bcrypt.compare(result.data.password, user!.password ?? "")) {
        const session = await getIronSession(cookies(), {
            cookieName: "mintonofall",
            password: process.env.SECRET_COOKIE_PASSWORD!,
        });
        //@ts-ignore
        session.id = user.id;
        await session.save();
        redirect("/profile");
        return null;

        } else {
return error("비밀번호가 일치하지 않습니다.");
        }
    
    }
}