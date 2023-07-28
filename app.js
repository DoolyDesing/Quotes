//Связка HTML и JS
const quoteBtn = document.getElementById('quoteBtn')
const dislikeBtn = document.getElementById('dislikeBtn')
const quoteElement = document.getElementById('quote')
//Массив цитат
let random = 0
const quotes = ['На мой взгляд, существует единственная форма человеческого падения — потеря цели.', 'Никто не ценит того, чего слишком много.', 'Кто вопросов не задает, тот лжи не слышит.', 'Лучше быть оптимистом и ошибаться, чем оставаться вечно правым пессимистом.', 'Если соблюдаешь мелкие правила, можно нарушать большие.', 'Надо бы так устроить жизнь, чтобы каждое мгновение в ней было значительно.', 'Отчаяться каждый может. А вот чтобы совладать с собой, нужно быть человеком', ' Думайте о прошлом, только если воспоминания приятны вам.']
// Изменение цитат
quote.textContent = quotes[Math.floor(Math.random()*quotes.length)]
quoteBtn.onclick = () => quote.textContent = quotes[Math.floor(Math.random()*quotes.length)]
//Не нравится
dislikeBtn.onclick = () => {
    quotes.splice(random + 1, 1)
    quote.textContent = 'Прощайте, цитата. Здравствуйте, новая!'
      //Изменение цитаты
        setTimeout(() => {
            quote.textContent = quotes[Math.floor(Math.random()*quotes.length)]
            quoteBtn.onclick = () => quote.textContent = quotes[Math.floor(Math.random()*quotes.length)]
        }, 1000);
}




