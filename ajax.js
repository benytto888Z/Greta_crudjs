$(document).ready(function() {
   
    $("#identifiant").click(function(){
        $.ajax({
           url : 'cible.php', // La ressource ciblée
           type : 'GET', // Le type de la requête HTTP, le type <strong>GET</strong> est le type que <strong>jQuery</strong> prend par défaut.Il peut 
                        // être POST ou ....
           data : 'base=' + 22,
           dataType : 'html', // Le type de données à recevoir,  On peut recevoir tout et n'importe quoi : du XML, du HTML, du texte, du JSON... (on 
                             // utilisera ici du HTML)

          success : function(response){
                                $('#token').html(response); // On passe code_html à jQuery() qui va nous créer l'arbre DOM !
                            },
                     
          error : function(resultat, statut, erreur){
                              
                            },
                                       
        });
   });


});