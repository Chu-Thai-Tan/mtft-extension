/**
 * Removes all elements with the specified class name from the DOM
 * @param {string} className - The class name to target
 */
export function removeElementsByClass(className) {
  console.log('Attempting to remove elements with class:', className);
  const elements = Array.from(document.getElementsByClassName(className));
  console.log('Found elements:', elements.length, elements);
  
  elements.forEach(element => {
    console.log('Removing element:', element);
    element.remove();
  });
}

/**
 * Sets up a mutation observer to continuously remove ad elements
 * @param {string} className - The class name to target
 */
export function setupAdRemover(className) {
  console.log('Setting up ad remover for class:', className);
  
  // Initial removal
  removeElementsByClass(className);

  // Watch for new elements
  const observer = new MutationObserver((mutations) => {
    console.log('DOM mutation detected');
    removeElementsByClass(className);
  });

  observer.observe(document.body, {
    childList: true,
    subtree: true,
  });

  console.log('Observer setup complete');
  return observer;
}
