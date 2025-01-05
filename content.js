import { setupAdRemover } from './utils/adRemover.js';

console.log('MetaTFT Helper Extension loaded');

// Remove ad containers as soon as possible
setupAdRemover('inline_ad_container');