class HelperTable {
 
  static filtra(onde,aonde){
      $(onde).on("keyup", function() {
        var value = $(this).val().toLowerCase();
        $(aonde).filter(function() {
          $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
        });
      });
  }

  static trocaClasse(){
    //this.dropDown()
    $(".dropdown-menu>li>a").on("click", function() {
      $("#myInput").val(this.textContent);
  });
  }
  static dropDown(){
    $(document).keydown(function(e) {
      if(e.which == 40 || e.which == 38) {
        let openNavbar = $(".open");
        if(openNavbar[0]) {
          let menu = openNavbar.children(".dropdown-menu");
          menu.find("a").css("outline", "none"); // remove the pesky blue outline
          let hovered = menu.find("li:hover");
          if(hovered[0]) {
            if(e.which == 40) hovered.next().children().focus();
            else hovered.prev().children().focus();
          }
          else menu.find("li").first().children().focus();
        }
      }
    });
  }

  static limpaInput(){
    let inputs = document.querySelectorAll('input');
    inputs.forEach(input=> input.value = '');
    inputs[0].focus();
  }
}
 