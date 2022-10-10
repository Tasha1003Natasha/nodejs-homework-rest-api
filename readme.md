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

### REST API підтримує наступні маршрути:

- `@ GET /api/contacts` повертає масив всіх контактів
- `@ GET /api/contacts/:id` якщо такий id є, повертає об'єкт контакту
- `@ POST /api/contacts` за результатом роботи повертає об'єкт з доданим id {id, name, email, phone}
- `@ DELETE /api/contacts/:id` якщо такий id є, повертає json формату {"message": "contact deleted"}
- `@ PUT /api/contacts/:id` за результатом роботи повертає оновлений об'єкт контакту
