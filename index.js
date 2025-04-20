let root = document.getElementById('root');
const canvas = document.getElementById('mainCanvas');
const ctx = canvas.getContext('2d');

// canvas.height = window.innerHeight;
// canvas.width = window.innerWidth;
canvas.height = 500;
canvas.width = 500;

// pixel initialize
const tileSize = 30;
const gap = 10;

const tiles = [];
const no_cols = Math.floor(canvas.width / (tileSize + gap));
const no_rows = Math.floor(canvas.height / (tileSize + gap));

function RandomInt(max) {
    return Math.floor(Math.random() * max);
}

let player = {
    x: RandomInt(no_rows - 2) + 1,
    y: RandomInt(no_cols - 2) + 1,

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

// draw intial tiles
function initialTile() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    ctx.shadowColor = "#2D2926";
    ctx.shadowOffsetX = 5;
    ctx.shadowOffsetY = 5;

    for (let y = 0; y < no_rows; y++) {
	for (let x = 0; x < no_cols; x++) {
            let px = x * (tileSize + gap);
            let py = y * (tileSize + gap);

            const dx = Math.abs(x - player.x);
            const dy = Math.abs(y - player.y);

            if (dx <= 1 && dy <= 1) {
		ctx.fillStyle = player.color;
            } else {
		ctx.fillStyle = "#4E463F";
            }

            ctx.fillRect(px, py, tileSize, tileSize);
	}
    }
}
initialTile();

function drawTiles() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    ctx.shadowColor = "#2D2926";
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

// Drawing player
drawPlayer_circle(player);

// player movement
document.addEventListener("keydown", (e) => {
    if (e.key == "w" && player.y > 0) player.y--;
    if (e.key == "a" && player.x > 0) player.x--;
    if (e.key == "s" && player.y < no_cols - 1) player.y++;
    if (e.key == "d" && player.x < no_rows - 1) player.x++;

    drawTiles();
    drawPlayer_rect(player);
});
