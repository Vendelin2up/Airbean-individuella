// export default function sessionMiddleware(req, res, next){
//     if (typeof req.session.isOnline === "undefined") {
//       req.session.isOnline = false;
//     }
//     next();
// }

// middlewares/session.js
const sessionMiddleware = (req, res, next) => {
  if (!req.session.isOnline) {
    req.session.isOnline = false;
  }
  if (!req.session.role) {
    req.session.role = null;
  }
  next();
};

export default sessionMiddleware;
