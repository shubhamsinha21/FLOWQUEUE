import { env } from "@/app/env";
import { Client, Account, Avatars, Databases, Storage } from "appwrite";

const client = new Client()
  .setEndpoint(env.appwrite.endpoint) // Your API Endpoint
  .setProject(env.appwrite.projectId); // Your project ID

//   this instance gives access to all the databses created here
export const databases = new Databases(client);
export const account = new Account(client);
export const avatsr = new Avatars(client);
export const storage = new Storage(client);

// avatars - light weight images provided by appwrite
