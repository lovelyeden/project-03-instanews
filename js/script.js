

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
          <li class="list-article">
          <a href=${article.url} >
          <div class="article-container "target="_blank" style="background-image:url(${article.multimedia[4].url}); background-size: cover;">
          <div class="stories-container">
          <p>${article.abstract}</p>
          </div>
          </div>
          </a>
          </li>
  `;
  $('ul').append(articleWrap);
});

            




      
        });

        // loadArticles(selected);
        // $('.articles').append();
   
      }// end if selected !==''
    });// end of change event



  // }