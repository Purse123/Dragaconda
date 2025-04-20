let root = document.getElementById('root');
const canvas = document.getElementById('mainCanvas');
const ctx = canvas.getContext('2d');

canvas.height = window.innerHeight;
canvas.width = window.innerWidth;

// pixel initialize
const tileSize = 30;
const gap = 10;

const tiles = [];
const no_cols = Math.floor(canvas.width / (tileSize + gap));
const no_rows = Math.floor(canvas.height / (tileSize + gap));

drawTiles();
// dont need resize just for trial
// window.addEventListener('resize', () => {console.log("you fucker"); drawTiles();});

// Drawing player
// drawPlayer_circle();
drawPlayer_rect();

// player movement
document.addEventListener("keydown", (e) => {
    if (e.key == "w") player.y--;
    if (e.key == "a") player.x--;
    if (e.key == "s") player.y++;
    if (e.key == "d") player.x++;

    drawTiles();
    drawPlayer_rect();
});
