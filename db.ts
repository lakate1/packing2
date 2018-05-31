const connectionString:string = 'mongodb://leah:leah123@ds139950.mlab.com:39950/leah';

import * as mongodb from 'mongodb';

export default class Database {
  public static db:mongodb.Db;

  public static connect() {
    return mongodb.MongoClient.connect(connectionString).then((db) => {
        console.log('success')
        this.db = db;
    }).catch((err) => {
        console.error(err);
    });
  }
}
