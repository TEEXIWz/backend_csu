import express from "express";
import mysql from "mysql";

export const router = express.Router();
export const conn = mysql.createPool({
    connectionLimit : 10,
    host : "202.28.34.197",
    user : "web65_64011212232",
    password : "64011212232@csmsu",
    database: "web65_64011212232"
})

router.get("/", (req, res) => {
    if (req.query.id) {
        res.send("Get in trip.ts Query id: " + req.query.id);
    }else{
        conn.query('SELECT *,FLOOR(DATEDIFF(NOW(), birthdate)/365) as age FROM student', (err,result)=>{
            if (err) {
                res.status(500).json(err)
            }else{
                res.json(result)
            }
        })
        // res.send("Get in trip.ts");
    }
});