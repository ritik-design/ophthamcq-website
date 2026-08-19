/**
 * Keeps production-only Markdown clean while retaining editorial notes in the
 * source drafts and tracker.  A matched heading and its section are removed
 * through the following heading of the same or higher level.
 */
function headingText(node) {
  return (node.children || []).map((child) => child.value || '').join('').trim().toLowerCase();
}

function isEditorialHeading(text) {
  return text === 'qa'
    || /\b(?:editorial|final)\s+qa\b/.test(text)
    || /\binternal[ -]?link\s+(?:plan|manifest)\b/.test(text)
    || /\blink manifest\b/.test(text);
}

export default function stripEditorialSections() {
  return (tree) => {
    const cleaned = [];

    for (let index = 0; index < tree.children.length; index += 1) {
      const node = tree.children[index];
      if (node.type !== 'heading') {
        cleaned.push(node);
        continue;
      }

      const text = headingText(node);

      // A few drafts combine their public sources heading with the editorial
      // handoff label. Retain the cited sources, then remove the nested
      // manifest/QA sections normally.
      if (/^sources\b/.test(text) && isEditorialHeading(text)) {
        node.children = [{ type: 'text', value: 'Sources' }];
        cleaned.push(node);
        continue;
      }

      if (!isEditorialHeading(text)) {
        cleaned.push(node);
        continue;
      }

      const depth = node.depth;
      index += 1;
      while (
        index < tree.children.length
        && !(tree.children[index].type === 'heading' && tree.children[index].depth <= depth)
      ) {
        index += 1;
      }
      index -= 1;
    }

    tree.children = cleaned;
  };
}
