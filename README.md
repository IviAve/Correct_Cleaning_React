# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


deploy
.URL : https://correct-cleaning.pages.dev/




KEYS FOR BACK4APP must use in parse.js:

VITE_APP_ID=Ean7ER6LcWvTWRbXiE8on65F4S4zwWEnBzQ1zPW8

VITE_JS_KEY=wnkEUp5EaP0FO5PHZzQC5UCgGqdsmiu0qZCpaVgy

VITE_SERVER_URL=https://parseapi.back4app.com/



Correct Cleaning

Correct Cleaning е уеб приложение, създадено за фирма със същото име, която предлага услуги по почистване на прозорци, мебели и други повърхности. Приложението предоставя възможност на потребителите да разглеждат галерия с изображения, да изпращат запитвания и да взаимодействат с коментари и снимки.

Описание на проекта
Проектът Correct Cleaning позволява на потребителите:

Нерегистрирани клиенти могат да разглеждат галерията с изображения, да разглеждат детайлите на снимките и да изпращат запитвания за услугите.

Регистрирани клиенти могат да:

Качват снимки.

Създават коментари относно услугите.

Лайкват и не лайкват коментари.

Основни функционалности
Галерия: Нерегистрираните потребители могат да разглеждат снимки и да виждат подробности за тях.

Запитвания:Нерегистрираните и регистрираните потребители могат да изпращат запитвания относно услугите на фирмата чрез имейл формата.

Коментари: Регистрираните потребители могат да добавят коментари относно услугите.

Лайкове на коментари: Регистрираните потребители могат да лайкват и не лайкват коментари както и собствените си коментари.

Административни функции: Администраторите могат да управляват снимките, коментарите и потребителите чрез специален панел./предстои да бъде създаден/

Инсталация и стартиране
1. Клонирайте репозитория
bash
Копиране
Редактиране
git clone https://github.com/IviAve/Correct_Cleaning_React.git
2. Инсталирайте зависимостите
Влезте в директорията на проекта и инсталирайте необходимите зависимости:

bash
Копиране
Редактиране
cd Correct_Cleaning_React
npm install
3. Стартирайте приложението
След като инсталирате зависимостите, стартирайте приложението с:

bash
Копиране
Редактиране
  start with : npm run dev
  
Приложението ще се стартира на http://localhost:3001.

Базови технологии и инструменти
React- Vite: Използвано за изграждането на компонентно-базираното приложение.

Back4App: Използва се за хостване на сървъра и базата данни, включително съхранение на данни и управление на потребителите.

React Router: За управление на маршрутизацията в приложението.

CSS: За стилизиране на компонентите и оформление на потребителския интерфейс.

Parse SDK: Използван за взаимодействие с Back4App за бази данни, коментари и изображения.

Структура на проекта
src/components/: Компоненти за различните части на приложението (например, галерия, коментари и т.н.).

src/services/: Услуги и хукс за взаимодействие с Back4App.

src/styles/: CSS файлове за стилизиране на приложението.

Как да добавите нови функции
Напишете нов компонент в директорията src/components/.

Добавете необходимия код за взаимодействие с Back4App за съхранение на данни.

Тествате новите функционалности на локалния сървър, стартирайки приложението чрез npm run dev.

Как да допринесете
Направете fork на репозитория.

Създайте нов клон (git checkout -b feature-name).

Направете необходимите промени.

Изпратете pull request с описание на промените.

Лиценз