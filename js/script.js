

      // chaining
      // $.ajax().done().fail().always();
      
     
  
  
    /* Change event for select list and call .ajax */
    $('#choose-menu').on('change', function() {
      $('.site-header').addClass('shrink');
      $('.main-article').addClass('grow');
      
      const selected = $(this).val();
      if (selected !== '') {
        
        console.log('The value you picked is: ' + selected);
      //on change 
 
        $('.loader').show();
  

        $.ajax({
          method: "get",
          url: "https://api.nytimes.com/svc/topstories/v2/"+selected+".json?api-key=s5AF7dJT7Aw8VOkkVQ0g0LSWD8xiwxp2"
        }).done(function(data) {
          const articleFiltered = data.results.filter(function(stories){
          return stories.multimedia[4] !==  undefined;
          }).slice(0,12);
          $('ul').html('');
          $.each(articleFiltered, function( index, article ){
          console.log(article);
         

          const articleWrap = `
          <li class="list-article" style="background-image:url(${article.multimedia[4].url}); background-size: cover;">
          <a href=${article.url} "target="_blank">
          <div class="stories-container">
          <p class="headlines">${article.abstract}</p>
          </div>
          </div>
          </a>
          </li>
  `;
  $('ul').append(articleWrap);
});
})
.fail(function() {
$('.main-article').append('<p class="error">Sorry there was an error in loading the page.</p>');
})
.always(function(){
  $('.loader').hide();

});
            




      

        

        // loadArticles(selected);
        // $('.articles').append();
   
      }// end if selected !==''
    });// end of change event



  // }