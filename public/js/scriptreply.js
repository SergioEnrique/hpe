function replyAll(){


//example

var tweets = { "users": ["FranPR9", "UnValerio", "abr_gnz"] }
//finish example
$.ajax({
      method: "POST",
        url: "/autoreply",
        dataType: 'json',
          data: tweets 
}).done(function( msg ) {
          console.log(JSON.stringify(tweets))
          console.log( "Data Saved: " + msg );
            });

}
