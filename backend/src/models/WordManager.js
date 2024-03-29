const AbstractManager = require("./AbstractManager");

class WordManager extends AbstractManager {
  constructor() {
    // Call the constructor of the parent class (AbstractManager)
    // and pass the table name "item" as configuration
    super({ table: "word" });
  }

  // The C of CRUD - Create operation

  async create(word) {
    const [result] = await this.database.query(
      `INSERT INTO ${this.table} (word,type) VALUE (?,?)`,
      [word.word, word.type]
    );

    return result.insertId;
  }

  // // The Rs of CRUD - Read operations

  async allSubject() {
    const [rows] = await this.database.query(
      `SELECT id, word FROM ${this.table} WHERE type="subject"`
      // `SELECT word FROM ${this.table} WHERE type="subject order by rand() limit 1"`
    );
    return rows;
  }

  async allAdjective() {
    const [rows] = await this.database.query(
      `SELECT id, word FROM ${this.table} WHERE type="adjective"`
    );
    return rows;
  }

  // async read(id) {
  //   // Execute the SQL SELECT query to retrieve a specific item by its ID
  //   const [rows] = await this.database.query(
  //     `select * from ${this.table} where id = ?`,
  //     [id]
  //   );

  //   // Return the first row of the result, which represents the item
  //   return rows[0];
  // }

  async readAll() {
    // Execute the SQL SELECT query to retrieve all items from the "item" table
    const [rows] = await this.database.query(`select * from ${this.table}`);
    // Return the array of items
    return rows;
  }

  // The U of CRUD - Update operation
  // TODO: Implement the update operation to modify an existing item

  // async update(item) {
  //   ...
  // }

  // The D of CRUD - Delete operation
  // TODO: Implement the delete operation to remove an item by its ID

  // async delete(id) {
  //   ...
  // }
}

module.exports = WordManager;
