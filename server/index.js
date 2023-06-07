import Express from "express";
import bodyParser from "body-parser";
import mongoose, { connect } from "mongoose";
import cors from "cors";

//every express application is first initialize this app 
const app = Express();

//now we can use all differnt methods on that app instance

app.use(bodyParser.json({ limit : "30mb", extended: true}));
app.use(bodyParser.urlencoded({ limit : "30mb", extended: true}));
app.use(cors());

//now we need to connect our sever to the database

const CONNECTION_URL = 'mongodb+srv://syedabdulraheem801:Rahbjr%40123@cluster0.iyektve.mongodb.net/?retryWrites=true&w=majority'
const PORT = process.env.PORT || 3000;

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => app.listen(PORT, ()=> console.log(`server is running on port : ${PORT}`)))
    .catch((error) => console.log(error.message));

// mongoose.set('useFindAndModify', false);