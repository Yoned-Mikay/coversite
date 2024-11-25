// maintainTitle.js
const desiredTitle = "APNotes.net :: US History Notes"; // Replace with your desired title

function maintainTitle() {
    if (document.title !== desiredTitle) {
        document.title = desiredTitle;
    }
}

// Check and maintain the title every 50 milliseconds
setInterval(maintainTitle, 100);
