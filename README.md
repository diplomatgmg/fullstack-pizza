<div align="center">

  [![Maintainability](https://api.codeclimate.com/v1/badges/c2743f1ac52be57817ae/maintainability)](https://codeclimate.com/github/diplomatgmg/fullstack-pizza/maintainability)

</div>

![Preview](https://github.com/diplomatgmg/fullstack-pizza/blob/main/preview.png?raw=true)


# Pet-проект по доставке пиццы

## Технологии

### **Frontend:**

- React
  - React-Redux
  - RTK-Query
  - React Router DOM
  - React Hook Form
  - ReactJS Popup
  - React Toastify
  - React Loading Skeleton
- TypeScript
- Sass (Styled components)
- Lodash
- Eslint, Prettier
- Vite

### **Backend:**
- Django
  - Django REST Framework
  - Django REST Framework Simple JWT
  - Django Filters
  - Django Cors Headers
  - Django Debug Toolbar
- PostgreSQL
- Formatter Black

## Локальное развертывание
> 1. Установите Docker:
> ```console
> https://www.docker.com/
> ```
>
> 2. Разверните проект:
> ```console
> $ docker-compose up
> ```


## Доступные учетные записи:
> email: `user@example.com`
> 
> password: `secretpassword`


## Endpoints:
* ### Frontend (localhost:3000)
> `/` - Главная страница  
> `register/` - Страница регистрации  
> `login/` - Страница авторизации


* ### Backend (localhost:8000)
> `admin/` - Админ-панель  
> `api/pizza/` - Список пицц  
> `api/categories/` - Список категорий  
> `api/register/` - Регистрация пользователя по Email+Password  
> `api/token/` - Получение jwt-токена по Email+Password  
> `api/token/refresh/` - Обновление access токена  
> `api/health-check` - Проверка работоспособности бекенда  
