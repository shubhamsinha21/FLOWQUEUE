// configuration of how a server will get connected to appwrite
import { env } from "@/app/env";
import { Avatars, Storage, Databases, Client, Users } from "node-appwrite";
// talking to user via backend

let client = new Client();

client
  .setEndpoint(env.appwrite.endpoint) // Your API Endpoint
  .setProject(env.appwrite.projectId) // Your project ID
  .setKey(env.appwrite.apikey); // Your secret API key

//   this instance gives access to all the databses created here
export const databases = new Databases(client);
export const users = new Users(client);
export const avatsr = new Avatars(client);
export const storage = new Storage(client);
