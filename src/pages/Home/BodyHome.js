function BodyHome() {
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-5">
                    <canvas id="canvas">Navigateur incompatible</canvas>
                    <h3>3D ISOMETRIC</h3>
                    <canvas id="blur">Navigateur incompatible</canvas>
                </div>
            </div>
            <button onClick={draw} className="btn btn-danger">Draw Grid</button>
            <button onClick={see_bg} className="btn btn-danger">Add effect</button>
        </div>
    );
}

function anim_background()
{
    var canvas = document.getElementById("blur");
    var ctx = canvas.getContext("2d");

    canvas.width = 700;
    canvas.height = 700;
    
    var centerX = canvas.height / 2;
    var centerY = canvas.height / 2;

    ctx.fillStyle = "white";

    for (let i = 0; i < 10; i++) {
        ctx.beginPath();
        ctx.arc(centerX * (Math.random() * 2), centerY * (Math.random() * 2), Math.random() * 25, 0, 2 * Math.PI);
        ctx.fill();
        ctx.closePath();
    }
}

function see_bg()
{
    anim_background();
    var canvas = document.getElementById("blur");
    var opa = 1;
    var a = setInterval(() => {
        if (opa < 0) {
            anim_background();
            var b = setInterval( ()=> {
                canvas.style.opacity = opa;
                opa += 0.01;
                if (opa >= 1) {
                    clearInterval(b);
                }
            }, 100)
        }
        canvas.style.opacity = opa;
        opa -= 0.01;
    }, 50);
}

function draw() {
    var canva = document.getElementById("canvas");
    var ctx = canva.getContext('2d');

    canva.width = 400;
    canva.height = 300;

    var centerx = canva.width;
    centerx /= 2;

    ctx.strokeStyle = "white";

    ctx.scale(1, 0.5);
    ctx.rotate(45 * Math.PI / 180);

    var nbr = 0;
    var w = 0;

    for (let z = 0; z < 5; z++) {
        while (w < 5) {
            var y = nbr;
            var x = centerx - (nbr * 5);

            ctx.beginPath();
            ctx.translate(50, 0);
            ctx.moveTo(centerx - (nbr * 5), nbr);

            for (let i = 1; i < 3; i++) {
                if (i % 2 === 0) {
                    x += 50;
                } else {
                    y += 50;
                }
                ctx.lineTo(x, y);
            }
            for (let i = 1; i < 3; i++) {
                if (i % 2 === 0) {
                    x -= 50;
                } else {
                    y -= 50;
                }
                ctx.lineTo(x, y);
            }
            ctx.stroke();
            ctx.closePath();
            w++;
        }
        nbr += 50;
        w = 0;
    }

    ctx.translate(-(26 * 50), -(5 * 50)); // Reinitialise
    var my_count = 0;

    for (let i = 1; i < 6; i++) {
        ctx.beginPath();
        if (i === 1) {
            ctx.translate(50, 0);
        } else if (i === 2) {
            ctx.translate(0, 200);
        } else if (i === 3) {
            ctx.translate(200, 0);
        } else if (i === 4) {
            ctx.translate(0, -200);
        } else if (i === 5) {
            ctx.translate(-100, 100);
        }
        ctx.fillStyle = "#b2d8d8";
        ctx.moveTo(250, 250);

        ctx.lineTo(250, 250);
        ctx.lineTo(250, 200);
        ctx.lineTo(200, 200);
        ctx.lineTo(200, 250);

        ctx.fill();
        ctx.closePath();
        ctx.beginPath();

        ctx.fillStyle = "#008080";
        ctx.moveTo(250, 250);

        ctx.lineTo(300, 300);
        ctx.lineTo(300, 250);
        ctx.lineTo(250, 200);
        ctx.lineTo(250, 250);

        ctx.fill();
        ctx.closePath();
        ctx.beginPath();

        ctx.fillStyle = "#66b2b2";
        ctx.moveTo(250, 250);

        ctx.lineTo(300, 300);
        ctx.lineTo(250, 300);
        ctx.lineTo(200, 250);
        ctx.lineTo(250, 250);

        ctx.fill();
        ctx.closePath();
    }
}

export default BodyHome;