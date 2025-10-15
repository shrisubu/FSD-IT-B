//Asynchronous version 
async function login() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Logged in successfully.");
            resolve("UserToken123");
        }, 1000);
    });
}

async function getData(token) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Data fetched for token:", token);
            resolve({ name: "John Doe", score: 85 });
        }, 1000);
    });
}

async function displayData(data) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Displaying Data:", data);
            resolve();
        }, 500);
    });
}

async function conductTest() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Test conducted.");
            resolve("TestResult: Pass");
        }, 1500);
    });
}

async function logout() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Logged out.");
            resolve();
        }, 500);
    });
}
    const token = await login();
    const data = await getData(token);
    await displayData(data);
    const testResult = await conductTest();
    console.log(testResult);
    await logout();