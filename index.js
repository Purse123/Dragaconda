let root = document.getElementById('root');
const canvas = document.getElementById('mainCanvas');
const ctx = canvas.getContext('2d');

const keys = "WASD";
const directions = ["Front", "Back", "Right", "Left"];

const factor = 80;
canvas.height = 9 * factor;
canvas.width = 16 * factor;

// pixel initialize
const tileSize = 30;
const gap = 10;

const no_cols = Math.floor(canvas.width / (tileSize + gap));
const no_rows = Math.floor(canvas.height / (tileSize + gap));

const tiles = [];
const grid = [];

let isGameOver = false;

function RandomInt(max) {
    return Math.floor(Math.random() * max);
}

let player = {
    x: RandomInt(no_cols - 2) + 1,
    y: RandomInt(no_rows - 2) + 1,

    direction: directions[RandomInt(4)],
    trail: [],
    // color: "#A22929"           // red
    // color: "#531880"           // violet
    // color: "#3873E0"           // cyan
    // color: "#27409C"           // dark blue
    color: "#A22974"           // pink
    // color: "#832AF8"           // purple
    // color: "#D2B732"           // Yellow
    // color: "#2DA635"           // light green
    // color: "#1E7D29"           // dark green

};
console.log(player.direction);

// NOTE for me:
// In grid: claimed and unclaimed tiles
for (let y = 0; y < no_rows; y++) {
    grid[y] = [];
    for (let x = 0; x < no_cols; x++) {
	grid[y][x] = {
	    claimed: false,
	    trail: false,
	};
    }
}

// player basic movement
document.addEventListener("keydown", (e) => {
    if (e.key.toUpperCase() == keys.charAt(0)) player.direction = "Front";
    if (e.key.toUpperCase() == keys.charAt(1)) player.direction = "Left";
    if (e.key.toUpperCase() == keys.charAt(2)) player.direction = "Back";
    if (e.key.toUpperCase() == keys.charAt(3)) player.direction = "Right";
});

function movePlayer() {
    let {x, y} = player;

    if (player.direction == "Front") y--;
    if (player.direction == "Left") x--;
    if (player.direction == "Back") y++;
    if (player.direction == "Right") x++;

    if (x < 0 || x >= no_cols || y < 0 || y >= no_rows) {
	console.log("Game Over...GTFO!!!");
	isGameOver = true;
	return;
    }

    player.x = x;
    player.y = y;

    // trail
    player.trail.push({ x, y });
    grid[y][x].trail = true;
}

function drawTileDynamic() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    ctx.shadowColor = "#2D2926";
    ctx.shadowOffsetX = 5;
    ctx.shadowOffsetY = 5;

    for (let y = 0; y < no_rows; y++) {
        for (let x = 0; x < no_cols; x++) {
            let px = x * (tileSize + gap);
            let py = y * (tileSize + gap);

	    if (grid[y][x].claimed) {
		ctx.fillStyle = player.color;
	    } else if (grid[y][x].claimed) {
		ctx.fillStyle = "orange";
	    } else {
		ctx.fillStyle = "#4E463F";
	    }
		
            ctx.fillRect(px, py, tileSize, tileSize);
	    ctx.strokeStyle = "black";
	    ctx.stroke();
        }
    }

    // Draw Player
    const px = player.x * (tileSize + gap);
    const py = player.y * (tileSize + gap);

    ctx.fillStyle = player.color;
    // ctx.fillRect(px + (0/100 * tileSize), py + (0/100 * tileSize) , tileSize + 0, tileSize);
    ctx.fillRect(px, py, tileSize, tileSize);

}

// playerspeed calc
let lastMoveTime = 0;
const moveInterval = 100; // ms

function drawGameOver() {
    // image
    const gameOverImage = new Image();
    gameOverImage.src = "./feelsbadman.jpg";
    
    const imgWidth = canvas.width;
    const imgHeight= canvas.height;

    const x = (canvas.width - imgWidth) / 2;
    const y = (canvas.height - imgHeight) / 2;

    ctx.drawImage(gameOverImage, x, y, imgWidth, imgHeight);

    // ctx.fillStyle = "rgba(0, 0, 0, 0.75)";
    // ctx.fillRect(0, 0, canvas.width, canvas.height);
    // ctx.font = "48px 'Anek Latin'";
    // ctx.textAlign = "center";
    // ctx.shadowColor = "transparent";
    
    // const gradient = ctx.createLinearGradient(0, 0, canvas.width, 0);
    // gradient.addColorStop("0", "#9cff5f");
    // gradient.addColorStop("1.0", "#53ffe0");

    // ctx.fillStyle = gradient;
    // ctx.fillText("Game Over shawty...GTFO!!!", canvas.width / 2, canvas.height / 2);

    document.addEventListener("keydown", (e) => {
	location.reload();
    })
}

function gameLoop(timestamp) {
    if (isGameOver) {
	drawGameOver();
	return;
    }
    
    if (timestamp - lastMoveTime > moveInterval) {
	movePlayer();
	lastMoveTime = timestamp;
    }

    drawTileDynamic();
    requestAnimationFrame(gameLoop);
}
requestAnimationFrame(gameLoop);


// camera
const camera = {
    x: 0,
    y: 0
};

function updateCamera() {
    camera.x = player.x;
    camera.y = player.y;
}
