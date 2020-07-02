import { a as patchEsm, b as bootstrapLazy } from './index-107e94ba.js';

const defineCustomElements = (win, options) => patchEsm().then(() => {
  return bootstrapLazy([["ohb-anunciocmp",[[1,"ohb-anunciocmp",{"Titulo":[1,"titulo"],"Comentario":[1,"comentario"],"Horario":[1,"horario"],"Assinatura":[1,"assinatura"]}]]]], options);
});

export { defineCustomElements };
