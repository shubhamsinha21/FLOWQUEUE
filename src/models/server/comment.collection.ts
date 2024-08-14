import { Permission } from "node-appwrite";
import { commentCollection, db } from "../name";
import { databases } from "./config";

export default async function createCommentCollection() {
  // creating collection
  await databases.createCollection(db, commentCollection, commentCollection, [
    // set of permissions
    //  anyone can read
    Permission.read("any"),
    Permission.read("users"),
    Permission.create("users"),
    Permission.update("users"),
    Permission.delete("users"),
  ]);

  console.log("Comment collection created");

  //   creating attributes

  await Promise.all([
    databases.createStringAttribute(
      db,
      commentCollection,
      "content",
      1000,
      true
    ),

    databases.createEnumAttribute(
      db,
      commentCollection,
      "type",
      ["answer", "question"],
      true
    ),

    databases.createStringAttribute(
      db,
      commentCollection,
      "questionId",
      50,
      true
    ),

    databases.createStringAttribute(
      db,
      commentCollection,
      "authorId",
      50,
      true
    ),
  ]);

  console.log("Answer attribute created");
}
