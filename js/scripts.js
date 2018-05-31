function hideEverything()
{
  $(".initial-hide").hide();
}

$(function()
{
  $("#btn-submit").click(function()
  {
    var selection = parseInt($("#animals").val());

    if(selection === 0)
    {
      hideEverything();
    }
    else if(selection === 1)
    {
      hideEverything();
      $("#polarbear").show();
    }
    else if(selection === 2)
    {
      hideEverything();
      $("#penguin").show();
    }
  });
});
