// Vercel Speed Insights - Inline Integration
// This script initializes the Speed Insights queue and loads the tracking script

(function() {
  'use strict';
  
  // Initialize the Speed Insights queue
  window.si = window.si || function () {
    (window.siq = window.siq || []).push(arguments);
  };
  
  // Dynamically inject the Speed Insights script
  var script = document.createElement('script');
  script.defer = true;
  
  // Use the Vercel-provided script path (available after deployment)
  // This path is automatically created when Speed Insights is enabled in the dashboard
  script.src = '/_vercel/speed-insights/script.js';
  
  // Fallback error handling
  script.onerror = function() {
    console.log('[Vercel Speed Insights] Script could not be loaded. Make sure Speed Insights is enabled in your Vercel project settings.');
  };
  
  // Inject the script
  document.head.appendChild(script);
})();
