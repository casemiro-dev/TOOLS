import { mostrarMensagem } from '../utils/helpers.js';
import { inserirTexto, inserirTextoComTooltip } from './inserirTexto.js'; // se estiver separado

export function abrirModalMPDesk() {
  const modal = document.getElementById('modal-mpdesk');
  modal.classList.add('active');
  const conteudo = modal.querySelector('.modal-content');
  if (conteudo) {
    conteudo.scrollTop = 0;
  }
}

export function fecharModalMPDesk() {
  const modal = document.getElementById('modal-mpdesk');
  modal.classList.remove('active');
}