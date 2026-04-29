# GudaJoB

Одностраничный учебный сайт-вакансия для компании **GUDOVICH.AI**.

## Что внутри

- React + Vite без backend и баз данных.
- Адаптивная страница вакансии «Человек, который делает невозможное».
- Форма отклика работает локально: данные никуда не отправляются, после отправки появляется сообщение.
- Ссылка email открывается через `mailto:alexander.gudoovich@gmail.com`.

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

Проект настроен для адреса:

```text
https://uyanujet72-art.github.io/GudaJoB/
```

В `vite.config.js` уже указан правильный base:

```js
base: '/GudaJoB/'
```

Деплой выполняется через GitHub Actions из файла `.github/workflows/deploy.yml`.

1. Сделайте commit и push в ветку `main`.
2. На GitHub откройте **Actions** и дождитесь успешного workflow `Deploy to GitHub Pages`.
3. Откройте **Settings -> Pages**.
4. В блоке **Build and deployment** выберите **Source: GitHub Actions**.
5. Откройте ссылку:

```text
https://uyanujet72-art.github.io/GudaJoB/
```

## Команды перед публикацией

```bash
npm install
npm run build
```

Для локальной проверки production-сборки:

```bash
npm run preview
```
