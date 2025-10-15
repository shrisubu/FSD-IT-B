function login(callback) {
    setTimeout(() => {
        console.log("Logged in successfully.");
        callback("UserToken123");
    }, 1000);
}

function getData(token, callback) {
    setTimeout(() => {
        console.log("Data fetched for token:", token);
        callback({ name: "John Doe", score: 85 });
    }, 1000);
}

function displayData(data, callback) {
    setTimeout(() => {
        console.log("Displaying Data:", data);
        callback();
    }, 500);
}

function conductTest(callback) {
    setTimeout(() => {
        console.log("Test conducted.");
        callback("TestResult: Pass");
    }, 1500);
}

function logout(callback) {
    setTimeout(() => {
        console.log("Logged out.");
        callback();
    }, 500);
}

login(function(token) {
    getData(token, function(data) {
        displayData(data, function() {
            conductTest(function(testResult) {
                console.log(testResult);
                logout(function() {
                    // All done
                });
            });
        });
    });
}); 

//2300320130247