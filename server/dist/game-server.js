"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var http_1 = require("http");
var express = require("express");
var socketIo = require("socket.io");
var GameServer = /** @class */ (function () {
    // private readonly roundSeconds: number = 10;
    // private readonly waitSeconds: number = 5;
    // private currentQuestion: string;
    // private currentAnswer: boolean;
    function GameServer() {
        this.initServer();
        this.startServer();
        this.get();
    }
    GameServer.prototype.initServer = function () {
        this.app = express();
        this.port = process.env.PORT || GameServer.PORT;
        this.server = http_1.createServer(this.app);
        this.io = socketIo(this.server);
    };
    GameServer.prototype.startServer = function () {
        var _this = this;
        this.server.listen(this.port, function () {
            console.log('Running math game server on port %s', _this.port);
        });
    };
    GameServer.prototype.get = function () {
        this.app.get('/', function (req, res) {
            res.send('Math game server is up and running!');
        });
    };
    GameServer.prototype.listen = function () {
        var _this = this;
        this.io.on('connect', function (socket) {
            console.log('Connected client on port %s.', _this.port);
            socket.on('answer', function (a) {
                console.log('[server](answer): %s', JSON.stringify(a));
                _this.io.emit('answer', a);
            });
            socket.on('disconnect', function () {
                console.log('Client disconnected');
            });
        });
    };
    GameServer.prototype.getApp = function () {
        return this.app;
    };
    GameServer.PORT = 4300;
    return GameServer;
}());
exports.GameServer = GameServer;
