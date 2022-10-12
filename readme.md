## GoIT Node.js Course Template Homework

### View the website at: http://localhost:3000

### Команди:

- `npm start` &mdash; старт сервера в режимі production
- `npm run start:dev` &mdash; старт сервера в режимі розробки (development)
- `npm run lint` &mdash; запустити виконання перевірки коду з eslint, необхідно виконувати перед кожним PR та виправляти всі помилки лінтера
- `npm lint:fix` &mdash; та ж перевірка лінтера, але з автоматичними виправленнями простих помилок

### пакети у проекті:

- `express` - веб-фреймворк для програм Node.js
- `morgan` - проміжний компонент для протоколювання запитів на сервер
- `cors` - модуль, який робить безпечні перехресні запити та передачі даних між web-браузерами та web-серверами.
- `joi` - для валідації прийнятих даних
- `bcryptjs` - для засолювання паролів
- `multer` - можливість завантаження аватарки користувача

### REST API підтримує наступні маршрути:

- `@ GET /api/contacts` повертає масив всіх контактів
- `@ GET /api/contacts/:id` якщо такий id є, повертає об'єкт контакту
- `@ POST /api/contacts` за результатом роботи повертає об'єкт з доданим id {id, name, email, phone}
- `@ DELETE /api/contacts/:id` якщо такий id є, повертає json формату {"message": "contact deleted"}
- `@ PUT /api/contacts/:id` за результатом роботи повертає оновлений об'єкт контакту
- `@ PATCH / api / contacts /: contactId / favorite` за результатом роботи повертає оновлений об'єкт контакту updateStatusContact (contactId, body)
- `@ PATCH / api /users/avatars` - можливість поновлення аватарки

### Логіка аутентифікації / авторизації користувача(users):

- `@ POST / api / users/register` - pеєстрація користувача
- `@ POST / api / users/login` - логін
- `@ GET / api / users/logout` - логаут

### Додаткові можливості:

- `@ GET / api /users/current` - поточний користувач - отримати дані юзера по токені
- `GET /contacts?favorite=true` - фільтрація контактів по полю обраного favorite
- `GET /contacts?page=1&limit=20` - пагінація для колекції контактів
