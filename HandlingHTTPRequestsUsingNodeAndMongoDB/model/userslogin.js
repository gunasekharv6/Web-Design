const userDetails = require('./beanClasses/users');
// const collection = require("../utilities/connections")
const connection = require("../utilities/connections")
const bc = require('bcrypt');

const usersDB = {}

usersDB.checkUser = (emailId) => {
    return connection.getUserCollection().then((collection) => {
        return collection.findOne({ "emailId": emailId }).then((customerContact) => {
            if (customerContact) {
                return new userDetails(customerContact);
            }
            else return null;
        })
    })
}




const hashPassword = async (pw) => {
    const salt = await bc.genSalt(12);
    const hash = await bc.hash(pw, salt);
    // console.log(`********************hash password = ${hash}**************`);
    return hash;
}

usersDB.createUser = (userObj) => {
    return connection.getUserCollection().then(collection => {
        const pw = userObj.password;
        hashPassword(pw).then((hash) => {
            console.log(`********************create hash password = ${hash}**************`);
            const newUser = new collection({ emailId: userObj.emailId, password: hash });
            newUser.save();
        });
    });
}


usersDB.editUser = (userObj) => {
    return connection.getUserCollection().then(collection => {
        console.log("collection", userObj);
        if (userObj.currentEmail === null) {
            return null;
        }
        return collection.findOne({ emailId: userObj.currentEmail }).exec().then(x => {
            if (x === null) {
                return false;
            }

            else {
                const y1 = bc.compare(userObj.currentPassword, x.password);
                return y1.then(y2 => {
                    if (!y2) {
                        return false;
                    }
                    else {
                        return hashPassword(userObj.newPassword).then((hash) => {
                            return collection.updateOne({ emailId: userObj.currentEmail },
                                { $set: { emailId: userObj.newEmail, password: hash } }).then(data => {
                                    console.log(data);

                                    if (data.nModified == 1) {
                                        return true;
                                    } else {
                                        return false;
                                    }
                                })
                        })
                    }

                })

            }
        })
    })
}


usersDB.deleteUser = (userObj) => {

    return connection.getUserCollection().then(collection => {

        return collection.findOne({ emailId: userObj.emailId }).exec().then(x => {
            // console.log("Result of findOne x:", x);
            if (x === null) {
                return null;
            }
            else {
                // console.log("Result of findOne: ", x);

                const y1 = bc.compare(userObj.password, x.password);
                // console.log("Login output y1:", y1);
                return y1.then(y2 => {
                    // console.log("Login output y2:", y2);
                    if (!y2) {
                        return null;
                    }
                    else {
                        return collection.findOneAndDelete({ emailId: userObj.emailId }).exec();
                    }
                })
            }
        });
    });
}


usersDB.getUsers = () => {
    return connection.getUserCollection().then((collection) => {
        return collection.find({}).then(data => {
            if (data !== 0)
                return data;
            else
                return null;
        })
    })
}

module.exports = usersDB;






    // return collection.create(userObj).then(data => {
    //     console.log(data);

    //     if (data.length !== 0) {
    //         return userObj;
    //     } else {
    //         return null;
    //     }
    // })
    // } )
// usersDB.createUser = ( userObj ) => {
//     return connection.getUserCollection().then( collection => {
//         // return usersDB.generateId().then( newUserId => {
//             // userObj.userId = "U" + newUserId;
//             return collection.create( userObj ).then( data => {
//                 console.log( data );

//                 if( data.length !== 0 ){
//                     return userObj;
//                 } else{
//                     return null;
//                 }
//             } )
//         } )
//     // } )
// }


// usersDB.getPassword = ( emailId ) => {
//     return connection.getUserCollection().then( ( collection ) => {
//         return collection.find( { "emailId": emailId }, { _id: 0, password: 1 } ).then( ( password ) => {
//             if( password.length !== 0 )
//                 return password[0].password;
//             else
//                 return null;
//         } )
//     } )
// }