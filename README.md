# math-game
A realtime browser-based math game for up to 10 concurrent users

# Table of Contents
1. [Introduction](#introduction)
2. [Application structure](#appstruct)
3. [Development setup](#devsetup)
    1. [Version control](#vercontr)
    2. [Source code editor](#editor)
    3. [Other resources](#other)

# Introduction <a name="introduction"></a>

This is a realtime browser-based math game for up to 10 concurrent users. The game is structured as a continuous series of rounds, where all connected players compete to submit the correct answer first. The number of rounds is not limited, players can connect at any time and start competing.

At the beginning of each round a simple math challenge is sent to all connected players, consisting of a basic operation (+ - * /), two operands in range 1..10 and a potential answer. All players are presented with the challenge and have to answer whether the proposed answer is correct using a simple yes/no choice.

The first player to submit a correct answer gets 1 point for the round and completes the round. All incorrect answers subtract a point from the players' score. Correct late answers do not affect the score. After completing the round all remaining players are informed that the round is over. A new round starts in 5 seconds after the end of last one.

# Application structure <a name="appstruct"></a>

The application follows a typical client-server model, with multiple clients and one server:

1. The client, built using Angular
2. The server, built with Node.js 

They will communicate using websockets, using the Socket.IO library.

# Development setup <a name="devsetup"></a>
## Version control <a name="vercontr"></a>

* [Git](https://git-scm.com/)
* [TortoiseGit](https://tortoisegit.org/)

## Source code editor <a name="editor"></a>

* [Visual Studio Code](https://code.visualstudio.com/)
* [TortoiseGit](https://tortoisegit.org/)

## Other resources <a name="other"></a>

* [Angular, version 6](https://angular.io/)
* [Node.js](https://nodejs.org/)
* [Socket.IO](https://socket.io/)