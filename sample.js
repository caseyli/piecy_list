$(function(){
  if($(".cars-table").length > 0) {
    var total = parseInt($(".cars-total").html());

    populatePiecyList(window.location, 0, 50, total, function(data){
      $(".cars-table tbody").append(JST['templates/cars']({ cars : data }));    
    }, function() {
      $(".loading-cars-info").slideUp(200);
    });
  }
});