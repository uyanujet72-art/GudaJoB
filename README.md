# GudaJoB

Одностраничный учебный сайт-вакансия для вымышленной компании **GUDOVICH.AI**.

## Что внутри

- React + Vite без backend и баз данных.
- Адаптивная страница вакансии «Человек, который делает невозможное».
- Форма отклика работает локально: данные никуда не отправляются, после отправки появляется сообщение.
- Ссылка email открывается через `mailto:hr@gudovich.ai`.

## Локальный запуск

```bash
npm install
npm run dev
```

После запуска Vite покажет локальный адрес, обычно:

```bash
http://localhost:5173/
```

## Сборка

```bash
npm run build
```

Готовые статические файлы появятся в папке `dist`.

Проверить сборку локально:

```bash
npm run preview
```

## Публикация на GitHub Pages

1. Создайте репозиторий на GitHub, например `gudajob-vacancy`.
2. В файле `vite.config.js` замените `REPOSITORY_NAME` на название репозитория:

```js
base: process.env.GITHUB_PAGES ? '/gudajob-vacancy/' : '/',
```

3. Установите пакет для публикации:

```bash
npm install --save-dev gh-pages
```

4. Добавьте в `package.json` scripts:

```json
"predeploy": "GITHUB_PAGES=true npm run build",
"deploy": "gh-pages -d dist"
```

5. Опубликуйте:

```bash
npm run deploy
```

6. В настройках репозитория откройте **Settings -> Pages** и выберите публикацию из ветки `gh-pages`.

Ссылка будет выглядеть так:

```text
https://USERNAME.github.io/gudajob-vacancy/
```

Где `USERNAME` - ваш GitHub-логин, а `gudajob-vacancy` - название репозитория.

## Альтернативный способ через GitHub Actions

Можно не ставить `gh-pages`, а включить GitHub Pages через Actions и загружать папку `dist`.
Для учебного проекта проще использовать вариант с `gh-pages`, описанный выше.
