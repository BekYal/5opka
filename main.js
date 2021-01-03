/*
BUILD INFO:
  dir: dev
  target: main.js
  files: 1
*/



// file: bastion.js

IDRegistry.genItemID("BastionGenerator");

Item.createArmorItem("BastionGenerator", "Bastion", {name: "bbb"}, {type: "chestplate", armor: 666, durability: 149999999, texture: "armor/jj.png"});

var fly_gui = new UI.StandartWindow({
drawing: [],
elements: {
"button_0": {type: "button", x: 794, y: 40, scale: 3.2, bitmap: "button_default", bitmap2: "button_default2", clicker: Player.setFlyingEnabled(true)},
	}
});
Armor.registerOnHurtListener(ItemID.BastionGenerator, function(item, slot, player, value, type, attacker,
bool1, bool2) {
   
      Entity.setHealth(player, 20);

});
Armor.registerOnTakeOnListener(ItemID.BastionGenerator, function(item, slot, player) {
fly_gui.open()
Entity.setSkin(3, "skins/bastion.png");


if(Player.getFlyingEnabled()
){
   

  Callback.addCallback('EntityHurt', function (attacker, victim, damageValue, damageType, someBool1, someBool2) {
      if (victim == -4294967295){
        if (damageType == 5) {
          Game.prevent()
        }
      }
    }
    )

}
});

Armor.registerOnTickListener(ItemID.BastionGenerator, function(item, slot, player) {
   if(
Player.getHealth(19)
){
   Player.setHealth(20);
}
});




