// ---- config.js ----

// Booleano para probar concatenate
let booleano = false;

// Variables para probar Nano ID
let id1, id2;

import('nanoid').then((nanoid) => {
    id1 = nanoid.nanoid();
    id2 = nanoid.nanoid();
});

module.exports = {
    booleano: booleano,
    id1:id1,
    id2:id2
};