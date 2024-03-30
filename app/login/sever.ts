    "use server";

import { resolve } from "path";

export default async function server(prevState: any, formData: FormData) {
    await new Promise((resolve) => setTimeout(resolve, 5000));
    console.log("I am loged in!");
    return { errors : ["wrong password", "password is too short"] };
    }