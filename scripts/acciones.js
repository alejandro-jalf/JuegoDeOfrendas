const $conteo = document.querySelector('#conteo');
const $contador = document.querySelector('#contador');
const $containerResultados = document.querySelector('#containerResultados');

let segundo = 1;
let cuenta = 5;
const cuentaRegresiva = () => {
    if (!finished) {
        segundo++;
        setTimeout(() => {
            if (segundo <= 11) {
                if (segundo === 2) $conteo.style.visibility = 'visible';
                if (segundo % 2 === 0) {
                    $contador.innerHTML = cuenta;
                    $conteo.style.opacity = '1';
                    cuenta--;
                } else $conteo.style.opacity = '0';
            }
            if (segundo <= 11) cuentaRegresiva();
            else {
                segundo = 0;
                cuenta = 5;
                finished = false;
                draw();
                $conteo.style.opacity = '0';
                $conteo.style.visibility = 'hidden';
            }
        }, 1000)
    } else draw();
}

const showPosition = (position = 4) => {
    if (position === -1) {
        for (let pos = 1; pos < 5; pos++) {
            const $item = document.querySelector('#positon' + pos);
            $item.classList.add('showItem');
        }
    } else {
        const $item = document.querySelector('#positon' + position);
        $item.classList.add('showItem');
    }
}

const loadWinners = (old = false) => {
    const grupos = [Joyitas, Amigos, Mensajeros, Exploradores];
    grupos.sort((a, b) => {
        if (old) return b.getValorInicial() - a.getValorInicial();
        return b.getPuntosTotales() - a.getPuntosTotales();
    });
    for (let pos = 0; pos < grupos.length; pos++) {
        const $name = document.querySelector('#nameResult' + (pos + 1));
        const $points = document.querySelector('#pointsResult' + (pos + 1));
        
        $name.innerHTML = grupos[pos].getGrupo();
        $points.innerHTML = old ? grupos[pos].getValorInicial() : grupos[pos].getPuntosTotales();
    }
}

loadWinners();

const closeGanadores = () => {
    $containerResultados.style.opacity  = '0'
    setTimeout(() => {
        $containerResultados.style.visibility  = 'hidden'
    }, 1000);

    const $items = document.querySelectorAll('.item-results');
    $items.forEach(item => { item.classList.remove('showItem'); });
}

const showWinners = (old = false) => {
    loadWinners(old);
    $containerResultados.style.visibility  = 'visible'
    $containerResultados.style.opacity  = '1'
}

document.addEventListener('keydown', (event) => {
    if (event.ctrlKey && event.code === 'KeyY')
        showWinners(true);
    if (event.ctrlKey && event.code === 'KeyK')
        cuentaRegresiva();
    if (event.code === 'Escape')
        closeGanadores();
    if ((event.altKey && event.code === 'Digit1') || (event.altKey && event.code === 'Numpad1'))
        showPosition(1);
    if ((event.altKey && event.code === 'Digit2') || (event.altKey && event.code === 'Numpad2'))
        showPosition(2);
    if ((event.altKey && event.code === 'Digit3') || (event.altKey && event.code === 'Numpad3'))
        showPosition(3);
    if ((event.altKey && event.code === 'Digit4') || (event.altKey && event.code === 'Numpad4'))
        showPosition(4);
    if ((event.altKey && event.code === 'Digit0') || (event.altKey && event.code === 'Numpad0'))
        showPosition(-1);
});
