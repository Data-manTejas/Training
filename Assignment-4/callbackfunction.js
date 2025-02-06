function fetchData(shouldFail, callback) {
   
    const data = ["Sachin", "Sehwag", "Sourav", "Rahul"];

    setTimeout(() => {
        if (shouldFail) {
            
            callback(new Error("Failed to fetch data from the server"), null);
        } else {
            
            callback(null, data);
        }
    }, 2000); 
}



// Case 1: Simulate success
fetchData(false, (error, data) => {
    if (error) {
        console.error("Error:", error.message);
    } else {
        console.log("Fetched Data:", data);
    }
});
//Fetched Data: ['Sachin', 'Sehwag', 'Sourav', 'Rahul']


// Case 2: Simulate failure
fetchData(true, (error, data) => {
    if (error) {
        console.error("Error:", error.message);
    } else {
        console.log("Fetched Data:", data);
    }
});
//Error: Failed to fetch data from the server
