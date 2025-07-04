import { Client, Account, Avatars, Databases, Storage } from "appwrite";
import env from "@/env"

const client = new Client()
  .setEndpoint(env.appwrite.endpoint) // Your API Endpoint
  .setProject(env.appwrite.projectId); // Your project ID

const databases = new Databases(client);
const avatars = new Avatars(client);
const storage = new Storage(client);
const account = new Account(client);


export { client, databases, avatars, storage, account };

// const promise = account.updatePrefs({ darkTheme: true, language: "en" });

// promise.then(
//   function (response) {
//     console.log(response); // Success
//   },
//   function (error) {
//     console.log(error); // Failure
//   }
// );
