import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import helmet from "helmet";
import morgan from "morgan";
 import clientRoutes from "./routes/clientRoutes.js";
 import generalRoutes from "./routes/generalRoutes.js";
 import managementRoutes from "./routes/managementRoutes.js";
 import salesRoutes from "./routes/salesRoutes.js";

// data imports
import User from './models/User.js';
import Product from "./models/Product.js";
import ProductStat from "./models/ProductStat.js";
import { dataUser,dataProduct,dataProductStat,dataTransaction ,dataOverallStat,dataAffiliateStat} from './data/index.js';
import Transaction from "./models/Transaction.js";
import OverallStat from "./models/OverallStat.js";
import AffiliateStat from "./models/AffiliateStat.js";

/*Configuration */
dotenv.config();
const app = express();
app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({policy: "cross-origin"}))
app.use(morgan("common"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
app.use(cors());

/*Routes*/
 app.use("/client",clientRoutes);
 app.use("/general",generalRoutes);
app.use("/management",managementRoutes);
app.use("/sales",salesRoutes);



// Mongoose setup
const DB_CONNECT = process.env.MONGO_URL
console.log("Hello");
const PORT = process.env.PORT || 9000;
console.log(process.env.MONGO_URL)
mongoose.connect(
    process.env.MONGO_URL,
   {
     useNewUrlParser: true,
    // useFindAndModify: false,
     useUnifiedTopology: true 
   }
 ).then(async ()=>{
   /*Add data one time only or as needed */
   //await mongoose.connection.db.dropDatabase();
   console.log("Database Connected")
  // KPI.insertMany(kpis);
  //Product.insertMany(products);
  //Transaction.insertMany(transactions);
  //User.insertMany(dataUser) 
 // console.log("dataUser",dataUser)
 //Product.insertMany(dataProduct);
 //ProductStat.insertMany(dataProductStat);
 //Transaction.insertMany(dataTransaction);

//  console.log("Products",dataProduct);
//  console.log("Product_stat",dataProductStat);
//console.log("Transaction_log",dataTransaction);
//OverallStat.insertMany(dataOverallStat);
//AffiliateStat.insertMany(dataAffiliateStat);
//console.log("AffiliateStat",dataAffiliateStat);
//console.log("Overall Stat",dataOverallStat);
 
 })
 .catch((err)=>console.log("Database Connection error:",err));
 //app.use(foodRouter); 

 app.listen(process.env.PORT, () => {
    console.log("Server is running...");
  });