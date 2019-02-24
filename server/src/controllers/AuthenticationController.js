const {
  User
} = require('../models')
const jwt = require('jsonwebtoken')
const config = require('../config/config')

function jwtSignUser (user) {
  const ONE_WEEK=60*60*24*7
  return jwt.sign(user, config.authentication.jwtSecret, {
    expiresIn: ONE_WEEK
  })
}

//Declare Authentication enpoint
module.exports = {
  async register(req, res) {
    try {
      const user = await User.create(req.body)
      const userJSON = user.toJSON()
      res.send({
        user: userJSON,
        token: jwtSignUser(userJSON)
      })
    } catch (err) {
      console.error(err)
      res.status(400).send({
        error: 'This email account is already in use.'
      })
    }
  },

  async login(req, res) {
    try {
      const {
        email,
        password
      } = req.body
      const user = await User.findOne({
        where: {
          email: email
        }
      })

      //Check user exist
      if (!user) {
        return res.status(403).send({
          error: 'The login information was incorrect.'
        })
      }

      //Check password matches...
      const isPasswordValid = await user.comparePassword(password)
      if (!isPasswordValid) {
        return res.status(403).send({
          error: 'The password was incorrect'
        })
      }
      const userJSON = user.toJSON()
      res.send({
        user: userJSON,
        token: jwtSignUser(userJSON)
      })

    } catch (err) {
      console.error(err)
      res.status(500).send({
        error: 'Error occurred trying to login'
      })
    }
  }
}