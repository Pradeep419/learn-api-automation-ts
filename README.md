# learn-api-automation-ts
Learn API Automation with typescript

1. Swagger - Open source tool where one can develop,consume,validate rest APIs
2. With swagger we can play around with APIs. We can text the get, post and other Rest calls
3. It is easy to create the new entries with POST or update with PUT
4. We can also validate negative scenarios and validate the response code. For eg. if we pass, invalid ID, we can see - 422 error - Unable to fetch the brand
5. Tech Stack 
    Typescript, Nest JS for API framework, Jest for tests, Super Test for HTTP Library
6. We need to install ts-jest to provide the typescript support for jest
7. Also need to setup config file for jest and ts to make it workable - npx ts-jest config:init is the command. It will create jest.config.js
8. It is recommended to maintain jest and @types/jest libraries at same version
9. GET - To retrieve the data from the server
10. First thing we need to do when started with code is - importing supertest into our code and then provide base url.
11. Then create describe and it blocks which represent our test cases.
12. Syntax for GET - const response = request.get(URI);
13. Quesry Parameters - Additional data we pass along with our request to filter the data from the server. For eg. Get Request?id=1. We can use these query parameters for sort and pagination as well.
14. We can include query params to request through query method - Eg. Request.query({key: value})
15. We use POST request to create or add new entries in the server. Data need to send in the body to make it secure
16. 201 is the status code for successful POST
17. Whenever working with real APIS, it is always good practice to send some random data and test the system behavior
18. We use send() after the request URI for POST requests to send the body
19. PUT method is used to update the data
20. PUT always should be done on existing resource. Otehrwise we will get 404 error.
21. Before making any POST or PUT request, get the present state of the resource through GET and then make the comparison after PUT or POST
22. PATCH - We use only in case of partial updates. Instead of sending the whole body, we send the portion of the updated info
23. DELETE methos is used to delete the existing resource on the server.
24. We can use various assertions like toContain, toHaveProperty, toEqual etc
25. Organize the test cases in such a way that create data with POST -> then fetch the data with GET -> then update the data with PUT -> finally delete the data with DELETE. In this way create a chain
26. Schema validation plays key role in validating whether the response follow proper structure or not
27. Some validations that can be performed are checking required fields, checking error messages etc
28. Remove the dependencies between indivindual specs by creating the hooks like beforeAll(), afterAll() and perform the common operations over there
29. For eg. create brand in beforeAll() and perform GET, PUT, DELETE operations in spec files
30. Hooks also remove the duplicate code
31. Use afterAll() or afterEach() hooks to cleanup the data.
32. Create a controller class, where we can add all the methods in one place and call them into our spec file wherever needed.
33. Create a config file to read the common properties like baseURL, email, password etc.
34. There are various authentication memthods available
    Bearer Token - Token based, token is passed in authorization header
    OAuth 2.0 - Grant limited access to resources without sharing credentials
    API Keys - Unique identifiers used for authentication
    Basic Auth - We send user name and password in the api request header
    JSON Web Tokens - Used for authentication and data exchange
35. We can pass the headers in the POST request using the SET method. For eg. if we have to pass the bearer token in header we can use SET('Authorization', Bearer Token) in POST request
36. We use jest-junit to generate reports











