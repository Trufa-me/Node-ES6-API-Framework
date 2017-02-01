export default {
  example(req, res, next) {
    // Example middleware to add a property to all routes
    req.example = 'example';
    return next();
  },
};
