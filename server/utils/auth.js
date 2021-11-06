const jwt = require("jsonwebtoken");
const { User } = require('../models')

const secret = 'mysecretssshhhhhhh';
const expiration = "2h";

module.exports = {
  authMiddleware: async function ({ req }) {
    let token = req.body.token || req.query.token || req.headers.authorization;

    if (req.headers.authorization) {
      token = token.split(" ").pop().trim();
    }

    if (!token) {
      return req;
    }

    try {
      const { data } = jwt.verify(token, secret, { maxAge: expiration });
      req.user = await User.findByID(data._id);
      return req;
    } catch {
      console.log("Invalid token");
    }

    return req;
  },
  signToken: function ({ email, username, _id }) {
    const payload = { email, username, _id };
    
    return jwt.sign({ data: payload }, secret,  { expiresIn: expiration });
  },
};
