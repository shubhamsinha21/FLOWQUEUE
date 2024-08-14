import { Permission } from "node-appwrite";
import { voteCollection, db } from "../name";
import { databases } from "./config";

export default async function createvoteCollection() {
  // creating collection
  await databases.createCollection(db, voteCollection, voteCollection, [
    // set of permissions
    //  anyone can read
    Permission.read("any"),
    Permission.read("users"),
    Permission.create("users"),
    Permission.update("users"),
    Permission.delete("users"),
  ]);

  console.log("Vote collection created");

  //   creating attributes

  await Promise.all([
    databases.createStringAttribute(db, voteCollection, "typeId", 50, true),

    databases.createEnumAttribute(
      db,
      voteCollection,
      "type",
      ["answer", "question"],
      true
    ),

    databases.createEnumAttribute(
      db,
      voteCollection,
      "voteStatus",
      ["upVoted", "downVoted"],
      true
    ),

    databases.createStringAttribute(db, voteCollection, "votedById", 50, true),
  ]);

  console.log("Vote attribute created");
}
