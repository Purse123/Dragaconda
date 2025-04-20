// player
let player = {
    x: 3,
    y: 5,
    // color: "#A22929"           // red
    // color: "#531880"           // violet
    // color: "#3873E0"           // cyan
    // color: "#27409C"           // dark blue
    // color: "#A22974"           // pink
    // color: "#832AF8"           // purple
    color: "#D2B732"           // Yellow
    // color: "#2DA635"           // light green
    // color: "#1E7D29"           // dark green
};

function drawPlayer_rect() {
    px = player.x * (tileSize + gap);
    py = player.y * (tileSize + gap);
    ctx.fillStyle = player.color;
    
    ctx.fillRect(px, py, tileSize, tileSize);
}

function drawPlayer_circle() {
    px = player.x * (tileSize + gap) + (50/100 * tileSize);
    py = player.y * (tileSize + gap) + (50/100 * tileSize);
    ctx.fillStyle = player.color;
    
    ctx.arc(px, py, tileSize / 2, 0, Math.PI * 2);
    ctx.fill();
}
