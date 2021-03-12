var users = ["Joseph", "Chris", "Sarah"];

function insertUser(user) {
    let promise = new Promise(function (resolve, reject){
        setTimeout(() => {
        users.push(user);

        let error = true;

        if (!error) {
            resolve()
        } else {
            reject()
        }
    }, 1000);
    })
    return promise;
}

function showUsers() {
    console.log(users);
}
function failWarning() {
    console.log("Unexpected error")
}
insertUser("James").then(showUsers).catch(failWarning);