const express = require("express");
const router = express.Router();
const db = require("../db");

router.post("/", (req, res) => {

     const {
        full_name,
        email,
        password,
        phone,
        created_at
    } = req.body;




 const sql = `INSERT INTO Users(full_name,email,password,phone,created_at)
  VALUES (anu,anu@gmail.com,anu123,9038633687,12/12/2025)`;

 db.run(

        sql,

        [
            full_name,
            email,
            password,
            phone,
            created_at
        ],

        function(err){

            if(err){

                res.status(500).json({

                    error : err.message

                });

            }

            else{

                res.status(200).json({

                    message :
                    "User inserted successfully!",

                    user_id : this.lastID

                });

            }

        }

    );

});
module.exports = router;