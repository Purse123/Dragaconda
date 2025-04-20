function drawPlayer_rect(player) {
    px = player.x * (tileSize + gap);
    py = player.y * (tileSize + gap);
    ctx.fillStyle = player.color;
    
    ctx.fillRect(px, py, tileSize, tileSize);
}

function drawPlayer_circle(player) {
    px = player.x * (tileSize + gap) + (50/100 * tileSize);
    py = player.y * (tileSize + gap) + (50/100 * tileSize);
    ctx.fillStyle = player.color;
    
    ctx.arc(px, py, (tileSize + gap) / 2, 0, Math.PI * 2);
    ctx.fill();
}

