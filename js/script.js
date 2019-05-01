function loadArticles(category){
    console.log(category);
    $.ajax({
        method: "get",
        url: "https://api.nytimes.com/svc/topstories/v2/"+category+".json?api-key=s5AF7dJT7Aw8VOkkVQ0g0LSWD8xiwxp2"
      }).done(function(data) {
        console.log(data);
      });
}

  $('#choose-section-menu').on('change', function() {
    const selected = $(this).val();
    if (selected !== '') {
      console.log('The value you picked is: ' + selected);
      loadArticles(selected);
      $('.articles').append();
    }
  });
