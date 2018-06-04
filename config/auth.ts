// const jwt = require("jsonwebtoken");

// verifyUser: function(req, res, next) {
//     try {
//       let token = req.get("Authorization").split(" ")[1];
//       console.log(token);
//       const decoded = jwt.verify(token, "secret");
//       console.log(decoded);
//       req.userData = decoded;
//       next();
//     } catch (err) {
//       return res.status(401).json({ message: "Auth Failed" });
//     }
//   }
// };