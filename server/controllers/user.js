import { pool } from "../db/connectDb.js";
import jwt from "jsonwebtoken";
import "dotenv/config";

export const getSelectedUser = async (req, res) => {
  const id = req.params.id;
  try {
    const result = await pool.query("SELECT * FROM users WHERE id = $1", [id]);

    if (result.rows.length === 0) {
      return res.status(404).json({ message: "User not found" });
    }

    const { userpassword, ...others } = result.rows[0];
    return res.status(200).json(others);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

// FUTURE VERSION
// export const updateLoggedUser = async (req, res) => {
//   const token = req.cookies.accessToken;
//   if (!token) {
//     return res.status(401).json("Authentication failed. No linked user found");
//   }
//   jwt.verify(token, process.env.JWTkey, async (error, user) => {
//     if (error)
//       return res
//         .status(403)
//         .json("Authorization failed. Cannot do that action!");

//     try {
//       await pool.query("UPDATE users SET username=$1 WHERE id=$2", [
//         req.body.userName,
//         user.id,
//       ]);
//       return res.status(200).json("Profile has been updated!");
//     } catch (error) {
//       console.log(error);
//       res.status(500).json(error);
//     }
//   });
// };
