(() => {
  if (!('serviceWorker' in navigator) || !/^https?:$/.test(location.protocol)) return;

  window.addEventListener('load', () => {
    navigator.serviceWorker.register('./sw.js').catch(() => {
      const status = document.querySelector('#syncDetail');
      if (status) status.textContent = 'Offline app install unavailable here';
    });
  });
})();
