import { Component, Prop, h } from '@stencil/core';
//import { format } from '../../utils/utils';
export class OhbAnunciocmp {
    render() {
        return h("div", { class: "comentariolinha" },
            h("div", { class: "comentariocaixa" },
                h("h1", { class: "titulo" }, this.Titulo),
                h("p", { class: "comentario" }, this.Comentario),
                h("p", { class: "assinatura" }, this.Assinatura)));
    }
    static get is() { return "ohb-anunciocmp"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["ohb-anunciocmp.css"]
    }; }
    static get styleUrls() { return {
        "$": ["ohb-anunciocmp.css"]
    }; }
    static get properties() { return {
        "Titulo": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "string",
                "resolved": "string",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "titulo",
            "reflect": false
        },
        "Comentario": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "string",
                "resolved": "string",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "comentario",
            "reflect": false
        },
        "Horario": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "string",
                "resolved": "string",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "horario",
            "reflect": false
        },
        "Assinatura": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "string",
                "resolved": "string",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "assinatura",
            "reflect": false
        }
    }; }
}
