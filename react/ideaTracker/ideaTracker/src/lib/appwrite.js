import { Client, Databases, Account } from "appwrite";

const client = new Client();
client
  .setEndpoint("https://cloud.appwrite.io/v1")
  .setProject("6715f535002a29d44df4"); 

export const account = new Account(client);
export const databases = new Databases(client);
