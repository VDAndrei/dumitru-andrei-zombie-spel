var player = { x: 100, y: 100, size: 40, xSpeed: 5, ySpeed: 0 };
let bullet = [];

let cooldown = 0;

let bulletCooldown = 0;

function gun() {
    if (mouse.left && bulletCooldown === 0) {
        bullet.push(
            { x: player.x, y: player.y, size: 10, xSpeed: 7 * (mouse.x - player.x) / distance(player, mouse), ySpeed: 7 * (mouse.y - player.y) / distance(player, mouse) }
        )
        bulletCooldown = 10;
    }
    if (bulletCooldown > 0) {
        bulletCooldown--;
    }
    console.log(bullet)
}

function update() {
    gun();
    clearScreen()
    rectangle(player.x - player.size / 2, player.y - player.size / 2, player.size, player.size, "green");
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
        cooldown = 150 //150 in the future
    }
    if (cooldown > 0) {
        cooldown--;
    }
    if (player.x + player.size / 2 >= innerWidth) {
        player.x = innerWidth - player.size / 2
        player.xSpeed = -1
    } if (player.x - player.size / 2 <= 0) {
        player.x = player.size / 2
        player.xSpeed = 1
    } if (player.y + player.size / 2 >= innerHeight) {
        player.y = innerHeight - player.size / 2
        player.ySpeed = -1
    } if (player.y - player.size / 2 <= 0) {
        player.y = player.size / 2
        player.ySpeed = 1
    }

    for (var i = 0; i < bullet.length; i++) {
        rectangle(bullet[i].x, bullet[i].y, bullet[i].size, bullet[i].size, "red")
        bullet[i].x += bullet[i].xSpeed;
        bullet[i].y += bullet[i].ySpeed;
        console.log("bullet")
    }



    player.x += player.xSpeed;
    player.y += player.ySpeed;

    text(10, 20, 14, Math.round(cooldown / 30), "blue")
}