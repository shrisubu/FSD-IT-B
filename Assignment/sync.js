function delay(ms) {
    const start = Date.now();
    while (Date.now() - start < ms) {
        // Busy-wait 
    }
}

function login() {
    delay(1000);
    console.log("Logged in successfully.");
    return "UserToken123";   
}

function getData(token) {
    delay(1000);
    console.log("Data fetched for token:", token);
    return { name: "John Doe", score: 85 };
}

function displayData(data) {
    delay(500);
    console.log("Displaying Data:", data);
}

function conductTest() {
    delay(1500);
    console.log("Test conducted.");
    return "TestResult: Pass";
}

function logout() {
    delay(500);
    console.log("Logged out.");
}
    const token = login();
    const data = getData(token);
    displayData(data);
    const testResult = conductTest();
    console.log(testResult);
    logout();