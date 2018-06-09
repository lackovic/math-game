# math-game

A realtime browser-based math game for up to 10 concurrent users

## Table of Contents

1. [Introduction](#introduction)
2. [Architecture](#architecture)
3. [Development setup](#development-setup)
    1. [Version control](#version-control)
    2. [Source code editor](#source-code-editor)
    3. [Infrastructure resources](#infrastructure-resources)
4. [Learning material](#learning-material)

## Introduction

This is a realtime browser-based math game for up to 10 concurrent users. The game is structured as a continuous series of rounds, where all connected players compete to submit the correct answer first. The number of rounds is not limited, players can connect at any time and start competing.

At the beginning of each round a simple math challenge is sent to all connected players, consisting of a basic operation (+ - * /), two operands in range 1..10 and a potential answer. All players are presented with the challenge and have to answer whether the proposed answer is correct using a simple yes/no choice.

The first player to submit a correct answer gets 1 point for the round and completes the round. All incorrect answers subtract a point from the players' score. Correct late answers do not affect the score. After completing the round all remaining players are informed that the round is over. A new round starts in 5 seconds after the end of last one.

## Architecture

The application follows a typical client-server model, with multiple clients and one server.

The client side is built with Angular and the server side in Node.js.

They communicate with each other though websockets, using the Socket.IO library.

## Development setup

### Version control

* [Git](https://git-scm.com/)
* [TortoiseGit](https://tortoisegit.org/)

### Source code editor

* [Visual Studio Code](https://code.visualstudio.com/)
  * Extensions:
    1. [Node.js Extension Pack](https://marketplace.visualstudio.com/items?itemName=waderyan.nodejs-extension-pack)
    1. [Angular Extension Pack](https://marketplace.visualstudio.com/items?itemName=doggy8088.angular-extension-pack)
    1. [markdownlint](https://marketplace.visualstudio.com/items?itemName=DavidAnson.vscode-markdownlint)

### Infrastructure resources

* [Angular, version 6](https://angular.io/)
* [Angular CLI](https://cli.angular.io/)
* [Angular ng-bootstrap](https://ng-bootstrap.github.io/)
* [Node.js, version 10.4.0](https://nodejs.org/)
* [Socket.IO](https://socket.io/)

## Learning material

* [Building Real-time Chess with Socket.io](http://dwcares.com/2015/10/21/realchess/)
* [Real Time Apps with TypeScript: Integrating Web Sockets, Node & Angular](https://medium.com/dailyjs/real-time-apps-with-typescript-integrating-web-sockets-node-angular-e2b57cbd1ec1)
* [Node.js for .NET Developers](https://app.pluralsight.com/library/courses/nodejs-dotnet-developers/)
* [HTTP and Websockets: Understanding the capabilities of today’s web communication technologies](https://medium.com/platform-engineer/web-api-design-35df8167460)
* [REST vs WebSocket Comparison and Benchmarks](http://blog.arungupta.me/rest-vs-websocket-comparison-benchmarks/)
* [Markdown Cheatsheet](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet)