# Notion Sample Integration

Sample project to understand how notion can be integrated into Monolith React and Django application.

- Login and Register with Notion is implemented using [django-allauth](https://docs.allauth.org/en/latest/index.html) package.

- [Notion query database API](https://developers.notion.com/reference/post-database-query) is integrated to fetch all pages within given database.

## Testing

Cypress is used for e2e frontend testing and Django tests pacakge is used for testing backend.

Testing is automated via GitHub Actions and code coverage report is integrated with 
[Codecov](https://about.codecov.io/codecov-free-trial/?utm_source=google&utm_medium=cpc&utm_campaign=Google_Search_Brand_USCA_SignUp_Alpha&utm_content=g&utm_term=codecov&gclid=Cj0KCQjwir2xBhC_ARIsAMTXk86Jx9SIT23on23OjgAGKc5bK5sg_tutRvciJbrOzHXIwGtRYGFmAWgaAmpcEALw_wcB&utm_id=%7B20554362434%7D&gad_source=1&gclid=Cj0KCQjwir2xBhC_ARIsAMTXk86Jx9SIT23on23OjgAGKc5bK5sg_tutRvciJbrOzHXIwGtRYGFmAWgaAmpcEALw_wcB)

To run test with Cypress enter following command in core/static/core directory:
```
yarn cy:run-e2e
```
For Django tests:
```
coverage run manage.py test core/tests
```

## Pre-requisites

1. Create [public integration in Notion](https://developers.notion.com/docs/create-a-notion-integration) to integrate with django-allauth.
1. Create [internal integration in Notion](https://developers.notion.com/docs/create-a-notion-integration) to invoke Database query API.
    - Connect this integration with your Notion database.

## Configuration
1. Update [SOCIALACCOUNT_PROVIDERS](https://docs.allauth.org/en/latest/socialaccount/provider_configuration.html) settings with client id and secret.
2. Update NOTION_READING_LIST_DB_ID with database id.
3. Update NOTION_SECRET settings with internal integration token.


## How to run this locally
1. Clone this repo.
2. Install requirements
    ```
    pip install -r requirements.dev.txt
    ```
3. Migrate models
    ```
    python manage.py migrate
    ```
4. Run
    ```
    python manage.py runserver localhost:8000
    ```