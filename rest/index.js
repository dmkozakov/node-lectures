// URI - https://www.youtube.com/watch?v=PMFL88umE20&nikita=admin#title
// URN - https://www.youtube.com
// URL - /watch?v=PMFL88umE20
// ? - начало строки запроса
// v=PMFL88umE20 - параметры запроса
// /watch - ендпоинт
// & - разделитель парметрв запроса
// #title - якорь на элемент на странице

// Розбираємо URN
// https://www.youtube.com:8080/watch?v=PMFL88umE20
// https - протокол захисту
// www.youtube.com - DNS
// 8080 = порт

const path = require("path");
const fs = require("fs/promises");

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
    return users;
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
