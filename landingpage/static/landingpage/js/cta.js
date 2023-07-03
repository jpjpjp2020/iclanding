document.addEventListener("DOMContentLoaded", function() {
  const tabs = Array.from(document.querySelectorAll('.tab-button'));
  const contents = Array.from(document.querySelectorAll('.tab-content'));

  tabs.forEach(tab => {
    tab.addEventListener('click', function() {
      const target = this.dataset.target;

      tabs.forEach(t => {
        t.classList.remove('active', 'bg-gray-900', 'text-white');
        t.classList.add('bg-gray-50', 'text-gray-900');
      });
      this.classList.add('active', 'bg-gray-900', 'text-white');
      this.classList.remove('bg-gray-50', 'text-gray-900');

      contents.forEach(c => c.classList.add('hidden'));
      document.querySelector('#' + target + '-content').classList.remove('hidden');
    });
  });
});
