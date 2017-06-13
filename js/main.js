var game = new Phaser.Game(400,500,Phaser.CANVAS,'game',{
	create:create,
	update:update
})
var sprite;
function create(){
	sprite = game.add.sprite(game.width/2,game.height/2);
	var graphics = game.add.graphics(0,0);
	sprite.addChild(graphics);
	graphics.lineStyle(0,0xFF9718);
	graphics.beginFill(0xFF9345);
	graphics.drawCircle(25,25,50);
	graphics.endFill();
	sprite.anchor.setTo(0.5,0.5);
	
	/** 开启物理引擎 */
	game.physics.startSystem(Phaser.Physics.ARCADE);
	game.physics.arcade.enable(sprite);
}
function update(){
	if (game.physics.arcade.distanceToPointer(sprite,game.input.activePointer)>10){
		game.physics.arcade.moveToPointer(sprite,350)
	}else{
		sprite.body.velocity.set(0);
	}
}
