// mongodb+srv://app:<password>@app.l4cect9.mongodb.net/
import mongoose from "mongoose";

const connection_url = `mongodb+srv://app:1234@app.l4cect9.mongodb.net/`;

const connect = () => {
    if(process.env.NODE_ENV !== "proudction" ) {
        mongoose.set("debug", true);
    }

    mongoose.connect(connection_url, {
        dbName : "deploy",
    })
    .then(()=>{
        console.log("Connected to MongoDB")
    })
    .catch((err) => {
        console.error(err);
        console.log("Connected fail to MongDB")
    })
}

export default connect;
