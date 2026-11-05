// Lead forms: posts to the shared lead service (Worker thestacc-leads), which emails team@thestacc.com through Resend.
// Success is shown only when the service says so. On any failure the visitor keeps what they typed and is told to email support instead.
const LEAD_SERVICE = 'https://thestacc-leads.stacc.workers.dev';
const SUPPORT = 'support@ophthamcq.com';

function say(form: HTMLFormElement, kind: 'ok' | 'err' | 'wait', text: string): void {
  const el = form.querySelector<HTMLElement>('[data-form-status]');
  if (!el) return;
  el.hidden = false;
  el.textContent = text;
  el.className = `text-sm rounded-lg px-4 py-3 ${kind === 'ok' ? 'bg-emerald-50 text-emerald-800 border border-emerald-200' : kind === 'err' ? 'bg-rose-50 text-rose-800 border border-rose-200' : 'bg-slate-50 text-slate-700 border border-slate-200'}`;
}

function init(): void {
  document.querySelectorAll<HTMLFormElement>('form[data-lead-form]').forEach((form) => {
    const started = Date.now();
    let busy = false;
    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      if (busy) return;
      busy = true;
      const btn = form.querySelector<HTMLButtonElement>('button[type="submit"]');
      if (btn) btn.disabled = true;
      say(form, 'wait', 'Sending your message…');
      const payload: Record<string, string> = { _subject: form.dataset.subject || 'New message from ophthamcq.org', _url: location.href, form: form.dataset.leadForm || 'form' };
      new FormData(form).forEach((v, k) => { if (typeof v === 'string' && v.trim() !== '') payload[k] = v.trim(); });
      // A person cannot fill a form in under 2 seconds; a script can.
      const wait = Math.max(0, 2000 - (Date.now() - started));
      if (wait) await new Promise((r) => setTimeout(r, wait));
      let ok = false;
      try {
        const res = await fetch(LEAD_SERVICE, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(payload), signal: AbortSignal.timeout(15000) });
        const body = (await res.json().catch(() => null)) as { success?: boolean } | null;
        ok = res.ok && !!body && body.success === true;
      } catch {
        ok = false;
      }
      if (ok) {
        form.reset();
        say(form, 'ok', 'Thank you. We have your message and will reply by email within one working day.');
      } else {
        say(form, 'err', `Sorry, that did not send. Your details are still here. Please try again, or email ${SUPPORT}.`);
        if (btn) btn.disabled = false;
      }
      busy = false;
    });
  });
}
init();
