var isBirthdayData = true;
var ageData = 40;
var userNameData = "John";
function logBrtMsg(isBirthday, userName, age) {
    if (isBirthday) {
        console.log("Congrats ".concat(userName.toUpperCase(), ", age: ").concat(age + 1));
    }
}
logBrtMsg(isBirthdayData, userNameData, ageData);
