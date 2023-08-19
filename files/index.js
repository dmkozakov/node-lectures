console.log("Dima files");

const path = require("path");
const fs = require("fs/promises");

// console.log(__dirname);
// console.log(__filename);

// path join __dirname
// console.log(path.join());
// console.log(path.resolve());
// console.log(usersPath);

const usersPath = path.join(__dirname, "..", "db", "users.json");

class FileOperations {
  constructor(path) {
    this.path = path;
  }

  read = async () => {
    const data = await fs.readFile(this.path);
    return JSON.parse(data);
  };

  display = async () => {
    const users = await this.read();
    console.table(users);
    return true;
  };

  create = async users => {
    return await fs.writeFile(this.path, JSON.stringify(users, null, 2));
  };

  add = async user => {
    const users = await this.read();

    users.push(user);

    return await this.create(users);
  };

  remove = async () => {
    await fs.unlink(this.path);
    return true;
  };

  updateOne = async (id, user) => {
    const users = await this.read();
    const idx = users.findIndex(user => user.id === id);

    if (idx === -1) {
      return null;
    }

    users[idx] = { ...users[idx], ...user };
    return await this.create(users);
  };

  removeOne = async id => {
    const users = await this.read();
    const idx = users.findIndex(user => user.id === id);

    if (idx === -1) {
      return null;
    }

    users.splice(idx, 1);
    return await this.create(users);
  };
}

module.exports = new FileOperations(usersPath);

// const file = new FileOperations(usersPath);

// file.display();

// const users = [
//   {
//     "id": "1",
//     "name": "Dima",
//     "status": "admin",
//   },
//   {
//     "id": "2",
//     "name": "Nikita",
//     "status": "moderator",
//   },
//   {
//     "id": "3",
//     "name": "Ihor",
//     "status": "user",
//   },
// ];
// file.create(users);

// file.add({
//   "id": "4",
//   "name": "Andriy",
//   "status": "customer",
// });

// file.remove();

// file.updateOne("2", { name: "Mykyta" });

// file.removeOne("2");
