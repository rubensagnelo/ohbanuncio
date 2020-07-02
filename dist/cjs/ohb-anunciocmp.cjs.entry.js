'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-8117c251.js');

const ohbAnunciocmpCss = ":host{display:block}.comentariolinha{-ms-flex-align:center;align-items:center;display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row;-ms-flex-wrap:wrap;flex-wrap:wrap;-ms-flex-pack:center;justify-content:center}#interna{width:200px;}.comentariocaixa{text-align:justify;width:40%;}.titulo{font-size:32px;color:#000;font-family:medium-content-sans-serif-font, \"Lucida Grande\", \"Lucida Sans Unicode\", \"Lucida Sans\", Geneva, Arial, sans-serif}.comentario{font-size:15px;line-height:1em;color:#000;font-family:medium-content-sans-serif-font, \"Lucida Grande\", \"Lucida Sans Unicode\", \"Lucida Sans\", Geneva, Arial, sans-serif}.assinatura{font-size:15px;line-height:1em;color:#000;font-family:medium-content-sans-serif-font, \"Lucida Grande\", \"Lucida Sans Unicode\", \"Lucida Sans\", Geneva, Arial, sans-serif}";

const OhbAnunciocmp = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    render() {
        return index.h("div", { class: "comentariolinha" }, index.h("div", { class: "comentariocaixa" }, index.h("h1", { class: "titulo" }, this.Titulo), index.h("p", { class: "comentario" }, this.Comentario), index.h("p", { class: "assinatura" }, this.Assinatura)));
    }
};
OhbAnunciocmp.style = ohbAnunciocmpCss;

exports.ohb_anunciocmp = OhbAnunciocmp;
