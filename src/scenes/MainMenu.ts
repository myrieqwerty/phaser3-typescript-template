import * as Phaser from 'phaser';
import GameScene from './GameScene';


export default class MainMenuScene extends Phaser.Scene
{

    constructor ()
    {
        super('main menu');
    }

    preload ()
    {
        this.load.image('logo', 'assets/phaser3-logo.png');
        this.load.image('libs', 'assets/libs.png');
        this.load.glsl('bundle', 'assets/plasma-bundle.glsl.js');
        this.load.glsl('stars', 'assets/starfields.glsl.js');
        
    }

    create ()
    {
        this.add.shader('RGB Shift Field', 0, 0, 800, 600).setOrigin(0);

        this.add.shader('Plasma', 0, 412, 800, 172).setOrigin(0);

        this.add.image(400, 300, 'libs');

        const logo = this.add.image(400, 70, 'logo');

        this.input.on('pointerdown', () => {
            this.scene.start('game')
        } )

        this.tweens.add({
            targets: logo,
            y: 350,
            duration: 1500,
            ease: 'Sine.inOut',
            yoyo: true,
            repeat: -1
        })
    }
}
