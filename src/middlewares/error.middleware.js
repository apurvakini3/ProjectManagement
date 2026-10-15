import { ApiError } from "../utils/api-error.js";

const errorHandler = (err, req, res, next) => {
  const statusCode = err instanceof ApiError ? err.statusCode : 500;

  return res.status(statusCode).json({
    success: false,
    message: err instanceof ApiError ? err.message : "Internal Server Error",
    errors: err instanceof ApiError ? err.errors : [],
  });
};

export { errorHandler };
