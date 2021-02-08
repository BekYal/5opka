//Собственность ноунеймов
//Распространение вне беседы запрещено
//BotaniaRegistry(type: string, name: string, params:? itemParameters | blockParameters | foodParameters | armorParameters)
 
/*itemParameters = {
    nameColor:? int,
    stack:? int,
    isTech:? bool,  
    category:? int,
    maxDamage:? int,
    textureData?: {name, meta},
    glint:? bool,
    enchant:? {type, level},
    repairItemIds:? [id, id, ...]
    itemUse:? function (coords, block, item)
}
 
blockParameters = {
    variations:? [{ texture: [[textureName, meta]], name: string, inCreative: bool }, ...],
    nameColor:? int,
    category:? int,
    material:? string,
    destroyLevel:? int,
    repairItemIds:? [id, id, ...],
    render: blockRender,
    collision: blockCollision
} Сюда также можно передать BlockSpecialType. Мне было лень писать каждый параметр.
 
foodParameters = {
    nameColor:? int,
    stack:? int,
    isTech:? bool,
    food:? int,
    category:? int,
    maxDamage:? int,
    textureData?: {name, meta},
    glint?: bool,
    enchant:? {type, level},
    repairItemIds:? [id, id, ...]
    foodEaten:? function (food, забылЧо)
}
 
armorParameters = {
    nameColor:? int,
    stack:? int,
    isTech:? bool,
    category:? int,
    maxDamage:? int,
    textureData?: {name, meta},
    glint?: bool,
    enchant:? {type, level},
    repairItemIds:? [id, id, ...],
    armorFuncs: функция брони
}
*/
 
function BotaniaRegistry(type, name, params) {
  let str2 = name.split(' ');
  let str3 = str2.slice();
  var nameID = ""
  var nameTexture = ""
  for (let i = 0; i < str3.length; i++) {
    str3[i] = str2[i].toLowerCase()
    nameID += i == 0 ? str3[0] : str2[i]
    nameTexture += i < (str3.length - 1) ? str3[i] + "_" : str3[i]
  }
  if (type === "item") {
    IDRegistry.genItemID(nameID)
    Item.createItem(nameID, params.nameColor ? "§" + params.nameColor + name : name, params.textureData ? params.textureData : { name: nameTexture, meta: 0 }, params)
    Item.setCategory(ItemID[nameID], params.category ? params.category : 4)
    Item.setGlint(nameID, params.glint ? params.glint : false)
    if (params.enchant)
      Item.setEnchantType(ItemID[nameID], params.enchant.type, params.enchant.level);
    if (params.maxDamage) Item.setMaxDamage(ItemID[nameID], params.maxDamage)
    if (params.repairItemIds)
      Item.addRepairItemIds(ItemID[nameID], params.repairItemIds);
    Item.registerUseFunction(nameID, params.itemUse ? params.itemUse : function() {})
    
    Item.registerNoTargetUseFunction(nameID, params.itemUse ? params.itemNoTargetUse : function() {})
  }
  else if (type === "block") {
    IDRegistry.genBlockID(nameID)
    Block.createBlock(nameID, params.variations ? params.variations : [{ texture: [[nameTexture, 0]], name: params.nameColor ? "§" + params.nameColor + name : name, inCreative: params.creative ? params.creative : true }], params)
    Item.setCategory(BlockID[nameID], params.category ? params.category : 1)
    if (params.material)
      Block.setBlockMaterial(nameID, params.material)
    if (params.destroyLevel)
      Block.setDestroyLevel(nameID, params.destroyLevel)
    if (params.repairItemIds)
      Item.addRepairItemIds(ItemID[nameID], params.repairItemIds)
    if (params.render) {
      for (let i = 0; i < (params.variations ? params.variations.length : 1); i++) {
        BlockRenderer.setStaticICRender(BlockID[nameID], params.variations ? i : 0, params.render)
      }
    }
    if (params.collision) {
      for (let i = 0; i < (params.variations ? params.variations.length : 1); i++) {
        BlockRenderer.setCustomCollisionShape(BlockID[nameID], params.variations ? i : 0, params.collision)
      }
    }
  }
  else if (type === "food") {
    IDRegistry.genItemID(nameID)
    Item.createFoodItem(nameID, params.nameColor ? "§" + params.nameColor + name : name, params.textureData ? params.textureData : { name: nameTexture, meta: 0 }, params)
    Item.setCategory(ItemID[nameID], params.category ? params.category : 4)
    if (params.enchant)
      Item.setEnchantType(ItemID[nameID], params.enchant.type, params.enchant.level);
    if (params.maxDamage) Item.setMaxDamage(ItemID[nameID], params.maxDamage)
    Callback.addCallback("FoodEaten", params.foodEaten ? params.foodEaten : function() {})
    if (params.repairItemIds)
      Item.addRepairItemIds(ItemID[nameID], params.repairItemIds);
    Item.setGlint(nameID, params.glint ? params.glint : false)
  }
  else if (type == "armor") {
    IDRegistry.genItemID(nameID)
    Item.createArmorItem(nameID, params.nameColor ? "§" + params.nameColor + name : name, params.textureData ? params.textureData : { name: nameTexture, meta: 0 }, params)
    Item.setCategory(ItemID[nameID], params.category ? params.category : 3)
    if (params.enchant)
      Item.setEnchantType(ItemID[nameID], params.enchant.type, params.enchant.level);
    if (params.maxDamage) Item.setMaxDamage(ItemID[nameID], params.maxDamage)
    if (params.armorFuncs)
      Armor.registerFuncs(nameID, params.armorFuncs)
    if (params.repairItemIds)
      Item.addRepairItemIds(ItemID[nameID], params.repairItemIds);
    Item.setGlint(nameID, params.glint ? params.glint : false)
  } else if ( type == "sword"){
    IDRegistry.genItemID(nameID)
        Item.createItem(nameID, params.nameColor ? "§" + params.nameColor + name : name, params.textureData ? params.textureData : { name: nameTexture, meta: 0 }, params)
    Item.setCategory(ItemID[nameID], params.category ? params.category : 3)
    if (params.enchant)
      Item.setEnchantType(ItemID[nameID], params.enchant.type, params.enchant.level);
    if (params.maxDamage) Item.setMaxDamage(ItemID[nameID], params.maxDamage)
    Item.setGlint(nameID, params.glint ? params.glint : false)

  }
}
/*Примеры
BotaniaRegistry("item", "This Is Item", {
  stack: 43,
  glint: true,
  category: 2,
  maxDamage: 200,
  nameColor: 1,
  itemUse: function(coords, item, block) {
    alert(block.data)
  }
});
BotaniaRegistry("block", "This Is Block", {
  base: 2,
  lightlevel: 15,
  category: 2,
  nameColor: 3
});
BotaniaRegistry("food", "This Is Food", {
  food: 2,
  stack: 1,
  nameColor: 7,
  category: 3,
  maxDamage: 10,
  foodEaten: function(food, ratio) {
    alert(food)
    var item = Player.getCarriedItem()
    Player.setCarriedItem(item.id, item.count, item.data - 1)
  }
});*/