export function createButton(label, options = {}) {
  const variant = options.variant || 'primary';
  const styles = {
    primary: 'bg-blue-600 text-white',
    secondary: 'bg-gray-200 text-gray-900'
  };

  return {
    label,
    variant,
    markup: `<button class="${styles[variant] || styles.primary}">${label}</button>`
  };
}

export function createCard(title, content) {
  return `<section class="rounded-lg border p-4 shadow-sm">
    <h2 class="text-lg font-semibold">${title}</h2>
    <p class="mt-2 text-sm text-gray-600">${content}</p>
  </section>`;
}

const demoButton = createButton('Get started');
console.log('Demo button:', demoButton.markup);
