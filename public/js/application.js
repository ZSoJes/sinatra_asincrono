$(document).ready(function() {
	// Este código corre después de que `document` fue cargado(loaded)
	// completamente.
	// Esto garantiza que si amarramos(bind) una función a un elemento
	// de HTML este exista ya en la página.
  $( this ).submit(function(event) {

      // if ( $("input:first").val() === "")
      // {
      //   alert("no dejes vacio el campo de texto");
      //   event.preventDefault();
      //
      // }
      // else{
      //   var str = $( "form" ).serialize();
      //   console.log(str);
      // }

        // Stop form from submitting normally
            event.preventDefault();
            if ( $("input:first").val() === "")
             {
            alert("No dejes vacio el campo!");
           }

        // Get some values from elements on the page:
         var term = $( "form" ).serialize();
         var url = $( "form" ).attr( "action" );

        // Put the results in a p
         $.post( url, term ).done(function( data ) {
          // alert(term + " : " + url + " : " + data);
          $( "#results" ).text( data );
          });

     }); // termina submit

});      // termina document ready
