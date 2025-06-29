# 🍽️ Foodgram – Продуктовый помощник

Привет! 👋 Это **Foodgram** — дипломный проект курса *"Бэкенд-разработчик"* от Яндекс Практикума. Здесь можно делиться рецептами, добавлять их в избранное и даже сформировать список покупок перед походом в магазин 🛒.

Всё реализовано на **Django** и **Django REST Framework**, а интерфейс взаимодействия с данными — через API. Документация к нему доступна через **Redoc**.

---

## 🚀 Основные фишки

✨ Современный стек и автоматизация:

* Проект полностью упакован в **Docker**-контейнеры;
* Использованы образы `foodgram_frontend` и `foodgram_backend` (опубликованы на DockerHub);
* Настроен **GitHub Actions workflow** для автоматического деплоя на сервер + уведомления в **Telegram**;
* API-документация доступна по адресу: `http://localhost/api/docs/redoc.html`;

Ранее проект был развёрнут по адресу: [http://51.250.25.224/recipes](http://51.250.25.224/recipes)

---

## 🛠️ Как запустить локально

Следуйте этим шагам — всё просто:

1. Убедитесь, что у вас установлены `docker` и `docker-compose`;

2. В корне папки `infra/` создайте файл `.env` по примеру `.env.example`;

3. Запустите сборку и поднятие контейнеров:

   ```bash
   docker-compose up -d --build
   ```

4. Примените миграции:

   ```bash
   docker-compose exec backend python manage.py migrate
   ```

5. Создайте суперпользователя:

   ```bash
   docker-compose exec backend python manage.py createsuperuser
   ```

6. Соберите статику:

   ```bash
   docker-compose exec backend python manage.py collectstatic --no-input
   ```

7. Загрузите список ингредиентов:

   ```bash
   docker-compose exec backend python manage.py load_ingredients
   ```

8. 👩‍🍳 Не забудьте зайти в админку и вручную создать несколько тегов для рецептов — иначе фронт не сможет их отобразить корректно.

---

## 📚 Документация API

* После запуска проекта перейдите по адресу:
  [http://localhost/api/docs/redoc.html](http://localhost/api/docs/redoc.html)
  Там будет удобно оформленная Redoc-документация ко всем доступным эндпоинтам.

---

## 👩‍💻 Автор проекта

**Амина Газизова** – [@fliwoll](https://github.com/fliwoll) 💫
