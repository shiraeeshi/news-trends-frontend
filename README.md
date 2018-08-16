# news-trends-rest-api

The project implements the frontend for showing the news saved by ```news-trends-broadcast``` and made available through RESTful API by ```news-trends-rest-api``` project.

## Prerequisites

You need to have ```sbt``` and ```docker-compose``` installed on your machine.

## How to run

First go to the ```news-trends-broadcast``` project and issue the following command:

```
sbt assembly
```

It will create the assembly jar. After that start containers using docker-compose:

```
docker-compose up
```

The command tells docker-compose to start containers listed in ```docker-compose.yml``` file. Those are: rss listener and mongodb database.

Next go to the ```news-trends-rest-api``` project's root directory and do exactly the same:

```
sbt assembly
docker-compose up
```
It will start the container for the RESTful API.

Now that we have both ```news-trends-broadcast``` and ```news-trends-rest-api``` up and running, we can start this project's container:

```
docker-compose up
```

After that go into container's terminal:

```
docker exec -it simplereactfullstack_frontend_1 bash
```

(I'm not sure if container's name is going to be the same, you can find it using ```docker ps -a```.)

In container's terminal do the following:

```
# go inside the directory
cd /proj

# install dependencies
npm install

# build
npm run build

# start the server
npm start
```

That's it. Now you can go to address http://localhost:8181 (you can change the port in ```docker-compose.yml``` file) in browser and see the news.

NOTE: The news list isn't dynamic. If you want to update the list, just refresh the page in browser.
