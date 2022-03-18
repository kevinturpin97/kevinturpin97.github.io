import { getNextKeyDef } from "@testing-library/user-event/dist/keyboard/getNextKeyDef";
import img_1 from "../../assets/images/banner2.png";

function BodyHome() {
    return (
        <div className="container-fluid">
            <div className="row flex-row">
                <div className="col-md-5">
                    <h2>3D ISOMETRIC</h2>
                    <canvas id="canvas">Navigateur incompatible</canvas>
                </div>
                <div className="col-md-5">
                    <h2>3D ISOMETRIC</h2>
                    <canvas id="city">Navigateur incompatible</canvas>
                    <button className="btn btn-primary" onClick={draw_city}>Draw city</button>
                </div>
            </div>
        </div>
    );
}

var i = 0;
var document_ready = setInterval(() => {
    var banner = document.getElementById("banner");
    if (i < 1.0) {
        draw().style.opacity = i;
        banner.style.opacity = i;
        
        i += 0.1;
    } else {
        clearInterval(document_ready);
    }
}, 50);

function draw_city()
{
    var city = document.getElementById("city");
    var ctx = city.getContext("2d");

    city.width = 600;
    city.height = 500;

    var h = city.clientWidth / 2;
    var w = city.clientHeight / 2;

    var x_before = 0;
    var color = [
        "#77aaff",
        "#99ccff",
        "#bbeeff",
        "#5588ff",
        "#3366ff",
    ];

    for (let i = 0; i < 8; i++) {
        var random_y = Math.floor(Math.random() * 100);
        var random_x = Math.floor(Math.random() * 300) + 50;
        var item = color[Math.floor(Math.random()*color.length)];
        ctx.fillStyle = item;
        ctx.beginPath();
        ctx.moveTo(w, h);

        ctx.rect(x_before, h + random_y, random_x, h);
        ctx.fill();
        ctx.stroke();
        ctx.closePath();

        ctx.beginPath();
        for (let i = 0; i < 5; i++) {
            ctx.rect((x_before + ((random_x  / 5.5) * i)) + (random_x / 12), h + random_y + 10, (random_x / 10), (h / 10));
            ctx.fillStyle = "orange";
            ctx.fill();
        }

        ctx.stroke();
        ctx.closePath();
        x_before += random_x;
    }

    
    

    return city;
}

function draw() 
{
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
    return canva;
}

export default BodyHome;