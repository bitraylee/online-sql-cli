# SQL Command Line

### <a href="https://sqlwebapp.netlify.app/" style="color: orange">Link to Website &#8594;</a>

<br></br>

## Challenge Statement

Create, design and implement a web-based application capable of running SQL queries and displaying the results of said query. The application must include a space which accepts SQL queries in the form of user inputs, then runs the given query, and displays the result within the application.

### <a href="https://atlanhq.notion.site/Task-Atlan-Frontend-Engineer-80ca8e35cc694e31bfd6b415d328269c" style="color: orange">Complete Problem Statement &#8594;</a>

<br></br>

# Solution

## Overview

-   A web-application that supports limited number of syntactically correct SQL queries and displays their respective outputs.
-   The application uses static data to display results.
-   The application also supports for a **Clear Console** button to clear the output area.
-   The application is built on **ReactJS**
-   **Packages Installed** <br>
styled-components<br>
@mui/icons-material<br>
@mui/material<br>



## Supported Queries

-   SELECT \* FROM [table name]
-   SELECT COUNT(\*) FROM [table name]
-   SELECT [column names] FROM [table name]

### <p style="">Queries with dummy output</p>

-   UPDATE [table name]
-   CREATE [table name]
-   DELETE [table name]

## Available Tables

-   **stockData**
-   **softDrinks**
-   **currentTables** _Contains the table names of the available tables_

## Demonstration


https://user-images.githubusercontent.com/62213450/176115667-37d98938-f823-4e40-9e6f-bff5760fa4f1.mov

<!---[![IMAGE_ALT](https://img.youtube.com/vi/mS1xHup75xY/maxresdefault.jpg)](https://youtu.be/mS1xHup75xY)--->

## Page Load Time

![image](https://user-images.githubusercontent.com/62213450/176116468-3ca64ff8-fbab-427a-82b3-e4005996e50e.png)


## Optimizations

-   Updates the component only when submit is triggered and hence reducing number of redundant renders.

-   Reduced updates in the query state by using a pseudo state.

-   createTable.jsx component creates a React Table element from json array.




## Future Scope

-   To add query resolution for advanced queries such as **GROUP BY, JOINS and Nested Queries**.

-   To add a functional backend with database implementation instead of resloving queries in the frontend..

-   To add a **history** button for the user to take a look at the query and output history.

-   Implement server side-pagination with datagrid for viewing large tables.
