import * as Phaser from 'phaser';


export default class GameScene extends Phaser.Scene
{
    player: Phaser.Types.Physics.Arcade.SpriteWithDynamicBody
    leftKey
    rightKey
    
    constructor ()
    {
        super('game');
    }

    preload ()
    {
        this.load.image('ship', 'assets/player.png');
        
        
    }

    create ()
    {

        this.player = this.physics.add.sprite(200,150,'ship')
        
        this.leftKey = this.input.keyboard.addKey('A')
        this.rightKey = this.input.keyboard.addKey('D')
       
    }

    update(time: number, delta: number): void {
        if (this.leftKey.isDown) {
            this.player.setVelocityX(-100)
        } else if (this.rightKey.isDown) {
            this.player.setVelocityX(+100)
        } else {
            this.player.setVelocity(0)
        }
    }
}
