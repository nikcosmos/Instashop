# Техническая Документация

<p>Для запуска сборки на устройстве должна быть <a href = 'https://nodejs.org/en'>NODE</a> - Recommended For Most Users </p>

## Запуск сборки в режиме Разработки

<ul>
   <li><code>npm start</code> - <b>Получить все зависимости которые необходимы для проекта</b></li>
   <li><code>npm run font</code> - <b>Конвертаци шрифтов*</b></li>
   <li><code>npm run dev</code> - <b>Поднятие сервера</b></li>
</ul>
<p>*Конвертация и оптимизация шрифтов происходит автоматически,так же автоматически создается и заполняется файл <em style ='color:orange'>/src/scss/fonts.scss</em>
</p>
<p style ='color:rosybrown'>Начертания шрифтов автоматически могут быть проставлены не верно
</p>

## Запуск сборки в режиме Продакшена

<ul>
   <li><code> npm run build </code> - <b>будет создана папка DIST с билдом проекта</b>
</ul>

### Дополнительные скрипты

<p><code>npm run sprite</code> - создает спрайт из  
<em style ='color:orange'>/src/svgicons</em>
в
<em style ='color:orange'>/src/img/icons/icons.svg</em>
</p>

Вариант использования спрайта в HTML

```shell
<svg>
    <use xlink:href='@img/icons/icons.svg#svg-НАЗВАНИЕ ИКОНКИ'>
    </use>
</svg>
```

<br/>
<br/>
<br/>

# Кастомизация

<p>Все <b style ='color:paleturquoise'>переменные </b> с комментариями находятся в файле <em style ='color:orange'>src/scss/vars.scss</em></p>
<p>Все <b style = 'color:yellow'>API</b> конфигурации находятся в файле  <em style ='color:orange'>src/js/config.js</em></p>
