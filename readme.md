# SQL Command Line

### <a href="https://sqlwebapp.netlify.app/" style="color: orange">Link to Website &#8594;</a>

<br></br>

## Challenge Statement

Create, design and implement a web-based application capable of running SQL queries and displaying the results of said query. The application must include a space which accepts SQL queries in the form of user inputs, then runs the given query, and displays the result within the application.

### <a href="https://atlanhq.notion.site/Task-Atlan-Frontend-Engineer-80ca8e35cc694e31bfd6b415d328269c" style="color: orange">Complete Problem Statement &#8594;</a>

<br></br>

## Solution

-   The web-application that support limited number of syntactically correct sql queries and displays their respective outputs.
-   The application uses static data to diplay results.
-   The application also supports for a **Clear Console** button to clear the output area.

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

## Future Scope

-   To add query resolution for advanced queries such as **GROUP BY, JOINS and Nested Queries**

-   To add functional backend instead of resloving queries in the frontend

-   To add a **history** button for the user to take a look at the query and output history.

-   Implement server side-pagination with datagrid for viewing large tables.
