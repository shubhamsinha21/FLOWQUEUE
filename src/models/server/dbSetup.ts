import { answerCollection, db } from "../name";
import createAnswerCollection from "./answer.collection";
import createCommentCollection from "./comment.collection";
import createQuestionCollection from "./question.collection";
import createvoteCollection from "./vote.collection";

import { databases } from "./config";

export default async function getCreateDB() {
  try {
    await databases.get(db);
    console.log("Database connection");
  } catch (error) {
    try {
      // creating database
      await databases.create(db, db);
      console.log("Database created");
      await Promise.all([
        // create question collection
        createQuestionCollection(),
        createAnswerCollection(),
        createCommentCollection(),
        createvoteCollection(),
      ]);
      console.log("Collected created");
      console.log("Database connected");
    } catch (error) {
      console.log("Error creating databases or collection", error);
    }
  }

  return databases;
}
