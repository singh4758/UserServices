# Requirement

* Docker install in your system
* Create a .env file
* Put all keys which is required to run this application

# ENV Keys required

* API_URL=
* BATCHES=
* SCHEDULER_INTERVAL=
* MONGO_URL=
* PORT=
* API_PREFIX=/api

  ## API_URL
  This is url for generating random data. I used a https://randomapi.com/api/< ref-id >?key=< api-key >

  ## BATCHES
  No of documents inserted at each time

  ## SCHEDULER_INTERVAL
  Interval required between each insertion of data in batches

  ## MONGO_URL
  This is mongo url to access a monogo database

  ## PORT
  This is a port on which app server running

  ## API_PREFIX
  This is use for different enviroment


# Command need to run this application

* docker build -t demo  .
* docker run -p 8000:8000 --env-file .env demo

# Testing of application

* If we set ENVIROMENT port "8000" and api-prefix "/api"

  ## Hit the api with change its limit and page
  *     http://localhost:9000/api/item/list?page:=2&limit:=10

  ## If you want to use filter "name", "age", or "email
  *     http://localhost:9000/api/item/list?page:=2&limit:=10&name="Abhishek Singh"

  ## If you want to sort. You can sort by key sort and passing you want to sort on them by default it is sort by name 
  *     http://localhost:9000/api/item/list?page:=2&limit:=10&sort=name

# To run test cases
  * npm run test:watch


