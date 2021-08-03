function setup() {
  createCanvas(1000,1000);
}

function draw() {
  background(255,255,255);
  text(mouseX + ',' + mouseY, 30, 45);
  fill("black")
  text("400 gms (1 tin)Nestlé MILKMAID",500,100)
  text ( "200 gmsMaida (All Purpose Flour)",500,125)
  text("1 tbsp Cocoa Powder",500,150)
  text ("1 tsp Baking Powder",500,175)
  text ("1 tsp Soda Bicarbonate",500,200)
  text ("100 gms Butter",500,225)
  text ("1 tsp Vanilla Essence",500,250)
  text("200 ml Aerated Soda",500,275)
  text("2 tbsp Red Colour",500,300)
  fill("darkblue")
  text("Topping",550,335)
  drawSprites();
}