let hit = 0;
let miss = 0;

for (let i = 1; i < 10; i++){
    let pushHole = document.getElementById('hole' + i);

    pushHole.onclick = function() {
        if (pushHole.className.includes ('hole hole_has-mole')) {
            hit += 1;
            document.getElementById('dead').textContent = hit;
            
            if (hit == 10) {
                alert('You win!');
                return location.reload();
            }
        } else {
            miss += 1;
            document.getElementById('lost').textContent = miss;

            if (miss == 10) {
                alert ('you lose');
                return location.reload();
            }
        }        
    }
}