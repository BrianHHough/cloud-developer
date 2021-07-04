# Udagram Image Filtering Microservice

Udagram is a simple cloud application developed alongside the Udacity Cloud Engineering Nanodegree. It allows users to register and log into a web client, post photos to the feed, and process photos using an image filtering microservice.

The project is split into three parts:

1. [The Simple Frontend](https://github.com/udacity/cloud-developer/tree/master/course-02/exercises/udacity-c2-frontend)
   A basic Ionic client web application which consumes the RestAPI Backend. [Covered in the course]
2. [The RestAPI Backend](https://github.com/udacity/cloud-developer/tree/master/course-02/exercises/udacity-c2-restapi), a Node-Express server which can be deployed to a cloud service. [Covered in the course]
3. [The Image Filtering Microservice](https://github.com/udacity/cloud-developer/tree/master/course-02/project/image-filter-starter-code), the final project for the course. It is a Node-Express application which runs a simple script to process images. [Your assignment]

# Image

Link: https://d2ycltig8jwwee.cloudfront.net/reviews/1188/fullwidth.9ef0470c.jpg
![InterstellarImage](https://d2ycltig8jwwee.cloudfront.net/reviews/1188/fullwidth.9ef0470c.jpg)

## Tasks

### Setup Node Environment

You'll need to create a new node server. Open a new terminal within the project directory and run:

1. Initialize a new project: `npm i`
2. run the development server with `npm run dev`

### Create a new endpoint in the server.ts file

The starter code has a task for you to complete an endpoint in `./src/server.ts` which uses query parameter to download an image from a public URL, filter the image, and return the result.

We've included a few helper functions to handle some of these concepts and we're importing it for you at the top of the `./src/server.ts` file.

```typescript
import { filterImageFromURL, deleteLocalFiles } from "./util/util";
```

### Deploying your system

Follow the process described in the course to `eb init` a new application and `eb create` a new environment to deploy your image-filter service! Don't forget you can use `eb deploy` to push changes.

#### Initialize Elastic Beanstalk

```bash
## Change directory for project
cd image-filter-starter-code

## Initialize Elastic Beanstalk
eb init


Select a default region: `1) us-east-1`

Select an applicaiton to use: `2) [ Create new Application ]`

Enter Application Name: `image-filter-starter-code`

Appears you are using Node.js. Correct? `Y`

Select a platform branch: `3) Node.js running on 64bit Amazon Linux`

Set up SSH for instance? `Y`

Select keypair: `Use the one from udagram`

```

#### Create Elastic Beanstalk Instance

```bash
Enter environment name: `image-filter-starter-code-dev`

Enter DNS CNAME prefix: `image-filter-starter-code-dev22222`

Select a load balancer type
1) classic
2) application
3) network

`2) application`

Would you like to enable Spot Fleet requests for this environment?: `n`

```

#### Build & Elastic Beanstalk instance

```bash
## Build the zip file
npm run build
```

**Make sure to edit the `./.elasticbeanstalk/config.yml` file to add the deploy archive script**

```yaml
deploy:
  artifact: ./www/Archive.zip
```

## Deploy to Elastic Beanstalk

```bash
eb deploy
```

## Stand Out (Optional)

### Refactor the course RESTapi

If you're feeling up to it, refactor the course RESTapi to make a request to your newly provisioned image server.

### Authentication

Prevent requests without valid authentication headers.

> !!NOTE if you choose to submit this, make sure to add the token to the postman collection and export the postman collection file to your submission so we can review!

### Custom Domain Name

Add your own domain name and have it point to the running services (try adding a subdomain name to point to the processing server)

> !NOTE: Domain names are not included in AWS’ free tier and will incur a cost.
