const ball = document.querySelector('.ball');
const board = document.querySelector('.board');
const cue = document.querySelector('.cue');
const size = document.querySelector('#size');
const friction = document.querySelector('#friction');
const resetBtn = document.querySelector('#reset');

let x = 190;
let y = 190;
let d = 20;
let isBallStop = true;

size.addEventListener('change', () => {
    if(isBallStop){
        switch(size.value) {
            case '1':
                d = 20;
                break;
            case '2':
                d = 30;
                break;
            case '3':
                d = 40;
                console.log('changed')
                break;
            case '4':
                d = 50;
                break;
        }
        ball.style.height = d + 'px';
        ball.style.width = d + 'px';
        x = 200 - d/2;
        y = 200 - d/2;
        ball.style.transform = 'translate(' + x + 'px,' + y + 'px)';
    }
})

let f = 50
let a = -10;

friction.addEventListener('change', (e) => {
    console.log(friction.value);
    if(isBallStop){
        f = friction.value;
        a = f * (-0.5);
    }
})

const noChange = () => {
    friction.toggleAttribute('disabled');
    size.toggleAttribute('disabled');
}

const moveBall = (xc, yc, angle) => {

    isBallStop = false;
    noChange();

    let ux = Math.abs(xc * 0.5);
    let uy = Math.abs(yc * 0.5);
    let u = Math.sqrt(Math.pow(ux, 2) + Math.pow(uy, 2));

    let directionX = 1 * Math.sign(-xc);
    let directionY = 1 * Math.sign(-yc);
   
    // friction force
    let ax = a * Math.abs(Math.sin(angle));
    let ay = a * Math.abs(Math.cos(angle)); 
    let sx, sy, vx, vy;
    let t = 0;

    resetBtn.addEventListener('click', () => {
        moveBall(0, 0);
        friction.removeAttribute('disabled');
        size.removeAttribute('disabled');
        clearInterval(move);
        isBallStop = true;
        x = 190;
        y = 190;
        d = 20;
        size.value = 1;
        ball.style.height = d + 'px';
        ball.style.width = d + 'px';
        friction.value = 50;
        a = 50 * (-0.5);
    })

    let move = setInterval(() => {

        // X direction

        sx = (ux * t) + 0.5 * ax * Math.pow(t, 2);
        vx = Math.sqrt(Math.pow(ux, 2) + 2*ax*sx);

        // check if object 
        if(t < -ux/ax){
            x += 0.1 * directionX * vx;
        }

        // change direction in X
        if((x + d) >= 400){
            directionX = -1;
        } else if(x <= 0){
            directionX = 1;
        }

        // Y direction

        sy = (uy * t) + 0.5 * ay * Math.pow(t, 2);
        vy = Math.sqrt(Math.pow(uy, 2) + 2*ay*sy);

        if(t < -uy/ay){
            y += 0.1 * directionY * vy;
        }

        // change direction in Y
        if((y + d) >= 400){
            directionY = -1;
        } else if(y <= 0){
            directionY = 1;
        }    

        ball.style.transform = 'translate(' + x +  'px,' + y + 'px)';

        t += 0.01;

        if((t > -ux/ax) && (t > -uy/ay)){
            isBallStop = true;
            noChange();
            clearInterval(move);
        }
    }, 10);
}

board.addEventListener('mousedown', () => {
    if(isBallStop){
        cue.style.border = 'crimson solid 1px';
        cue.style.left = (x + d/2) + 'px'; 
        cue.style.top = (y + d/2) + 'px'; 

        board.addEventListener('mousemove', (e) => {
            let xc = e.clientX - (x + d/2);
            let yc = e.clientY - (y + d/2);

            let cueLen = Math.sqrt(Math.pow(xc, 2) + Math.pow(yc, 2));

            let angle = Math.atan(-xc / yc) * (180 / Math.PI);

            if(yc < 0){
                angle += 180;
            }

            cue.style.height = cueLen + 'px';
            cue.style.transform = 'rotate(' + angle + 'deg)';
        })
    } 
});

board.addEventListener('mouseup', (e) => {
    cue.style.border = 'none';
    xc = e.clientX - x;
    yc = e.clientY - y;
    angle = Math.atan(-xc / yc);

    if(isBallStop){
        moveBall(xc, yc, angle);
    }
})