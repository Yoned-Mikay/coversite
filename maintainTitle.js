// maintainTitle.js
const desiredTitle = "APNotes.net :: US History Notes";

function maintainTitle() {
    if (document.title !== desiredTitle) {
        document.title = desiredTitle;
    }
}

setInterval(maintainTitle, 100);
