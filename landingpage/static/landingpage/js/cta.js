document.addEventListener("DOMContentLoaded", function() {
  const tabs = Array.from(document.querySelectorAll('.tab-button'));
  const contents = Array.from(document.querySelectorAll('.tab-content'));

  tabs.forEach(tab => {
    tab.addEventListener('click', function() {
      const target = this.dataset.target;
      tabs.forEach(t => t.classList.remove('active'));
      contents.forEach(c => c.classList.add('hidden'));
      this.classList.add('active');
      document.querySelector('#' + target + '-content').classList.remove('hidden');
    });
  });
});
