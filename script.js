let message = "There is no war in Ba Sing Se";
let countries = ['China','Japan','South Korea','Vietnam','Malaysia']
let capital = ['Beijing','Tokyo','Seoul','Hanoï','Kuala Lumpur']


function words (x){
    let nb = 1
    for(i=0; i<x.length; i++){
        if(x[i] == " "){
            nb++;
        }
    }
    console.log(nb);
}
words(message)

for(i = 0; i<countries.length; i++){
    console.log("Your country ", countries[i], "has the capital ", capital[i])
}