$(function() {
  $('.cella').click(function() {
    var cella = $(this)
    $.ajax({
      url:"https://www.boolean.careers/api/random/int",
      method:"GET",
      success:function(data){
        console.log(data.response)
        var numCasuale = parseInt(data.response)
        if (numCasuale <= 5) {
          cella.addClass('yellow')

        }
        else {
          cella.addClass('green')
        }
      }
    });
  })



})
