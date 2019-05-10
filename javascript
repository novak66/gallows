var entrada = $(".entrada");
var sprite = $(".sprite")
var ul =$(".texto");
entrada.removeClass();
var j=0;
var chute =$(".chute")



  recebeFrase();
  adivinhaPalavras();


function recebeFrase(){
  $( "#entrada" ).on( "keydown", function() {
        if(event.which == 13){
            ul.removeClass();
            var text = entrada.val();

            var resultado = text.toLowerCase().split('');

            entrada.addClass("entrada");
            chute.removeClass();
            criaJogo(resultado);
            var max = text.length;
            adivinhaPalavras(resultado,max);
          }

});}

function nextFrame(i) {
  var vetor = [
    ".sprite",".sprite frame1",".sprite frame2",".sprite frame3",".sprite frame4",".sprite frame5",".sprite frame6",".sprite frame7",".sprite frame8",".sprite frame9"
  ]
  sprite.addClass(vetor[i]);
  if(i==8){
        alert("ultima tentativa");
}
if(i==9){
    alert("game over");
    for(i=0;i<10;i++){
    sprite.removeClass(vetor[i]);
  }
  }
}

function criaJogo(text) {
  for(i=0;i<text.length;i++){
      var li = document.createElement('li');
      ul.append(li);
  }
}

function adivinhaPalavras(resultado,max) {
  var aux =0;
  var i=2;
    $("#chute").on("keydown", function() {
          if(event.which == 13){
            var chute1 = chute.val();
            for(j=0;j<max;j++){
              if(chute1 == resultado[j]){
                 aux++;
              }
              if(j == max-1){
                if (aux == 0){
                  nextFrame(i);
                  i++;
                }
                chute.val('');
                aux =0;

                if(i==10){
                   i=2;
                   entrada.removeClass();
                   ul.addClass("texto");
                   chute.addClass("chute");
                   entrada.val('');
                   chute.val('');
                  $('#texto').empty()
                }
              }
            }
    }
});}
