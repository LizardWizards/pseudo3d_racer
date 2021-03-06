
// -- user code here --

/* --- start generated code --- */

// Generated by  1.5.3 (Phaser v2.6.2)


/**
 * MyTree
 * @param {Phaser.Game} aGame A reference to the currently running game.
 * @param {Number} aX The x coordinate (in world space) to position the Sprite at.
 * @param {Number} aY The y coordinate (in world space) to position the Sprite at.
 * @param {any} aKey This is the image or texture used by the Sprite during rendering. It can be a string which is a reference to the Cache entry, or an instance of a RenderTexture or PIXI.Texture.
 * @param {any} aFrame If this Sprite is using part of a sprite sheet or texture atlas you can specify the exact frame to use by giving a string or numeric index.
 */
function MyTree(aGame, aX, aY, aKey, aFrame) {
	Phaser.Sprite.call(this, aGame, aX, aY, aKey || 'trees-png-photo-2', aFrame == undefined || aFrame == null? null : aFrame);
	this.scale.setTo(0.17749999352176957, 0.16168717409787275);
	
}

/** @type Phaser.Sprite */
var MyTree_proto = Object.create(Phaser.Sprite.prototype);
MyTree.prototype = MyTree_proto;
MyTree.prototype.constructor = MyTree;

/* --- end generated code --- */
// -- user code here --
