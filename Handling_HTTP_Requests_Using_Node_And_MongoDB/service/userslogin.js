const userDB = require("../model/userslogin");

const userService = {};

//login a user
userService.login = (emailId, userPassword) => {
  return userDB.checkUser(emailId).then((user) => {
    if (user === null) {
      let err = new Error("Enter the registered contact number!");
      err.status = 404;
      throw err;
    } else {
      return userDB.getPassword(emailId).then((password) => {
        if (password !== userPassword) {
          let err = new Error("Enter correct password");
          err.status = 406;
          throw err;
        } else {
          return user;
        }
      });
    }
  });
};

userService.create = (userObj) => {
  var emailRegex = /([\w.]+)@([\w\.]+)\.(\w+)/;
  var passwordRegex =
    "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,14})";
  var email = userObj.emailId;
  var password = userObj.password;
  if (!email || !password) {
    return new Promise(reject => {
      let err = new Error("Details not entered");
      err.status = 400;
      throw err;
    })
  }

  return userDB.checkUser(userObj.emailId).then((user) => {
    if (user !== null) {
      let err = new Error("Already registered");
      err.status = 404;
      throw err;
    } else if (!email.trim().match(emailRegex)) {
      let err = new Error("Invalid Email ID");
      err.status = 400;
      throw err;
    } else if (!password.trim().match(passwordRegex)) {
      let err = new Error("Password should be 8-14 characters long and must contain an uppercase letter, a lowercase letter, a special character, a numeric character");
      err.status = 400;
      throw err;
    } else {
      return userDB.createUser(userObj).then((obj) => {
        if (obj === null) {
          let err = new Error("User creation failed! Please try again");
          err.status = 406;
          throw err;
        } else {
          return obj;
        }
      });
    }
  });
};

userService.editUser = (userObj) => {
  var emailRegex = /([\w.]+)@([\w\.]+)\.(\w+)/;
  var passwordRegex =
    "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,14})";
  var email = userObj.newEmail;
  var password = userObj.newPassword;
  if (!email || !password) {
    return new Promise(reject => {
      let err = new Error("Details not entered");
      err.status = 400;
      throw err;
    })
  } else {
    if (!email.trim().match(emailRegex)) {
      return new Promise(reject => {
        let err = new Error("Invalid Email ID");
        err.status = 400;
        throw err;
      })
    }
    else if (!password.trim().match(passwordRegex)) {
      return new Promise(reject => {
        let err = new Error("Password should be 8-14 characters long and must contain an uppercase letter, a lowercase letter, a special character, a numeric character")
        err.status = 406;
        throw err;
      })

    }

    else {
      return userDB.editUser(userObj).then(out => {
        if (out) {
          return "User details updated!";
        }

        else if (out === null) {
          let err = new Error("Details not entered")
          err.status = 406;
          throw err;
        }

        else {
          let err = new Error("User currentEmailId and currentpassword mismatch")
          err.status = 406;
          throw err;
        }
      });
    }
  }
}

userService.deleteUser = (userObj) => {
  if (!email || !password) {
    return new Promise(reject => {
      let err = new Error("Details not entered");
      err.status = 400;
      throw err;
    })
  }
  return userDB.deleteUser(userObj).then(out => {

    console.log("Inside service-->userslogin-->deleteUser method-->OUT: ", out)

    if (out === null) {
      let err = new Error("Invalid emailId or Password")
      err.status = 400;
      throw err;
    }
    else if (!out) {
      let err = new Error("Sorry couldn't delete..!! Please try again!!")
      err.status = 406;
      throw err;
    }
    else if (out) {
      return "User Deleted";
    }
  })
};


// return userDB.deleteUser(userObj).then(out => {
//   console.log("Inside service-->userslogin-->deleteUser method-->OUT: ", out)
//   if (out === null) {
//     let err = new Error("Invalid emailId or Password")
//     err.status = 400;
//     throw err;
//   }
//   else if (!out) {
//     let err = new Error("Sorry couldn't delete..!! Please try again!!")
//     err.status = 406;
//     throw err;
//   }
//   else if (out) {
//     return "User Deleted";
//   }

// })

userService.getUsers = (userObj) => {
  return userDB.getUsers(userObj).then(out => {
    if (out.length == 0) {
      let err = new Error("No users found")
      err.status = 404;
      // err.message = "No users found";
      throw err;
    } else {
      return out;
    }
  })
}

module.exports = userService;
