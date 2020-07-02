import { Component, Prop, h } from '@stencil/core';
//import { format } from '../../utils/utils';

@Component({
  tag: 'ohb-anunciocmp',
  styleUrl: 'ohb-anunciocmp.css',
  shadow: true
})
export class OhbAnunciocmp {
  @Prop() Titulo: string;
  @Prop() Comentario: string;
  @Prop() Horario: string;
  @Prop() Assinatura: string;

  render() {
    return <div class="comentariolinha">
        <div class="comentariocaixa">
              <h1 class="titulo">{this.Titulo}</h1> 
              <p class="comentario">{this.Comentario}</p>
              <p class="assinatura">{this.Assinatura}</p>
          </div>
      </div>
  }
}
