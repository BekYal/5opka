function fly()
{
   Player.setFlyingEnabled(true)
  Callback.addCallback('EntityHurt', function (attacker, victim, damageValue, damageType, someBool1, someBool2) {
      if (victim == -4294967295){
        if (damageType == 5) {
          Game.prevent()
}}});


}