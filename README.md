# The Challenge App

An app with two menus being one of them the landing page and the other a task list.

## Pre-requisites on running this project

It is recommended that you have nvm installed in your machine, so you can dynamically select wich node version you want installed. For instructions on how to install nvm, please refer to:

[NVM Repo](https://github.com/nvm-sh/nvm)

This project was made using the LTS version of node (v22.13.1), and, for that reason, it is recommended that you use that same version to run it locally. After installing nvm, you just need to perform the following command in your bash, in order to install the necessary node version:

`nvm install v22.13.1`

As a pre-requisite for running this application, displaying all it's features, you need to clone a "Task API" app that is available at:

[https://github.com/MarceloFonseca/tasks-api/](https://github.com/MarceloFonseca/tasks-api/)

and then follow the instructions in the project's README.md to be able to install it and run it in a console.
By default, this will launch an API endpoint running at

[http://localhost:3008/api/tasks/](http://localhost:3008/api/tasks/)

It will be creating tasks in the background while you proceed with the configuration of The Challenge App.

Open a new console, while leaving the other open and, to install all the necessary dependencies to run the application, please perform th following command on your bash:

```bash
npm install
```

If you wish to verify if the application is respecting the lint rules, you can do so by performing the following command in your bash:

```bash
nvm run lint
```

If you wish to run the application's test you can do so by executing the following command in your bash:

```bash
npm run tests
```

Now we are ready to run The Challenge App in your machine, by using the following command:

```bash
npm run dev
```

this will run the app on a given port, and you can then access the app by accessing a URL similar to the following in your browser, where PORT_NUMBER is the port on which the app is running:

[http://localhost:<PORT_NUMBER>](http://localhost:<PORT_NUMBER>)

Have fun!


