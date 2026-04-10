export function renderBody(treeHtml: string): string {
  return `
    <main class="page-main">
      <section class="tree-panel" aria-label="Tree Browser">
        ${treeHtml}
      </section>
    </main>
  `;
}
