/**
 * Wraps every Markdown table in a horizontally scrollable container.
 *
 * A table cannot shrink below the intrinsic width of its content, so a
 * multi-column comparison table pushes past a narrow viewport and drags the
 * whole page into horizontal scroll. Hand-authored pages avoid this by wrapping
 * the table in `.table-scroll` (see src/pages/compare/[slug].astro), but Markdown
 * has no way to express that wrapper — hence this plugin.
 *
 * The wrapper is focusable and labelled so keyboard and screen-reader users can
 * reach and scroll it, which a plain overflow container does not allow.
 */
export default function rehypeWrapTables() {
  return (tree) => {
    visit(tree);
  };

  function visit(node) {
    if (!node.children) return;

    for (let i = 0; i < node.children.length; i += 1) {
      const child = node.children[i];

      if (child.type === 'element' && child.tagName === 'table') {
        // Column count drives the minimum width in CSS: a 2-column table reads
        // fine at any width, while a 4-column one needs room before it wraps
        // into an unreadable column of single words.
        child.properties = { ...child.properties, 'data-cols': countColumns(child) };

        node.children[i] = {
          type: 'element',
          tagName: 'div',
          properties: {
            className: ['table-scroll'],
            // Makes the scroll region keyboard-reachable. role+label give it an
            // accessible name so it is announced rather than being an unnamed
            // focus stop.
            tabIndex: 0,
            role: 'region',
            'aria-label': 'Table, scroll horizontally to see more',
          },
          children: [child],
        };
        continue; // Already visited this subtree's parent; the table has no nested tables.
      }

      visit(child);
    }
  }
}

/** Number of cells in a table's first row, i.e. its column count. */
function countColumns(table) {
  let count = 0;

  const walk = (node) => {
    if (count) return; // First row already measured.
    for (const child of node.children ?? []) {
      if (child.type !== 'element') continue;
      if (child.tagName === 'tr') {
        count = child.children.filter(
          (c) => c.type === 'element' && (c.tagName === 'th' || c.tagName === 'td'),
        ).length;
        return;
      }
      walk(child);
    }
  };

  walk(table);
  return count;
}
