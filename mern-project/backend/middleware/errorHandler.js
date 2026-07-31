// error handling middleware
const errorHandler = (err, req, res, next) => {
  console.error("Unhandled error:", err.stack);

  const statusCode = res.statusCode === 200 ? 500 : res.statusCode;

  res.status(statusCode).json({
    success: false,
    message: err.message || "Internal Server Error",
    stack: process.env.NODE_ENV === "production" ? null : err.stack,
  });
};

// catch requests to routes that don't exist
const notFound = (req, res, next) => {
  const error = new Error("Page not found");
  res.status(404);
  next(error);
};

module.exports = { errorHandler, notFound };
