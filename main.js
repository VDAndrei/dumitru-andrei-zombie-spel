var player = { x: 100, y: 100, size: 20, xSpeed: 5, ySpeed: 0 };

let cooldown = 0;

function update() {

    clearScreen()
    rectangle(player.x, player.y, player.size, player.size, "green");
    player.xSpeed = 0
    player.ySpeed = 0
    if (keyboard.w) {
        player.ySpeed -= 5;
    }
    if (keyboard.s) {
        player.ySpeed += 5;
    }
    if (keyboard.a) {
        player.xSpeed -= 5;
    }
    if (keyboard.d) {
        player.xSpeed += 5;
    }
    if (keyboard.space && cooldown === 0 && distance(mouse.x, mouse.y, player.x, player.y) < 300) {
        player.x = mouse.x
        player.y = mouse.y
        console.log("yes")
        cooldown = 150
    }
    if (cooldown > 0) {
        cooldown--;
    }
    player.x += player.xSpeed;
    player.y += player.ySpeed;

    text(10, 20, 14, Math.round(cooldown / 30), "blue")
}