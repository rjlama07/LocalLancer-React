import jwt from "jsonwebtoken";
import createError from "../utils/createError.js";

const JWT_KEY = "586ab63d048a1d69a43ba9d1a4c4693a"; // Hardcoded JWT key

export const verifyToken = (req, res, next) => {
  const token = req.cookies.accessToken;
  console.log('Token:', token);  // Debugging log
  console.log('JWT_KEY:', JWT_KEY);  // Debugging log

  if (!token) return next(createError(401, "You are not authenticated!"));

  // Manually decode token to check expiry and structure
  const decoded = jwt.decode(token, { complete: true });
  console.log('Decoded Token:', decoded);  // Debugging log

  jwt.verify(token, JWT_KEY, (err, payload) => {
    if (err) {
      console.error("JWT Verification Error:", err);  // Debugging log
      return next(createError(403, "Token is not valid!"));
    }
    console.log('Payload:', payload);  // Debugging log
    req.userId = payload.id;
    req.isSeller = payload.isSeller;
    next();
  });
};
