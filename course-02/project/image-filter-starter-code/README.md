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

# Tasks

## ✅ Setup Node Environment

You'll need to create a new node server. Open a new terminal within the project directory and run:

1. Initialize a new project: `npm i`
2. run the development server with `npm run dev`

### Confirmation that the server runs locally via the browser

![](https://github.com/BrianHHough/cloud-developer/blob/6b45a9415f543dc98e5fa972850f977c0e4eda77/course-02/project/image-filter-starter-code/image/Local-Server-Filtered-Image-Web.png)

### Confirmation that the server runs locally via Postman

![](https://github.com/BrianHHough/cloud-developer/blob/6b45a9415f543dc98e5fa972850f977c0e4eda77/course-02/project/image-filter-starter-code/image/Local-Server-Filtered-Image-Postman.png)

## ✅ Create a new endpoint in the server.ts file

The starter code has a task for you to complete an endpoint in `./src/server.ts` which uses query parameter to download an image from a public URL, filter the image, and return the result.

We've included a few helper functions to handle some of these concepts and we're importing it for you at the top of the `./src/server.ts` file.

```typescript
import { filterImageFromURL, deleteLocalFiles } from "./util/util";
```

### ✅ Deploying your system

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

⚠️ This step is SO important because you will get a warning image in the AWS Elastic Beanstalk console because you haven't uploaded any code file to it...and it's wondering what exactly to deploy, so you'll get a Severe Red Health status ⚠️

```yaml
deploy:
  artifact: ./www/Archive.zip
```

## ✅ Deploy to Elastic Beanstalk

```bash
eb deploy
```

### AWS Console with a healthy status check

- Link to endpoint URL for a running elastic beanstalk deployment (EB_URL): http://image-filter-starter-code-dev22222.us-east-1.elasticbeanstalk.com/

![InterstellarImage](https://github.com/BrianHHough/cloud-developer/blob/6b45a9415f543dc98e5fa972850f977c0e4eda77/course-02/project/image-filter-starter-code/image/EBS-Deployed-AWS-OK.png)

### Image Filter Works from the Elastic Beanstalk Instance

![](https://github.com/BrianHHough/cloud-developer/blob/f-auth/course-02/project/image-filter-starter-code/image/EBS-Filtered-Image-Web.png)

### Image Filter Works from the Elastic Beanstalk Instance

This is what the site looks like without putting a link in the URL
![](https://github.com/BrianHHough/cloud-developer/blob/f-auth/course-02/project/image-filter-starter-code/image/EBS-Filtered-Image-Web-PreLink.png)

## Stand Out (Optional)

### Refactor the course RESTapi

If you're feeling up to it, refactor the course RESTapi to make a request to your newly provisioned image server.

### Authentication

Prevent requests without valid authentication headers.

> !!NOTE if you choose to submit this, make sure to add the token to the postman collection and export the postman collection file to your submission so we can review!

### Custom Domain Name

Add your own domain name and have it point to the running services (try adding a subdomain name to point to the processing server)

> !NOTE: Domain names are not included in AWS’ free tier and will incur a cost.
