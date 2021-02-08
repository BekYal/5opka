//fly без урона
function fly(bool){
   if(bool == true){
     Player.setFlyingEnabled(true) 
     
     if(Player.getFlyingEnabled(true)){
  Callback.addCallback('EntityHurt', function (attacker, victim, damageValue, damageType, someBool1, someBool2) {
      if (victim == -4294967295){
        if (damageType == 5) {
          Game.prevent()
          
        }}});
}} else if (bool == false){
  Player.setFlyingEnabled(false)
  
     if(
       Player.getFlyingEnabled(true)
       ){
  Callback.addCallback('EntityHurt', function (attacker, victim, damageValue, damageType, someBool1, someBool2) {
      if (victim == -4294967295){
        if (damageType == 5) {
          Game.prevent()
        }
      
    }
    
  });
       

  
}
}}
//каждый тик искать предмет и выполнять код если тру
function getItemToInv(id, data, funcs){
  Callback.addCallback("ServerPlayerTickFunction", function() {
    for (var s = 0; s < 36; s++) {
      var slot = Player.getInventorySlot(s);
      if (slot.id == id && slot.data == data) {
        funcs
      }
    }
  });
}
//еда с дамагом
function CreateFoodDamage(id, maxdamage) {


  Item.createFoodItem(id, id, { name: id, meta: 0 }, { stack: 1, food: 1 });
  Item.setMaxDamage(ItemID[id], maxdamage)
  Callback.addCallback('FoodEaten', function(food, satRatio) {
    if (food.id == id) {
      Player.setCarriedItem(ItemID[id], item.count + 2, item.data + 1)
    }
  });
}



