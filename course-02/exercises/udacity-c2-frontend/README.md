# Udagram Simple Frontend

Udagram is a simple cloud application developed along side the Udacity Cloud Engineering Nanodegree. It allows users to register and log into a web client, post photos to the feed, and process photos using an image filtering microservice.

The project is split into three parts:

1. [The Simple Frontend](https://github.com/udacity/cloud-developer/tree/master/course-02/exercises/udacity-c2-frontend)
   A basic Ionic client web application which consumes the RestAPI Backend.
2. [The RestAPI Backend](https://github.com/udacity/cloud-developer/tree/master/course-02/exercises/udacity-c2-restapi), a Node-Express server which can be deployed to a cloud service.
3. [The Image Filtering Microservice](https://github.com/udacity/cloud-developer/tree/master/course-02/project/image-filter-starter-code), the final project for the course. It is a Node-Express application which runs a simple script to process images.

---

## ✅ Getting Setup

> _tip_: this frontend is designed to work with [The RestAPI Backend](https://github.com/grutt/udacity-c2-restapi). It is recommended you stand up the backend first, test using Postman, and then the frontend should integrate.

### ✅ Installing Node and NPM

This project depends on Nodejs and Node Package Manager (NPM). Before continuing, you must download and install Node (NPM is included) from [https://nodejs.com/en/download](https://nodejs.org/en/download/).

### ✅ Installing Ionic Cli

The Ionic Command Line Interface is required to serve and build the frontend. Instructions for installing the CLI can be found in the [Ionic Framework Docs](https://ionicframework.com/docs/installation/cli).

### ✅ Installing project dependencies

This project uses NPM to manage software dependencies. NPM Relies on the package.json file located in the root of this repository. After cloning, open your terminal and run:

```bash
npm install
```

> _tip_: **npm i** is shorthand for **npm install**

### ✅ Configure The Backend Endpoint

Ionic uses enviornment files located in `./src/enviornments/enviornment.*.ts` to load configuration variables at runtime. By default `environment.ts` is used for development and `enviornment.prod.ts` is used for produciton. The `apiHost` variable should be set to your server url either locally or in the cloud.

---

### ✅ Running the Development Server

Ionic CLI provides an easy to use development server to run and autoreload the frontend. This allows you to make quick changes and see them in real time in your browser. To run the development server, open terminal and run:

```bash
ionic serve
```

### ✅ Building the Static Frontend Files

Ionic CLI can build the frontend into static HTML/CSS/JavaScript files. These files can be uploaded to a host to be consumed by users on the web. Build artifacts are located in `./www`. To build from source, open terminal and run:

```bash
ionic build
```

#### Fixing the Front-End

[Solution sourced from Udacity Forum[(https://knowledge.udacity.com/questions/458667)]: The use of "Split Pane" with a newer version of Ionic is causing the issue. The definition of the split pane element can be found in src/app/app.component.html. Instead of using the "main" attribute inside the ion-split-pane element, one has to define an attribute "contentId" and assign a value to it (e.g. contentId="main").

The element containing the side menu, in our case the ion-menu element, has also to define the same attribute called "contentId" with the same value as for the ion-split-pane (contentId="main").

The element containing the main content, in our case the ion-content element, has to contain an id attribute which stores the already defined contentId as a value (id="main"). Further informations on the usage of the split pane can be found under the following link: [Ionic Split Pane Documentation](https://ionicframework.com/docs/api/split-pane)

```javascript
<ion-app>
    <ion-split-pane when="false" contentId="main">
        <ion-menu contentId="main">
            <ion-header>
                <ion-toolbar>
                    <ion-title>Menu</ion-title>
                </ion-toolbar>
            </ion-header>
            <ion-content>
                <ion-list>
                    <ion-menu-toggle
                        auto-hide="false"
                        *ngFor="let p of appPages"
                    >
                        <ion-item
                            [routerDirection]="'root'"
                            [routerLink]="[p.url]"
                        >
                            <ion-icon slot="start" [name]="p.icon"></ion-icon>
                            <ion-label>
                                {{ p.title }}
                            </ion-label>
                        </ion-item>
                    </ion-menu-toggle>
                </ion-list>
            </ion-content>
        </ion-menu>
        <ion-content id="main">
            <app-menubar></app-menubar>
            <ion-router-outlet style="margin-top: 56px"></ion-router-outlet>
        </ion-content>
    </ion-split-pane>
</ion-app>
```

## @TODO

2. Tasks
   i. Setup
   a. Clone, set up protected branches (dev, staging, master)
   b. NPM, Ionic CLI
   c. run tests (npm test), identify broken function, fix the function
   d. write tests for form validation and re-run tests
