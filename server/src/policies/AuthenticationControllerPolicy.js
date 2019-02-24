const Joi = require('joi')

//Middleware functions to validate 
module.exports = {
  register(req, res, next) {
    const schema = {
      email: Joi.string().email(),
      password: Joi.string().regex(
        new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,23})")
      ),
      confirmPassword: Joi.string().equal(req.body.password)
    }

    //console.log("ConfirmPassword", confirmPassword)

    //Validate the request body against the schema above...
    const { error } = Joi.validate(req.body, schema)

    if (error) {
      switch (error.details[0].context.key) {
        case 'email':
          res.status(400).send({
            error: 'You must provide a valid email address'
          })
          break
        case 'password':
          res.status(400).send({
            error: `The password provided failed to match the following rules:
            <br/>
            1. It must contain at least 1 lower case character.
            <br/>
            2. It must contain at least 1 upper case character.
            <br/>
            3. It must contain at least 1 numerical character [0-9] 
            <br/>
            4. It must contain at least 1 special character
            <br/>
            5. It must be at least 8 characters in length.`
          })
          break
        case 'confirmPassword':
          res.status(400).send({
            error: `Passwords do not match!`
          })
          break
        default:
          res.status(400).send({
            error: 'Invalid registration information'
          })
      }
    } else {
      //If validation passes, call controller.
      next()
    }

  }
}