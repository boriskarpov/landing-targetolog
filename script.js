// Форма заявки: отправляется через Formspree на почту boriskarpov79@gmail.com
document.getElementById('lead').addEventListener('submit', function (e) {
  e.preventDefault();
  var form = this, btn = form.querySelector('button');
  btn.disabled = true; btn.textContent = 'Отправляем…';
  var d = new FormData(form);
  d.append('_subject', 'Новая заявка с лендинга');
  fetch('https://formspree.io/f/xoeeqapj', {method: 'POST', body: d, headers: {'Accept': 'application/json'}})
    .then(function (r) { if (!r.ok) throw 0; form.hidden = true; document.getElementById('thanks').hidden = false; })
    .catch(function () { btn.disabled = false; btn.textContent = 'Отправить'; alert('Не получилось отправить. Попробуйте ещё раз или позвоните нам.'); });
});
