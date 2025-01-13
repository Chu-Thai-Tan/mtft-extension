console.log('MetaTFT Helper Extension loaded - ' + new Date().toISOString());

// Wait for DOM to be ready
function init() {
  console.log('Initializing ad remover...');
  const targetClass = 'inline_ad_container';
  
  // Check if elements exist
  const elements = document.getElementsByClassName(targetClass);
  console.log('Found elements:', elements.length);
  
  // Import and setup ad remover
  import('./utils/adRemover.js')
    .then(({ setupAdRemover }) => {
      setupAdRemover(targetClass);
    })
    .catch(error => {
      console.error('Failed to load ad remover:', error);
    });
}

// Run initialization
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}