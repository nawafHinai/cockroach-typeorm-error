import { createConnection } from "typeorm";
import { User } from "./entity/user";

createConnection("main").then(async (connection) => {
    var user = new User
    user.name = "nawaf"

    await connection.manager.save(user)
    var users = await connection.manager.find(User)
    console.log(users)
})
