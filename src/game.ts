import {Game, AUTO, Types} from 'phaser';
import MainMenuScene from './scenes/MainMenu';
import GameScene from './scenes/GameScene';


const config : Types.Core.GameConfig = {
    type: AUTO,
    backgroundColor: '#000000',
    width: 800,
    height: 600,
    physics: {
        default: 'arcade',
        arcade: {
            debug: true
        }
    },
    scene: [MainMenuScene, GameScene],
    pixelArt: true
};

const game = new Game(config);
