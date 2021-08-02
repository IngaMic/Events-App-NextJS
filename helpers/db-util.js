import { MongoClient } from "mongodb";
import { dbname, dbkey, folder } from "../secrets.json";

export async function connectDatabase() {
    const client = await MongoClient.connect(
        `mongodb+srv://${dbname}:${dbkey}@cluster0.qdemx.mongodb.net/${folder}?retryWrites=true&w=majority`
    );
    return client;
}
export async function insertDocument(client, collection, document) {
    const db = client.db();
    const result = await db.collection(collection).insertOne(document);
    return result;
}

export async function getAllDocuments(client, collection, sort, filter = {}) {
    const db = client.db();

    const documents = await db
        .collection(collection)
        .find(filter)
        .sort(sort)
        .toArray();

    return documents;
}
