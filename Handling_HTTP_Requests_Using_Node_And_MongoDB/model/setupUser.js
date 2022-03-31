const connection = require("../utilities/connections")
const bc = require('bcrypt');

const hashPassword = async (pw) => {
    const salt = await bc.genSalt(12);
    const hash = await bc.hash(pw, salt);
    // console.log(`********************hash password = ${hash}**************`);
    return hash;
}

const emailId1 = "testuser1@gmail.com";
const emailId2 = "testuser2@gmail.com";
const pw1 = "Testpassword1@1234";
const pw2 = "Testpassword2@1234";



const genHashPassword = async (x, y) => {
    let hashedpw1 = await hashPassword(x);
    let hashedpw2 = await hashPassword(y);
    // console.log("testing", hashedpw1, hashedpw2);
    return [hashedpw1, hashedpw2];
}




const setupInitUsers = async () => {
    const arr = await genHashPassword(pw1, pw2);
    // console.log(`********************hash passwords array1 = ${arr[0]}, ${arr[1]}**************`);
    let userData = [
        { emailId: emailId1, password: arr[0] },
        { emailId: emailId2, password: arr[1] }
    ];
    // console.log("userData = ", userData);
    return userData;
}

let userD;
setupInitUsers().then((data) => {
    userD = data;
    // console.log("userD = ", userD);
});
// console.log("userD = ", userD);


exports.userSetup = () => {
    // console.log(`********************hash passwords array2 = ${userD[0]}, ${userD[1]}**************`);
    return connection.getUserCollection().then((myCollection) => {
        return myCollection.deleteMany().then(() => {
            return myCollection.insertMany(userD).then((data) => {
                if (data) {
                    return "Insertion Successfull"
                } else {
                    throw new Error("Insertion failed")
                }
            })
        })

    })
}






// const genHashPassword = async(x, y) => {
//     let hashedpw1;
//     let hashedpw2;
//     hashPassword(x).then((hash) => {
//         hashedpw1 = hash;
//         console.log(hashedpw1);
//     });
//     hashPassword(y).then((hash) => {
//         hashedpw2 = hash;
//     });
//     console.log("testing", hashedpw1, hashedpw2);
//     return [hashedpw1, hashedpw2];
// }






// hashPassword(pw1).then((hash) => {
//     console.log(`********************inside before hash password1 = ${hash}**************`);
//     hashedpw1 = hash;
//     console.log(`********************inside after hash password1 = ${hashedpw1}**************`);
//     // return hashedpw1;
// });
// console.log(`********************outside hash password1 = ${hashedpw1}**************`);

// hashPassword(pw2).then((hash) => {
//     hashedpw2 = hash;
//     // return hashedpw2;
// });


// console.log(`********************hash passwords = ${hashedpw1}, ${hashedpw2}**************`);