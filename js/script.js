

      // chaining
      // $.ajax().done().fail().always();
      
     
  
  
    /**
     * Change event for select list and call .ajax
     */
    $('#choose-section-menu').on('change', function() {
      const selected = $(this).val();
      if (selected !== '') {
        console.log('The value you picked is: ' + selected);

        $.ajax({
          method: "get",
          url: "https://api.nytimes.com/svc/topstories/v2/"+selected+".json?api-key=s5AF7dJT7Aw8VOkkVQ0g0LSWD8xiwxp2"
        }).done(function(data) {
          console.log(data);

          $.each(data.results, function( index, article ){
            console.log(article);
            $('.article').append(`
              <p>${article.title}</p>
            `);
          }); // end of .each

          // template string `<p>${variable}</p>`
          // easier than concatination which is "<p>" + variable + "</p>"
    // console.log('The value you picked is: ' + selected)
        });

        // loadArticles(selected);
        // $('.articles').append();
      }// end if selected !==''
    });// end of change event



  // }