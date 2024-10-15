import { Client, Account, ID } from 'appwrite';

const client = new Client();
client
  .setEndpoint("https://cloud.appwrite.io/v1")
  .setProject("66fccd62000fdc80ced0"); 



const account = new Account(client);
export { client, account, ID };