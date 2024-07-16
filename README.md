# README: Recipes App

![image](https://github.com/user-attachments/assets/93758c2f-d5b5-4c55-879f-5b0906abba97)

## Project description

A full-stack app where you can search for or add your own recipes;

### Technologies

-   React
-   Context
-   Node.js
-   Express
-   Docker

### What I learned

- Model my own API with the same structure as the old one
- How to deploy an API
- How to work with a team using Scrum

## How to run the project

1. Clone the repository:

    ```bash
    git clone https://github.com/feduarte-dev/recipes-app-fullstack
    ```

2. Navigate to the project directory:

    ```bash
    cd your-repository
    ```

3. Initiate the containers

   ```bash
   npm run compose:up
   ```
   
4. Install dependencies inside container:

   ```bash
   npm run install:apps
   ```

5. If you want to run tests or check tests coverage:

   ```bash
   cd app/backend
   npm run test
   npm run test:coverage
   ```
