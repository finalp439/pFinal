const createHttpError = require("http-errors");
const { User } = require("../../database/models");
const { endpointResponse } = require("../../helpers/success");
const { ErrorObject } = require("../../helpers/error");

module.exports = {
  editUser: async (req, res, next) => {
    try {
      const { userId, fullName, password, phone } = req.body;
      if (!userId || !fullName || !password || !phone)
        throw new ErrorObject("Missing parameters", 404);

      const userFound = await User.findByPk(userId);

      if (!userFound) throw new ErrorObject("User not found", 400);

      const responce = await userFound.update({ fullName, password, phone });
      await userFound.save();
      endpointResponse({
        res,
        code: 200,
        message: "User successfully edit",
        body: responce,
      });
    } catch (error) {
      const httpError = createHttpError(
        error.statusCode,
        `[Error Edit User] - [categoryEditController - PUT]: ${error.message}`
      );
      next(httpError);
    }
  },
};
