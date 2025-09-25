export async function loadComponent(selector) {
  const container = document.querySelector(selector);
  if (!container) return;
  
  const source = container.getAttribute('data-source');
  if (!source) return;
  
  try {
    const response = await fetch(window.location.origin + '/api/preview-68d5606423c95cd68a8500f1/' + source);
    const html = await response.text();
    container.innerHTML = html;
  } catch (error) {
    console.error(`Failed to load component from ${source}:`, error);
  }
}