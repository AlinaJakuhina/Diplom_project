В процессе разработки этого проекта я использовала несколько технологий, которые помогли мне создать мощное и эффективное веб-приложение.

React: React - это JavaScript-библиотека для создания пользовательских интерфейсов. Я выбрала React, потому что изучение курса было на этой библиотеке, также он обеспечивает множество возможностей для разработки масштабируемых и переиспользуемых компонентов, что делает код более структурированным и легко поддерживаемым.

React Router: React Router - это набор инструментов для маршрутизации веб-приложений React. Я использовала React Router для создания навигации между различными страницами приложения. Это позволило мне создать одностраничное приложение с множеством маршрутов.

React Redux: React Redux - это библиотека для управления состоянием приложения в React. Я использовала React Redux для централизованного хранения данных и обеспечения их доступности для различных компонентов приложения. Это упростило управление состоянием и обновление пользовательского интерфейса при изменении данных.

Redux Thunk: Redux Thunk - это middleware для Redux, позволяющий выполнять асинхронные операции и диспетчеризацию действий. Я использовала Redux Thunk для обработки асинхронных запросов к серверу и управления асинхронными операциями в Redux. Это позволило мне легко управлять асинхронными операциями, такими как загрузка данных с сервера.

React Hook Form: React Hook Form - это библиотека для управления формами в React с использованием хуков. Я использовала React Hook Form для управления формами в приложении, включая валидацию и обработку ввода данных. Это сделало процесс работы с формами более простым и эффективным.

React Icons: React Icons - это библиотека иконок для использования в React-приложениях. Я использовала React Icons для добавления стильных иконок в пользовательский интерфейс приложения. Это позволило мне создать привлекательный и интуитивно понятный интерфейс.

В зависимости от требований проекта и задач, с которыми вы сталкиваетесь, эти технологии могут быть очень полезными. React предоставляет мощный инструментарий для создания интерактивных пользовательских интерфейсов, React Router обеспечивает удобную навигацию по страницам, React Redux позволяет эффективно управлять состоянием приложения, Redux Thunk обеспечивает обработку асинхронных операций, React Hook Form упрощает работу с формами, а React Icons добавляет стильные иконки. Выбор конкретных технологий зависит от требований проекта, предпочтений разработчика и особенностей задачи.


В файле App.js представлена основная структура моего приложения. Вот краткое описание каждой части:
Импорты: В этой части файла происходят импорты необходимых компонентов и стилей.
Компонент App: Это основной компонент приложения, который оборачивает все остальные компоненты.
Разметка: В разметке вы найдете следующие элементы:

<Header />: Компонент шапки, отображающий заголовок и навигационное меню.
<Routes>: Компонент маршрутизации, который определяет, какой компонент отображать в зависимости от текущего URL.
<Route>: Компонент маршрута, который определяет соответствие пути URL и отображаемого компонента.
<Footer />: Компонент подвала, отображающий информацию внизу страницы.
Маршруты: В разделе маршрутов (<Routes>) определены различные пути URL и соответствующие компоненты, которые должны быть отображены при соответствующем URL. Например, path='/' указывает, что компонент <HomePage /> должен быть отображен при пути /. Аналогично, path='/categories' указывает, что компонент <CategoriesPage /> должен быть отображен при пути /categories.

Остальные компоненты страниц: Я также импортирую и использую компоненты для отдельных страниц, такие как CategoriesPage, ProductsPage, ProductDescrPage, ShoppingCartPage и NotFoundPage. Каждый из этих компонентов отвечает за отображение соответствующей страницы при соответствующем URL.

SERVER REQUEST "project_backend"
## Ссылки API
GET
/categories/all - ссылка на все категории
/categories/1 - ссылка на продукты из первой категории
/products/all - ссылка на все продукты
/products/1 - ссылка на первый продукты
POST
/sale/send - отправка заявки на купон
/order/send - отправка заказа на сервер
URL http://localhost:3333

[Link to layout](https://www.figma.com/file/yNWvXvjZC0t8d9yBOpeEPy/Garden?node-id=4743%3A989)


# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
