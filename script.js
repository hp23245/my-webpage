document.addEventListener("DOMContentLoaded", () => {
    // Part 1: Button Click Event
    document.getElementById("messageButton").addEventListener("click", () => {
        document.getElementById("message").textContent = "Hello! You clicked the button!";
    });
    
    // Part 2: Change Background Color
    const colors = ["#FF5733", "#33FF57", "#3357FF", "#FF33A1", "#A133FF"];
    document.getElementById("bgButton").addEventListener("click", () => {
        document.body.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
    });
    
    // Part 3: User Input Handling
    document.getElementById("submitName").addEventListener("click", () => {
        const name = document.getElementById("nameInput").value;
        if (name.trim() !== "") {
            document.getElementById("greeting").textContent = `Hello, ${name}!`;
        } else {
            document.getElementById("greeting").textContent = "Please enter a name.";
        }
    });
    
    // Part 4: Hide and Show Content
    document.getElementById("toggleText").addEventListener("click", () => {
        const hiddenText = document.getElementById("hiddenText");
        if (hiddenText.style.display === "none") {
            hiddenText.style.display = "block";
            document.getElementById("toggleText").textContent = "Hide Text";
        } else {
            hiddenText.style.display = "none";
            document.getElementById("toggleText").textContent = "Show Text";
        }
    });
});
