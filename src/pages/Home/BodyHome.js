import dev_img from "../../assets/images/developper.png";
import pc_img from "../../assets/images/computer.png";
import db_img from "../../assets/images/db.png";
import cond_img from "../../assets/images/algo.png";
import var_img from "../../assets/images/var.png";
import oop_img from "../../assets/images/oop.png";
import framework_img from "../../assets/images/framework.png";
import doc_img from "../../assets/images/doc.png";

function BodyHome() {
    return (
        <div className="container-fluid bg-primary">
            <div className="container">
                <div className="row align-items-center">
                    <h1 className="text-center"><code className="text-dark">Hello world!</code></h1>
                    <div className="col-md-6">
                        <h2>About me</h2>
                        <p>Hello, my name is Kevin <span className="small">(alias RainMan)</span>, 24 years old, and I am a fullstack web/mobile developer.
                            I graduated major of my WebAcademie class, by Epitech.
                            I currently live in Reunion island,
                            while being looking for an alternation that will follow me throughout my school career.</p>
                    </div>
                    <div className="col-md-4 m-5">
                        <img src={pc_img} alt="fullstack" />
                    </div>
                    <div className="row align-items-center">
                        <div className="col-md-4 m-5">
                            <img src={dev_img} alt="fullstack" />
                        </div>
                        <div className="col-md-6">
                            <h2>A short story</h2>
                            <p>It all started at the age of 8 with my first PC. I also learned the basics of electronics from my father, while building small cardboard houses (LEDs acting as a light, and motor acting as a fan). At the age of 11, I deepened my knowledge of computer science by starting to learn (x)HTML / CSS, then very quickly move towards vb.NET.</p>
                            <p>Now, I am studying to become a fullstack Web / Mobile developer with the languages: <strong>HTML 5, CSS 3, SCSS, PHP, JS, as well as their libraries.</strong></p>
                            <p>It should be noted that I have acquired some solid foundation about <strong>Python</strong>, especially, <strong>Pygame</strong> library.</p>
                        </div>
                    </div>
                    <h1 className="text-center"><code className="text-dark">How to know when you are proficient in a language?</code></h1>
                    <div className="row justify-content-evenly">
                        <div className="col-md-3 ">
                            <img src={var_img} alt="" />
                            <p>You know what a <u>variable</u> is, and it's type.</p>
                            <p><strong>Array, String, Char, Bool, Integer, Float, etc.</strong></p>
                        </div>
                        <div className="col-md-3 ">
                            <img src={cond_img} alt="" />
                            <p><u>Conditions</u> and <u>Loops</u> are no longer a secret for you.<br />(Iterative or Recursive!)</p>
                            <p><strong>If...Else, Switch...Case, While, Do...While, For, etc.</strong></p>
                        </div>
                        <div className="col-md-3 ">
                            <img src={db_img} alt="" />
                            <p>Eat lots of <u>SQL</u>, queries and structures.</p>
                            <p><strong>CRUD, JOIN, MySQL functions, etc.</strong></p>
                            <p><small>And we can say, thanks to JSON!</small></p>
                        </div>
                    </div>
                    <div className="row justify-content-evenly">
                        <div className="col-md-3 ">
                            <img src={oop_img} alt="" />
                            <p>Don't skip this like beginner and don't be like : <i><u>OOP?</u> What is it?!!</i></p>
                            <p><strong>Class, Inheritance, Attribute, Method, Constructor, etc.</strong></p>
                        </div>
                        <div className="col-md-3 ">
                            <img src={framework_img} alt="" />
                            <p>You know how to use their <u>library</u>, and at least one <u>framework</u> associated with it.</p>
                            <p><strong>Bootstrap, React.JS, Pygame, Laravel, MySQL, etc.</strong></p>
                        </div>
                        <div className="col-md-3 ">
                            <img src={doc_img} alt="" />
                            <p>Finally, the best part: Know how to read and use official documentation.</p>
                            <p><strong>PHP.net, Python.org, Mozilla Dev, etc.</strong></p>
                        </div>
                    </div>
                </div>

                <div className="row justify-content-center">
                    <h1 className="text-center"><code className="text-dark">So, what about my skills?</code></h1>

                    <div className="col-md-4 text-center p-5 rounded text-light">
                        <h2>Soft Skill</h2>
                        <div id="soft_skill" className="d-flex flex-column">

                        </div>
                        <div className="d-flex justify-content-evenly mt-3">
                            <button onClick={_ => switch_skill(false)} className="btn btn-outline-danger">Back</button>
                            <button onClick={_ => switch_skill(true)} className="btn btn-primary">Next</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container m-5">
                <div className="row">
                    <div className="col-md-5">
                        <h2>City by night</h2>
                        <canvas id="city">Navigateur incompatible</canvas>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-5">
                        <h2>3D ISOMETRIC</h2>
                        <canvas id="canvas">Navigateur incompatible</canvas>
                    </div>
                </div>
            </div>
        </div>
    );
}

var skill = {
    "soft": [
        {
            "img": doc_img,
            "resume": "En quoi je suis patient"
        },
        {
            "img": oop_img,
            "resume": "En quoi je suis patien1t"
        },
        {
            "img": cond_img,
            "resume": "En quoi je suis pati212ent"
        },
        {
            "img": framework_img,
            "resume": "En quoi je suis patie2121nt"
        }
    ],
    "hard": [
        {
            "img": "../../assets/images/framework.png",
            "resume": "En quoi je suis bon"
        }
    ]
};

document.addEventListener("DOMContentLoaded", function () {
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
    setTimeout(() => {
        draw_city();
        setInterval(() => {
            draw_city();
        }, 1000);
    }, 1);
    switch_skill();
});

var acutal_skill = 0;

function switch_skill(next) {
    var soft = document.getElementById("soft_skill");
    var img = document.createElement("img");
    var p = document.createElement("p");

    if (next === undefined) {
        soft.innerHTML = "";
        p.className = "text-center";
        img.src = skill.soft[0].img;
        p.textContent = skill.soft[0].resume;
        soft.appendChild(img);
        soft.appendChild(p);
    } else {
        if ((next === true) && (acutal_skill < skill.soft.length - 1)) {
            soft.innerHTML = "";
            p.className = "text-center";
            acutal_skill++;
            img.src = skill.soft[acutal_skill].img;
            p.textContent = skill.soft[acutal_skill].resume;
            soft.appendChild(img);
            soft.appendChild(p);
        }
        else if ((next === false) && (acutal_skill > 0)) {
            soft.innerHTML = "";
            p.className = "text-center";
            acutal_skill--;
            img.src = skill.soft[acutal_skill].img;
            p.textContent = skill.soft[acutal_skill].resume;
            soft.appendChild(img);
            soft.appendChild(p);
        }
    }
}

function draw_city() {
    var city = document.getElementById("city");
    var ctx = city.getContext("2d");
    var color = [
        "#77aaff",
        "#99ccff",
        "#bbeeff",
        "#5588ff",
        "#3366ff",
    ];
    var x_before = 0;

    var x = city.width = 300;
    var y = city.height = 300;

    ctx.beginPath();
    ctx.fillStyle = "#272d41";
    ctx.rect(0, 0, x, y);
    ctx.fill();
    ctx.closePath();

    while (x_before < x) { // Building
        var a = Math.floor((Math.random() * 50) + 40);
        var b = Math.floor((Math.random() * 50) + 50);

        ctx.fillStyle = color[Math.floor(Math.random() * color.length)];
        ctx.strokeStyle = "#505050";

        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.rect(x_before, y, a, -b);
        ctx.fill();
        ctx.stroke();
        ctx.closePath();

        var w_win = (a - 10) / 4;
        var h_win = (a - 4) / 4;

        var posY_before = 0;

        for (let j = 0; j < 3; j++) {
            var posY_win = (y - b) + 4 + posY_before;
            var posX_before = x_before;

            for (let i = 0; i < 4; i++) {
                var posX_win = posX_before + (w_win + i);
                ctx.fillStyle = "orange";
                ctx.beginPath();
                ctx.rect(posX_win, posY_win, w_win, h_win);
                ctx.fill();
                ctx.closePath();
                i++;
                posX_before += w_win + (w_win / 10);
            }
            posY_before += (h_win + 2);

        }
        x_before += a;
    }

    var x_moon = Math.floor(Math.random() * 150) + 50;
    var y_moon = Math.floor(Math.random() * 100) + 50;

    ctx.fillStyle = "white";
    ctx.beginPath();
    ctx.arc(x_moon, y_moon, 20, 0, 2 * Math.PI);
    ctx.fill();
    ctx.closePath();

    // var item = color[Math.floor(Math.random()*color.length)];

    return city;
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