import { GameServer } from './game-server';
import { PlayersManager } from './players-manager';
import { GameEngine } from './game-engine';

const playersManager = new PlayersManager();
const gameEngine = new GameEngine();
const gameServer = new GameServer();

playersManager.gameEngine = gameEngine;
playersManager.gameServer = gameServer;

gameEngine.gameServer = gameServer;
gameEngine.playersManager = playersManager;

gameServer.gameEngine = gameEngine;
gameServer.playersManager = playersManager;

const mathGameServerApp = gameServer.getApp();

export { mathGameServerApp };
