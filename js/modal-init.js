(function(){
  var $content = $('#modalWrpr').detach();   

  $('#middleArticle').on('click', function() {           
    modal.open({content: $content, width:800, height:700});
  });
}());