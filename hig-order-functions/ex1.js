function ajaxCall(callback) {
    callback('any data');
}

function getUsers(callback) {
    ajaxCall(function(json) {
        callback(json);
    });
}

getUsers(function(users) {
    console.log(users);
});
