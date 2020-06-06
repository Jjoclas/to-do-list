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
    $(".dropdown-menu li").on("click", function() {
      $("#myInput").val(this.textContent);
  });
  }

  static limpaInput(){
    let inputs = document.querySelectorAll('input');
    inputs.forEach(input=> input.value = '');
    inputs[0].focus();
  }
}
 