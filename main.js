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
          cella.text(numCasuale)

        }
        else {
          cella.addClass('green')
          cella.addClass('color-white')
          cella.text(numCasuale)

        }
      }
    });
  })
})
