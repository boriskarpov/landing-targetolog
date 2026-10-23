// Форма заявки. Сейчас данные никуда не отправляются — только показывается «Спасибо».
// ЧТОБЫ ЗАЯВКИ ПРИХОДИЛИ:
//  • В Telegram: создайте бота у @BotFather, узнайте chat_id и раскомментируйте блок ниже
//    (лучше отправлять через небольшой PHP-скрипт на хостинге, чтобы не светить токен).
//  • На почту: подключите сервис форм (например, Formspree / Getform) и укажите его адрес в fetch.
document.getElementById('lead').addEventListener('submit', function (e) {
  e.preventDefault();
  var d = new FormData(this);
  var text = 'Новая заявка\nИмя: ' + d.get('name') + '\nКонтакт: ' + d.get('contact') + '\nБизнес: ' + d.get('business');
  // fetch('https://api.telegram.org/botВАШ_ТОКЕН/sendMessage', {
  //   method: 'POST', headers: {'Content-Type': 'application/json'},
  //   body: JSON.stringify({chat_id: 'ВАШ_CHAT_ID', text: text})
  // });
  console.log(text);
  this.hidden = true;
  document.getElementById('thanks').hidden = false;
});
