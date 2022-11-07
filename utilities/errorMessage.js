const errorMessage = (error) => {
  return {
    status: "fail",
    message: error.message,
  };
};
module.exports = errorMessage;
