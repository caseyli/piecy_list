function populatePiecyList(indexUrl, offset, limit, total, render, finish) {

  $.getJSON(
    indexUrl,
    { offset : offset, limit : limit },
    function(data, textStatus, jqXHR){

      render(data);

      var currentItemsLoaded = parseInt($(".piecy-items-loaded").html());
      var itemsLoaded = currentItemsLoaded + data.length
      $(".piecy-items-loaded").html(itemsLoaded);

      if(itemsLoaded < total) {
        populatePiecyList(indexUrl, offset + limit, limit, total, render, finish);  
      }
      else {
        if(typeof finish != "undefined") {
          finish();
        }
      }
    });
}