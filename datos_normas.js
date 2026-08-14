// archivo: datos_norma.js
const IRAM_SPECS = {
    humedad: { max: 4.0 },
    te: { min: 0.90, max: 1.00 },
    cu: { max: 1.6 },
    finos1: { max: 1.0 }, // < 0.60 mm
    finos2: { max: 3.0 }  // < 0.85 mm
};

function verificarEstado(valor, parametro) {
    const spec = IRAM_SPECS[parametro];
    if (parametro === 'te') return valor >= spec.min && valor <= spec.max;
    return valor < spec.max;
}
