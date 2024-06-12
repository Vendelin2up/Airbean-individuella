const requireAdmin = (req, res, next) => {
  if (!req.session || !req.session.isOnline || req.session.role !== "admin") {
    return res.status(403).send("Access denied. Admins only.");
  }
  next();
};

export default requireAdmin;
