import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import helmet from "helmet";
import morgan from "morgan";
import bodyParser from "body-parser";
import clienRoutes from "./routes/client.js";
import generalRoutes from "./routes/general.js";
import salesRoutes from "./routes/sales.js";
import managementRoutes from "./routes/management.js";

/* Data Inport */
import User from './models/User.js';
import Product from './models/Product.js';
import ProductStat from './models/ProductStat.js';
import {dataUser, dataProduct, dataProductStat} from './data/index.js';


/* Configurations */
dotenv.config();
const app = express();
app.use(express.json());

/*
The helmet middleware is used to secure the Express app by setting various HTTP headers. In this case, it sets the Cross-Origin-Resource-Policy header to "cross-origin", which allows resources to be loaded from another domain. This is useful if you have a frontend application that is hosted on a different domain from your backend API.
*/
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));

/*
The morgan middleware logs detailed information about requests to the console.
The format used is "common", which logs the HTTP method, URL, HTTP version, status code, response time, and the size of the response in bytes.
this is something that you need if you call api form anoher domain
*/
app.use(morgan("common"));

/*
The cors middleware enables Cross-Origin Resource Sharing, which allows your server to accept requests from other domains. This is useful if you have a frontend application that is hosted on a different domain from your backend API.
*/
app.use(cors());

/*
The body-parser middleware is used to parse incoming requests with JSON payloads. This is useful if you're building an API that receives data in JSON format.
The first middleware parses JSON requests, and the second middleware parses URL-encoded payloads.
The extended: false option tells Express to not parse multipart/form-data requests, which are used to upload files. This is important for security reasons, as it prevents the code from processing potentially malicious payloads.
*/
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

/* Routes */
app.use('/clinet', clienRoutes);
app.use('/general', generalRoutes);
app.use('/sales', salesRoutes);
app.use('/management', managementRoutes);


/* Mongose configuration */
const PORT = process.env.PORT || 9000;
mongoose
    .connect(process.env.MONGO_URL, {
        // useNewUrlParser: true,
        // useUnifiedTopology: true,
    })
    .then(() => {
        app.listen(PORT, () => console.log(`Server Port: ${PORT}`));
        // * only add data one time 
        // User.insertMany(dataUser);
        // Product.insertMany(dataProduct);
        // ProductStat.insertMany(dataProductStat);
    })
    .catch((error) => console.log(`${error} did not connect`));
