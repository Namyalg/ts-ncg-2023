# ts-ncg-2023

This is a full-stack web application built with React and Java.

### Backend

The backend uses Spring Boot along with the in-memory database H2.

**Steps to run the application**
1. (Assuming the requirements for Spring Boot are installed), either open the `backend` folder in IntelliJ/Eclipse and run the file `WorldBankViewApplication.java` or run the command `mvn package` from the root of the project
2. The application will run on port `9090`
3. The `H2` UI will be available at the route `/h2-ui`

The following routes are exposed : 

| Method  | Route | Description |
| ------- | ------ | ----------- |
| `GET` | `/view`  | Return all views |
| `GET` | `/view/{id}`  | Return the view with id `id` if it exists |
| `PUT` | `/view/{id}`  | Update the view with `id` if it exists |
| `POST` | `/view`  | Add a new view to the table |
| `DELETE` | `/view/{id}`  | Delete the view with id `id` if it exists |

### Frontend

**Steps to run the application**
1. Go into the `frontend` directory and run `npm install`
2. Once the dependencies are installed, run `npm start` to start the development server on port `3000`

![image](https://github.com/Namyalg/ts-ncg-2023/assets/53875297/c5bedc45-9805-454d-9df5-7c2d0008fac9)

The functionality available at the frontend are:
- Show all the countries and indicators; store the values in localStorage
- Query the backend and show, delete and modify the views
- Query data based on the country, indicator, date-range and create a new view (plotting is not performed)



