document.addEventListener("DOMContentLoaded", function() {
  const tabs = Array.from(document.querySelectorAll('.tab-button'));
  const contents = Array.from(document.querySelectorAll('.tab-content'));

  tabs.forEach(tab => {
    tab.addEventListener('click', function() {
      const target = this.dataset.target;

      tabs.forEach(t => {
        t.classList.remove('active', 'bg-indigo-800', 'text-white');
        t.classList.add('bg-white', 'text-indigo-800');
      });
      this.classList.add('active', 'bg-indigo-800', 'text-white');
      this.classList.remove('bg-white', 'text-indigo-800');

      contents.forEach(c => c.classList.add('hidden'));
      document.querySelector('#' + target + '-content').classList.remove('hidden');
    });
  });
});
