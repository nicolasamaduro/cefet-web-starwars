// Seu javascript aqui :)
// Use a Star Wars API: https://swapi.co/
// para carregar:
//  - A lista de filmes
//  - A introdução de cada filme, quando ele for clicado
let ultimoFilme = localStorage.getItem('ultimo-filme');
if (ultimoFilme){
  exibirAbertura(ultimoFilme);
}

var filmes=[];
$.ajax({
  url: 'https://swapi.co/api/films',
  success: function(resposta) {
    filmes = resposta.results;
    filmes.sort(function(f1,f2){
      if (f1.episode_id > f2.episode_id) {
        return 1;
      }
      if (f1.episode_id < f2.episode_id) {
        return -1;
      }
      return 0;
    });
  }
});


$( ".epidose" ).click(function() {
if (filmes.length!==0){
  // `this` is the DOM element that was clicked
  var index = $( "li" ).index( this );
  exibirAbertura("Episode " +filmes[index].episode_id+'\n'+
    filmes[index].title.toUpperCase()+'\n\n'+
   filmes[index].opening_crawl);
}else{
  alert("Requisição ainda não foi respondida.")
}
});

function exibirAbertura(abertura){
  $(".reading-animation").html(abertura);
   localStorage.setItem('ultimo-filme',abertura);
}
