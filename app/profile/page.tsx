import getSession from "@/app/lib/session";
import db from "../lib/db";

async function getUser() {
  const session = await getSession();
  if (session.id) {
    const user = await db.user.findUnique({
      where: {
        id: session.id,
      },
    });
    return user;
  }
}

export default async function Profile() {
  const user = await getUser();

  return <h1>Hello {user?.username}</h1>;
}
