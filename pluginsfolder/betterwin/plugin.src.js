// Better Windows Plugin
// Enhances the appearance and functionality of system windows.

(function() {
  // Initialization
  console.log("Better Windows plugin initialized!");

  // Example feature: Improve window border style
  function enhanceWindows() {
    let windows = document.querySelectorAll('.window');
    if (!windows.length) return;
    windows.forEach(win => {
      win.style.boxShadow = '0 2px 12px rgba(0,0,0,0.2)';
      win.style.borderRadius = '12px';
      win.style.border = '1px solid #d1d5db';
    });
  }

  // Run enhancement on page load
  window.addEventListener('DOMContentLoaded', enhanceWindows);

  // Export (if needed, for plugin system)
  window.BetterWin = { enhanceWindows };
})();
