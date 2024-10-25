import { Client, Databases, Account } from "appwrite";

const client = new Client();
client
  .setEndpoint("https://cloud.appwrite.io/v1")
  .setProject("66fccd62000fdc80ced0"); // Replace with your project ID

export const account = new Account(client);
export const databases = new Databases(client);
