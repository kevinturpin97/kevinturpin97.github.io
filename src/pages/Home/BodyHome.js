function BodyHome()
{
    return (
        <div className="container-fluid">
            <button onClick={draw} className="btn btn-danger">Draw for me baby</button>
            <canvas id="canvas">Navigateur incompatible</canvas> 
        </div>
    );
}

function draw()
{
    var canva = document.getElementById("canvas");
    var ctx = canva.getContext("2d");
    canva.width = 500;
    canva.height = 500;

    var centerX = canva.width / 2;
    var centerY = canva.height / 2;

    var deg = 45 * Math.PI / 180;   

    ctx.strokeStyle = "white";

    ctx.moveTo(centerX-50, centerY-50);
    ctx.lineTo(250, 200);
    ctx.lineTo(250, 250);
    ctx.lineTo(200, 250);
    ctx.lineTo(200, 200);
    

    ctx.stroke();

}

export default BodyHome;