import connect from "./connect/connect.js";
import User from "./schemas/user.js"

// 더미 데이터 넣기용
connect();

const user_inserted = await User.create(
    {
        email : "herjun123@gamail.com",
        name : "이영섭",
        age: 20,
    },
    {
        email : "ksh5678@gmail.com",
        name : "홍길동",
        age : 30,
    }
)

const users = await User.find();
console.log(users);