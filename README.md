# math-game

A realtime browser-based math game for up to 10 concurrent users.

[![StackShare](https://img.shields.io/badge/tech-stack-0690fa.svg?style=flat)](https://stackshare.io/lackovic/math-game)

## Table of Contents

1. [Introduction](#introduction)
2. [Architecture](#architecture)
3. [How to install](#how-to-install)
4. [How to run](#how-to-run)
5. [How to test](#how-to-test)
6. [Live demo](#live-demo)

## Introduction

This is a realtime browser-based math game for up to 10 concurrent users. The game is structured as a continuous series of rounds, where all connected players compete to submit the correct answer first. The number of rounds is not limited, players can connect at any time and start competing.

At the beginning of each round a simple math challenge is sent to all connected players, consisting of a basic operation (+ - * /), two operands in range 1..10 and a potential answer. All players are presented with the challenge and have to answer whether the proposed answer is correct using a simple yes/no choice.

The first player to submit a correct answer gets 1 point for the round and completes the round. All incorrect answers subtract a point from the players' score. Correct late answers do not affect the score. After completing the round all remaining players are informed that the round is over. A new round starts in 5 seconds after the end of last one.

## Architecture

The application follows a typical client-server model, with multiple clients and one server.

Both client and server are written in [Typescript](https://www.typescriptlang.org/).

* The client side is built with [Angular 6](https://angular.io/), using [Bootstrap 4](https://getbootstrap.com/) for layout and styling.
* The server side with [Express 4](https://expressjs.com/)/[Node.js](https://nodejs.org/en/).
* Client/server communication is handled with websockets, using [Socket.IO 2](https://socket.io/).

## How to install

```
cd client
npm install
cd ../server
npm install
gulp build
```

## How to run

In a command prompt, run:
```
cd server
node dist/index.js
```

In another command prompt, run:
```
cd client
ng serve --open
```

## How to test

Due to a known [bug of the new Angular CLI](https://github.com/angular/angular-cli/issues/7296) tests must be executed with the `--source-map=false` option:
```
cd client
ng test --source-map=false
```

## Live Demo

The client is hosted on [Google Firebase](https://firebase.google.com/) and the server on [Heroku](https://www.heroku.com/).

* [MathGame](https://marco-math-game.firebaseapp.com/)
