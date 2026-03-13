/* ============================================================
   scripts.js — Lógica interativa da página
   ============================================================ */

/**
 * Alterna entre abas da navegação
 * @param {string} id - ID da seção a exibir
 * @param {HTMLElement} btn - Botão clicado
 */
function mostrar(id, btn) {
  document.querySelectorAll('.secao').forEach(s => s.classList.remove('ativa'));
  document.querySelectorAll('nav button').forEach(b => b.classList.remove('ativo'));
  document.getElementById(id).classList.add('ativa');
  btn.classList.add('ativo');
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

/**
 * Abre/fecha um card de vocabulário
 * @param {HTMLElement} el - Elemento clicado
 */
function toggle(el) {
  el.classList.toggle('aberto');
}

/**
 * Exibe/oculta caixa de dica ou gabarito em exercícios
 * @param {HTMLElement} btn - Botão clicado
 * @param {string} tipo - 'dica' ou 'gabarito'
 */
function mostrarBox(btn, tipo) {
  const q   = btn.closest('.questao');
  const box = q.querySelector('.' + tipo + '-box');
  box.classList.toggle('visivel');
  btn.textContent = box.classList.contains('visivel')
    ? (tipo === 'dica' ? '💡 Ocultar' : '✓ Ocultar')
    : (tipo === 'dica' ? '💡 Dica'    : '✓ Gabarito');
}
