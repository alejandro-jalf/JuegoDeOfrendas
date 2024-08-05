const canvas = document.querySelector('#rio');
const ctx = canvas.getContext('2d');
const $chinampa = document.querySelector('#chinampa');
const $start = document.querySelector('#start');

canvas.width = window.innerWidth + 3500;
canvas.height = 400

// Declaracion de Grupos
const Joyitas = new Chinampa();
const Amigos = new Chinampa();
const Mensajeros = new Chinampa();
const Exploradores = new Chinampa();

const WIDTH_START = 80;
let finished = false;

const fillVerticalText = (context, text, x, y, verticalSpacing) => {
    for (var i = 0; i < text.length; i++) {
        const widthLetter = context.measureText(text[i]).width;
        context.fillText(text[i], x - (widthLetter / 2), y + i * verticalSpacing);
    }
}

function cleanCanvas() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}

function initChinampas() {
    Joyitas.setChinampa('Joyitas', 1220.5, 927.5);
    Amigos.setChinampa('Amigos', 1438.5, 1530.5);
    Mensajeros.setChinampa('Mensajeros', 398, 127);
    Exploradores.setChinampa('Generacion de Vida', 1601.5, 1645.5);
}

function drawPistas() {
    ctx.drawImage($start, 0, 0, WIDTH_START, canvas.height);

    ctx.fillStyle = '#df0000'
    ctx.shadowBlur = 0;
    ctx.fillRect(WIDTH_START, 110, canvas.width, 6);
    ctx.fillRect(WIDTH_START, 200, canvas.width, 6);
    ctx.fillRect(WIDTH_START, 290, canvas.width, 6);

    ctx.fillStyle = '#ffffff'
    ctx.font = "bold 70px arial";
    ctx.shadowColor = "black";
    ctx.shadowBlur = 7;
    ctx.lineWidth=5;
    ctx.strokeText(Joyitas.getGrupo(), 800, 80);
    ctx.fillText(Joyitas.getGrupo(), 800, 80);
    ctx.strokeText(Amigos.getGrupo(), 800, 180);
    ctx.fillText(Amigos.getGrupo(), 800, 180);
    ctx.strokeText(Mensajeros.getGrupo(), 800, 270);
    ctx.fillText(Mensajeros.getGrupo(), 800, 270);
    ctx.strokeText(Exploradores.getGrupo(), 800, 360);
    ctx.fillText(Exploradores.getGrupo(), 800, 360);

    ctx.fillStyle = '#000'
    ctx.shadowColor = "white";
    ctx.font = "bold 70px arial";
    fillVerticalText(ctx, 'Inicio', 40, 60, 60);
}

function drawChinampas() {
    ctx.shadowColor = "white";
    ctx.shadowBlur = 10;
    ctx.drawImage($chinampa, Joyitas.ValorActual + WIDTH_START, 10, 160, 80);
    ctx.drawImage($chinampa, Amigos.ValorActual + WIDTH_START, 100, 160, 80);
    ctx.drawImage($chinampa, Mensajeros.ValorActual + WIDTH_START, 190, 160, 80);
    ctx.drawImage($chinampa, Exploradores.ValorActual + WIDTH_START, 280, 160, 80);
}

function moveChinampas() {
    if (
        !Joyitas.llegoAlaMeta() ||
        !Amigos.llegoAlaMeta() ||
        !Mensajeros.llegoAlaMeta() ||
        !Exploradores.llegoAlaMeta()
    ) {
        if (!Joyitas.llegoAlaMeta())
            Joyitas.avanza();
        if (!Amigos.llegoAlaMeta())
            Amigos.avanza();
        if (!Mensajeros.llegoAlaMeta())
            Mensajeros.avanza();
        if (!Exploradores.llegoAlaMeta())
            Exploradores.avanza();
    } else {
        finished = true;
    }
}

function draw() {
    cleanCanvas();

    drawPistas();
    drawChinampas();

    moveChinampas();

    if (!finished) window.requestAnimationFrame(draw);
    else showWinners();
}

initChinampas();
drawPistas();
drawChinampas();
