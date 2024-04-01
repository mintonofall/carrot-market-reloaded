"use server"

import { redirect } from "next/navigation";
import z from "zod";

const formSchema = z.object({
    phoneNumber: z.string().min(3,"이름이 너무 짧습니다.").max(10),
    verification: z.string().min(3),
});
const phoneSchema = z.object({
    phoneNumber: z.string().min(3,"이름이 너무 짧습니다.").max(10),
});

interface ActionState{
    token?: boolean;

}

export default async function smsLogin(prevState: ActionState, formData: FormData) {
    const token = formData.get("token");
    if(!prevState.token){
        const data = { phoneNumber: formData.get("phoneNumber")};
        const result = phoneSchema.safeParse(data);
        if (!result.success) {
            console.log(result.error.flatten());
            return result.error.flatten();
        } else {
            console.log("data : ",data);
            return { token: true};
        }
    } else {
        const data = { phoneNumber: formData.get("phoneNumber"), verification: formData.get("verification")};
        const result = formSchema.safeParse(data);
        if (!result.success) {
            console.log(result.error.flatten());
            return { error : result.error.flatten(),
            token: false};
        } else {
            console.log(data);
            prevState.token = false;
            console.log("token : ",prevState.token);
            redirect ("/");
        
        }
    }

}

