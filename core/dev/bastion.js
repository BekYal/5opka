
IDRegistry.genItemID("BastionGenerator");
Item.createArmorItem("BastionGenerator", "Bastion§7"/*+ item.durability*/, 
{name: "bbb"}, {type: "chestplate", armor: 666, durability: 1000, texture: "armor/IronBastion.png"});
Item.registerNoTargetUseFunction("BastionGenerator", function(item){ 
   Player.setArmorSlot(1, ItemID.BastionGenerator, item.count, item.data);
   Player.decreaseCarriedItem(1);
});
Item.setCategory(
ItemID.BastionGenerator, 3);
var c = new UI.StandartWindow({
  location: {
  height:61,
  wight: 74,
  },
	drawing: [{type: "background", color: 0}],
	elements: {
		"button_0":
		{type: "button", x: 669, y: 11, height: 61, wight: 74,	clicker: {
		onClick:  function(){
		  fly(true);
		  
 //spawnShellEnt(8, 1, 80, 10);
}}}}});
Armor.registerOnTakeOnListener(ItemID.BastionGenerator, function(item, slot, player) {
 
 fly(true);
});
Armor.registerOnTickListener(ItemID.BastionGenerator, function(item, slot, player) {
 var pv = Player.getVelocity();
 if( World.getThreadTime()%40 == 0){
 Game.message(pv);}
 const eP = Entity.getPosition(Player.get());

if(World.getBlockID(eP.x, eP.y + 1, eP.z) == 8){
Entity.damageEntity(3, 5);
}
Entity.addEffect(3, 50, 5, 100)
});
Armor.registerOnTakeOffListener(ItemID.BastionGenerator, function(item, slot, player) { 
fly(false);
});

