let memoryLeakArray = [];
let allocationCount = 0;


function simulateMemoryLeak() {
   
    memoryLeakArray.push(new Array(1000).fill("leak"));
    allocationCount++;
    console.log(`Memory Leak: Array length = ${allocationCount}`);

   
    if (allocationCount % 2 === 0) { // Log heap size every 2 allocations
        if (performance.memory) {
            const heapSize = (performance.memory.usedJSHeapSize / 1024 / 1024).toFixed(2);
            console.log(`Heap Size: ${heapSize} MB`);
        } else {
            console.log("Heap Size: Not available in this environment.");
        }
    }

    // Stop the simulation after 15 allocations
    if (allocationCount >= 15) {
        clearInterval(leakInterval);
        memoryLeakArray = []; // Clear the array
        console.log("Memory leak simulation stopped, and memory cleared.");
    }
}

// Start the simulation
const leakInterval = setInterval(simulateMemoryLeak, 1000);

//output
// Memory Leak: Array length = 1
// Memory Leak: Array length = 2
// Heap Size: 78.78 MB
// Memory Leak: Array length = 3
// Memory Leak: Array length = 4
// Heap Size: 89.37 MB
// Memory Leak: Array length = 5
// Memory Leak: Array length = 6
// Heap Size: 97.61 MB
// Memory Leak: Array length = 7
// Memory Leak: Array length = 8
// Heap Size: 43.13 MB
// Memory Leak: Array length = 9
// Memory Leak: Array length = 10
// Heap Size: 55.01 MB
// Memory Leak: Array length = 11
// Memory Leak: Array length = 12
// Heap Size: 58.11 MB
// Memory Leak: Array length = 13
// Memory Leak: Array length = 14
// Heap Size: 65.75 MB
// Memory Leak: Array length = 15
// Memory leak simulation stopped, and memory cleared.
