/**
 * Removes all elements with the specified class name from the DOM
 * @param {string} className - The class name to target
 */
export function removeElementsByClass(className) {
  const elements = document.getElementsByClassName(className);
  while(elements.length > 0) {
    elements[0].parentNode.removeChild(elements[0]);
  }
}

/**
 * Sets up a mutation observer to continuously remove ad elements
 * @param {string} className - The class name to target
 */
export function setupAdRemover(className) {
  // Remove existing elements
  removeElementsByClass(className);

  // Watch for new elements
  const observer = new MutationObserver(() => {
    removeElementsByClass(className);
  });

  observer.observe(document.body, {
    childList: true,
    subtree: true
  });

  return observer;
}