import { Permission } from "node-appwrite";

// creating database collection of questions
import { db, questionCollection } from "../name";

import { databases } from "./config";

// creating questions
export default async function createQuestionCollection() {
  // create collection - database se leke
  // db - database id
  // question collection - question id
  await databases.createCollection(
    db,
    questionCollection,
    // name
    questionCollection,
    [
      // set of permissions
      //  anyone can read
      Permission.read("any"),
      Permission.read("users"),
      Permission.create("users"),
      Permission.update("users"),
      Permission.delete("users"),
    ]
  );

  console.log("Question Collection is created");

  //   creating attributes and indexes
  // manually we dont which comes first
  // promissing of all values
  await Promise.all([
    databases.createStringAttribute(db, questionCollection, "title", 100, true),

    databases.createStringAttribute(
      db,
      questionCollection,
      "content",
      1000,
      true
    ),

    databases.createStringAttribute(
      db,
      questionCollection,
      "authorId",
      50,
      true
    ),

    databases.createStringAttribute(
      db,
      questionCollection,
      "tags",
      50,
      true,
      undefined,
      true
    ),

    databases.createStringAttribute(
      db,
      questionCollection,
      "attachmentId",
      50,
      false
    ),
  ]);

  console.log("Question attribute created");

  //   create indexes

  /*  await Promise.all([
    databases.createIndex(
      db,
      questionCollection,
      "title",
      IndexType.Fulltext,
      ["title"],
      ["asc"]
    ),

    databases.createIndex(
        db,
        questionCollection,
        "content",
        IndexType.Fulltext,
        ["title"],
        ["asc"]
      ),

  ]);
  */
}
