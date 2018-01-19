const example = (req, res, next) => {
  // Example middleware to add a property to all routes
  req.example = 'example';
  console.log(
    `THIS MIDDLEWARE APPLIES TO ALL ROUTES - Example - added global param ${
      req.example
    }`,
  );
  return next();
};

const example1 = (req, res, next) => {
  console.log(
    `THIS MIDDLEWARE APPLIES TO ALL ROUTES - Example1 - Time: ${Date.now()}`,
  );
  return next();
};

export { example, example1 };
