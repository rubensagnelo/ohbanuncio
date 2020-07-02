'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-8117c251.js');

const defineCustomElements = (win, options) => index.patchEsm().then(() => {
  return index.bootstrapLazy([["ohb-anunciocmp.cjs",[[1,"ohb-anunciocmp",{"Titulo":[1,"titulo"],"Comentario":[1,"comentario"],"Horario":[1,"horario"],"Assinatura":[1,"assinatura"]}]]]], options);
});

exports.defineCustomElements = defineCustomElements;
