function setup() {
  createCanvas(6000,1000);
}

function draw() {
  background(255,255,255);
  text(mouseX + ',' + mouseY, 30, 45);
  fill("black");
  text("400 gms (1 tin)Nestlé MILKMAID",500,100);
  text ( "200 gmsMaida (All Purpose Flour)",500,125);
  text("1 tbsp Cocoa Powder",500,150);
  text ("1 tsp Baking Powder",500,175);
  text ("1 tsp Soda Bicarbonate",500,200);
  text ("100 gms Butter",500,225);
  text ("1 tsp Vanilla Essence",500,250);
  text("200 ml Aerated Soda",500,275);
  text("2 tbsp Red Colour",500,300);
  fill("darkblue");
  text("Topping",550,335);
  fill("black");
  text("100 gm Nestlé MILKMAID",500,365)
  text("400 gms Nestlé a+ Nourish Dahi",500,390)
  text("1 tbsp Butter",500,415)
  fill("darkblue");
  text("HOW TO MAKE EGGLESS RED VELVET CUP CAKE ",440,450)
  fill("black");
  text("• Preheat oven to 180⁰ C. Line the muffin tray with paper cups.",200,490) 
  text("• Sieve together maida, cocoa powder, baking powder, and soda bicarbonate. Soften butter in a bowl, add Nestlé MILKMAID, and beat well. Add vanilla essence and mix.",200,510 )
  text("• Slowly fold in the sieved maida mixture and aerated soda alternately to the Milkmaid-Butter mix till all the maida mixture and soda are used up. Add the red colour and blend well.",200,530 )
  text("• Pour the batter into the paper cups filling ¾ of the cup and bake in the preheated oven for 15-20 minutes or till a toothpick inserted in the center of the cake comes out clean",200,550)
  text("• Remove from oven, cool for a while. Pipe the topping over the cakes and decorate. • Topping: Strain the dahi in a muslin cloth for 20 minutes to get hung curd. Place the hung curd, Nestlé MILKMAID, and butter in a bowl and beat together till thick. Spoon into an icing bag and pipe over the cool cakes.",200,570)
  drawSprites();
}