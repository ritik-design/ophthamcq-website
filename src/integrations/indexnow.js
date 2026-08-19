import { spawn } from 'node:child_process';
import { join } from 'node:path';

/**
 * Runs the IndexNow submitter after a successful build, but only when
 * INDEXNOW_SUBMIT=1 is set. Local and preview builds stay silent by default so
 * nobody pings Bing/Yandex from a laptop while testing.
 *
 * A submission failure is logged as a warning and never fails the build — the
 * site is already built and deployable; the ping can be retried with
 * `npm run indexnow`.
 *
 * @returns {import('astro').AstroIntegration}
 */
export default function indexNow() {
  return {
    name: 'indexnow-submit',
    hooks: {
      'astro:build:done': async ({ logger }) => {
        if (process.env.INDEXNOW_SUBMIT !== '1') {
          logger.info('Skipped (set INDEXNOW_SUBMIT=1 to submit changed blog URLs)');
          return;
        }

        const script = join(process.cwd(), 'scripts/indexnow-submit.mjs');

        const code = await new Promise((resolve) => {
          const child = spawn(process.execPath, [script], { stdio: 'inherit' });
          child.on('close', resolve);
          child.on('error', (err) => {
            logger.warn(`Could not run the submitter: ${err.message}`);
            resolve(1);
          });
        });

        if (code === 0) logger.info('IndexNow submission complete');
        else logger.warn(`Submission exited with code ${code} — retry with \`npm run indexnow\``);
      },
    },
  };
}
