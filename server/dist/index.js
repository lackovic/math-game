"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var game_server_1 = require("./game-server");
var app = new game_server_1.GameServer().getApp();
exports.app = app;
