import express from "express";
import dbConfig from "./config/db";
import middlewaresConfig from "./config/middlewares";
import { MeetingRoutes, GroupRoutes } from "./modules";

const app = express();

/**
 * Database
 */
dbConfig();

/**
 * Middlewares
 */
middlewaresConfig(app);


app.use("/api/", [MeetingRoutes, GroupRoutes]);

const PORT = process.env.PORT || 3000;

app.listen(PORT, err => {
    if (err) {
        console.error(err); 
    } else {
        console.log(`Listening to ${PORT}`);
    }
});


