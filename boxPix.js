function drawTiles() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    ctx.shadowColor = "#2D2926";
    // ctx.shadowBlur = 4;
    ctx.shadowOffsetX = 5;
    ctx.shadowOffsetY = 5;

    for (let y = 0; y < no_rows; y++) {
	for (let x = 0; x < no_cols; x++) {
	    let px = x * (tileSize + gap);
	    let py = y * (tileSize + gap);
	    ctx.fillStyle = "#4E463F";
	    ctx.fillRect(px, py, tileSize, tileSize);
	}
    }
}
