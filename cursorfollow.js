const follower = document.getElementById('follower');

let targetX = 0;
let targetY = 0;
const smoothFactor = 0.1;

document.addEventListener('mousemove', (event) => {
    targetX = event.clientX;
    targetY = event.clientY;
});

function updateFollower() {
    const rect = follower.getBoundingClientRect();
    const currentX = rect.left + rect.width / 2;
    const currentY = rect.top + rect.height / 2;

    const newX = currentX + (targetX - currentX) * smoothFactor;
    const newY = currentY + (targetY - currentY) * smoothFactor;

    follower.style.left = `${newX}px`;
    follower.style.top = `${newY}px`;

    requestAnimationFrame(updateFollower);
}

updateFollower();

