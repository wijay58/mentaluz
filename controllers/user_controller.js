const User = require("../models/user")
const bcrypt = require("bcrypt")
var jwt = require('jsonwebtoken');
const {
  body,
  validationResult
} = require("express-validator");

exports.validate = () => {
  return [
    body('firstname', 'First name is required and should have at least 3 characters').not().isEmpty().isLength({
      min: 3,
      max: 15
    }),
    body('lastname', 'Last name is required and should have at least 3 characters').not().isEmpty().isLength({
      min: 3,
      max: 15
    }),
    body('email', 'Email is required and should be valid').not().isEmpty().normalizeEmail().isEmail(),
    body('phone', 'Phone number is required').not().isEmpty(),
    body('password', 'Password is required and it should have atleast 5 characters').not().isEmpty().isLength({
      min: 5
    }),
  ]
}

exports.user_get = function (req, res) {
  User.findOne({ email: req.userData.email }, function (err, user) {
    if (err) {
      return res.status(500).json({
        error: err.message
      });
    } else {
      return res.send(user)
    }
  })
};

exports.user_post = async function (req, res) {
  try {
    // const errors = validationResult(req);

    // if (!errors.isEmpty()) {
    //     return res.status(422).json({
    //         errors: errors.array()
    //     });
    // }
    User.findOne({
      email: req.body.email
    }, async function (err, user) {
      if (user) return res.status(400).send('Email already exists.');
      else {
        let hashedPassword = await bcrypt.hash(req.body.password, 10);
        let user = new User({
          firstname: req.body.firstname,
          lastname: req.body.lastname,
          email: req.body.email,
          phone: req.body.phone,
          user_type: req.body.user_type,
          password: hashedPassword
        });
        user.save(function (err, theUser) {
          if (err) {
            return res.status(500).json({
              error: err.message
            });
          } else {
            return res.status(200).json({
              message: 'User created successfully',
              user: theUser
            });
          }
        })
      }
    })
  } catch (err) {
    return res.status(500).json({
      error: err.message
    });
  }
};

exports.user_login_google = async function (req, res) {
  try {
    let decoded = jwt.decode(req.body.credential);
    if (decoded.email_verified == false) return res.status(401).send('Email not verified.');
    User.findOne({
      email: decoded.email
    }, async function (err, user) {
      if (!user) {
        let user = new User({
          firstname: decoded.given_name,
          lastname: decoded.family_name,
          email: decoded.email
        });
  
        user.save(function (err, theUser) {
          if (err) {
            return res.status(500).json({
              error: err.message
            });
          } else {
            let token = jwt.sign({
              id: theUser.id,
              user_type: theUser.user_type,
              firstname: theUser.firstname,
              email: theUser.email
            }, process.env.SECRET, {
              expiresIn: 86400 // expires in 24 hours
            });
      
            res.status(200).send({
              auth: true,
              token: token,
              user_type: theUser.user_type,
              user: theUser
            });
          }
        })
      } else {
        let token = jwt.sign({
          id: user.id,
          user_type: user.user_type,
          firstname: user.firstname,
          email: user.email
        }, process.env.SECRET, {
          expiresIn: 86400 // expires in 24 hours
        });
  
        res.status(200).send({
          auth: true,
          token: token,
          user_type: user.user_type,
          user: user
        });
      }
    });
  } catch (err) {
    return res.status(500).json({
      error: err.message
    });
  }
};

exports.user_login = async function (req, res) {
  User.findOne({
    email: req.body.email
  }, async function (err, user) {
    if (!user) return res.status(404).send('No user found.');
    try {
      if (await bcrypt.compare(req.body.password, user.password)) {
        let token = jwt.sign({
          id: user.id,
          user_type: user.user_type,
          firstname: user.firstname,
          email: user.email
        }, process.env.SECRET, {
          expiresIn: 86400 // expires in 24 hours
        });

        res.status(200).send({
          auth: true,
          token: token,
          user_type: user.user_type,
          user: user
        });
      } else {
        return res.status(401).send(
          "Email or password is wrong."
        );
      }
    } catch (err) {
      res.status(500).send('Could not login')
    }
  });
};

exports.updateUser = function (req, res) {
  const data = req.body;
  User.findOneAndUpdate({email: req.userData.email},data, {returnDocument: 'after'}, async function (err, updatedUser) {
    if (err) return res.status(500).send('Update failed');
    else {
      return res.status(200).json({
        message: 'User updated successfully',
        user: updatedUser
      });
    }
  });
}