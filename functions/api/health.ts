export interface Env {
  THESTACC_API_KEY?: string;
  THESTACC_API_URL?: string;
}

export const onRequest: PagesFunction<Env> = async () => {
  return new Response(JSON.stringify({ ok: true }), {
    headers: { 'Content-Type': 'application/json' },
  });
};
