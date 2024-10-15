import { Client, Databases, Account } from "appwrite";

const client = new Client();
client
  .setEndpoint("https://cloud.appwrite.io/v1")
  .setProject("66fba861000f0ea5ec2c");

export const account = new Account(client);
export const databases = new Databases(client);
