class HelperTable {
 
  filtraETroca(){
    $(document).ready(function(){
      $("#myInput").on("keyup", function() {
        var value = $(this).val().toLowerCase();
        $(".dropdown-menu li").filter(function() {
          $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
        });
      });
      $(".dropdown-menu li").on("click", function() {
        $("#myInput").val(this.textContent);
    });
    });
    
  }
}
 