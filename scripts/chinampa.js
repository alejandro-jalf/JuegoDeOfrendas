
function Chinampa() {
    const ref = this;
    const MAX = 0.5;
    const MIN = 0;
    
    ref.ValorActual = 0;
    ref.Grupo = '';
    ref.ValorInicial = 0;
    ref.Puntos = 0;

    ref.setChinampa = (Grupo = '', ValorInicial = 0.0, Puntos = 0.0) => {
        ref.Grupo = Grupo;
        ref.ValorInicial = ValorInicial;
        ref.Puntos = Puntos;
        ref.ValorActual = ValorInicial;
    }

    ref.avanza = () => {
        const avance = ref.getAvance(MIN, MAX);
        const nuevoValor = ref.ValorActual + avance;
        const metaActual = ref.ValorInicial + ref.Puntos;
        if (nuevoValor < metaActual)
            ref.ValorActual += avance;
        else ref.ValorActual = metaActual;
    }

    ref.getPuntos = () => {
        return ref.Puntos;
    }

    ref.getGrupo = () => {
        return ref.Grupo;
    }

    ref.getValorInicial = () => {
        return ref.ValorInicial;
    }

    ref.getValorActual = () => {
        return ref.ValorActual;
    }
    ref.getPuntosTotales = () => {
        return ref.ValorInicial + ref.Puntos;
    }

    ref.llegoAlaMeta = () => {
        const metaActual = ref.ValorInicial + ref.Puntos;
        return ref.ValorActual >= metaActual;
    }

    ref.getDatos = () => {
        console.log(ref.Datos);
    }

    ref.getAvance = (min = 0.0, max = 0.0) => {
        return Math.random() * (max - min) + min;
    }
}
