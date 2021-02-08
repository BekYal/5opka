BotaniaRegistry("food", "flash", {

  food: 2,

  stack: 1,
  nameColor: 7,
  category: 3,
  maxDamage: 15,
  foodEaten: function(food, ratio) {
    alert(food)
    var item = Player.getCarriedItem()
    if( World.getThreadTime()%40 == 0){
    Player.setCarriedItem(item.id, item.count + 1, item.data + 1)}
Entity.addEffect(3, 10, 3, 1000)
  }
});