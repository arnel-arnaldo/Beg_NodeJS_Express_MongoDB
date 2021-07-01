const bcrypt = require('bcrypt')
const User = require('../models/User')

module.exports = (req, res) => {
  const { username, password } = req.body

  User.findOne({ username: username }, (error, user) => {
    if (user) {
      bcrypt.compare(password, user.password, (error, same) => {
        if (same) {
          // if passwords match, store user session id
          req.session.userId = user._id
          res.redirect('/')
        } else {
          // if passwords doesn't match, will display error later
          // and proceed to go back to login page
          res.redirect('/auth/login')
        }
      })
    } else {
      // if user doesa not exists, will display error later
      // and proceed to go back to login page
      res.redirect('/auth/login')
    }
  })
}
