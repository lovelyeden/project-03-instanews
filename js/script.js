

      // chaining
      // $.ajax().done().fail().always();
      
     
  
  
    /**
     * Change event for select list and call .ajax
     */
    $('#choose-menu').on('change', function() {
      const selected = $(this).val();
      if (selected !== '') {
        console.log('The value you picked is: ' + selected);

        $.ajax({
          method: "get",
          url: "https://api.nytimes.com/svc/topstories/v2/"+selected+".json?api-key=s5AF7dJT7Aw8VOkkVQ0g0LSWD8xiwxp2"
        }).done(function(data) {
          console.log(data); 
          // $('grid-article'),html('');
          $.each(data.results, function( index, article ){
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

            




            
          //   $('.article').append(`
          //     <ul>${article.title} + $</ul>
          //   `);
          // }); // end of .each

          // template string `<p>${variable}</p>`
          // easier than concatination which is "<p>" + variable + "</p>"
    // console.log('The value you picked is: ' + selected)
        });

        // loadArticles(selected);
        // $('.articles').append();
      }// end if selected !==''
    });// end of change event



  // }