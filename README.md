# The Challenge App

An app with two menus being one of them the landing page and the other a task list.

## Pre-requisites on running this project

It is recommended that you have nvm installed in your machine, so you can dynamically select wich node version you want installed. For instructions on how to install nvm, please refer to:

[NVM Repo](https://github.com/nvm-sh/nvm)

This project was made using the LTS version of node (v22.13.1), and, for that reason, it is recommended that you use that same version to run it locally. After installing nvm, you just need to perform the following command in your bash, in order to install the necessary node version:

`nvm install v22.13.1`

To install all the necessary dependencies to run the application please perform th following command on your bash:

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
After, to be able to run the application in your machine, you need to perform the following command:

```bash
npm run dev
```


