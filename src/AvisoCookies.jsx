import { useEffect, useState } from 'react';

const CHAVE = 'neurolog_cookies';
const VALIDADE = 365 * 24 * 3600 * 1000; // pergunta de novo depois de 1 ano

const lerEscolha = () => {
  try {
    const e = JSON.parse(localStorage.getItem(CHAVE) || 'null');
    return e && Date.now() - e.em < VALIDADE ? e.valor : null;
  } catch {
    return null;
  }
};

const salvar = (valor) => {
  try { localStorage.setItem(CHAVE, JSON.stringify({ valor, em: Date.now() })); } catch { /* vale só nesta visita */ }
};

/** Link "Preferências de cookies" (rodapé, documentação legal) reabre o aviso. */
export const abrirPreferenciasCookies = () => window.dispatchEvent(new Event('neurolog:cookies'));

/**
 * Aviso de cookies (LGPD). Cookies de medição e anúncios (Google Tag Manager,
 * Analytics, Ads) só são ativados depois do aceite; recusar mantém só o essencial.
 */
function AvisoCookies() {
  const [aberto, setAberto] = useState(() => lerEscolha() === null);

  useEffect(() => {
    const abrir = () => setAberto(true);
    window.addEventListener('neurolog:cookies', abrir);
    return () => window.removeEventListener('neurolog:cookies', abrir);
  }, []);

  if (!aberto) return null;

  const aceitar = () => {
    salvar('aceito');
    window.neurologCarregarGTM?.();
    setAberto(false);
  };

  const recusar = () => {
    const tinhaAceitado = lerEscolha() === 'aceito';
    salvar('recusado');
    setAberto(false);
    // Se já tinha aceitado nesta visita, recarrega para descarregar os rastreadores
    if (tinhaAceitado && window.__neurologGTM) window.location.reload();
  };

  return (
    <div
      role="dialog"
      aria-live="polite"
      aria-label="Aviso de cookies"
      className="fixed inset-x-0 bottom-0 z-[100] p-3 sm:p-4"
    >
      <div className="max-w-4xl mx-auto bg-white border border-slate-200 shadow-2xl rounded-2xl p-4 sm:p-5 flex flex-col md:flex-row md:items-center gap-4">
        <p className="text-sm text-slate-600 leading-relaxed flex-1">
          Usamos cookies essenciais para o site funcionar e, <strong>com a sua permissão</strong>, cookies do Google para
          medir visitas e campanhas. Você pode mudar a escolha a qualquer momento em “Preferências de cookies”, no rodapé.{' '}
          <a href="/documentacao-legal#cookies" className="font-bold text-[#092c77] underline">Saiba mais</a>
        </p>
        <div className="flex gap-2 shrink-0">
          <button
            type="button"
            onClick={recusar}
            className="px-4 py-2.5 rounded-xl border border-slate-300 text-sm font-bold text-slate-700 hover:bg-slate-50"
          >
            Só essenciais
          </button>
          <button
            type="button"
            onClick={aceitar}
            className="px-4 py-2.5 rounded-xl bg-[#092c77] text-white text-sm font-bold hover:opacity-90"
          >
            Aceitar todos
          </button>
        </div>
      </div>
    </div>
  );
}

export default AvisoCookies;
