/* quando si carica la pagina */
$(function(){
  /* elemeti con attributo data-carica */
  $("[data-carica]").each(function(){
    var $this = $(this);
    /* imposta classe in base alla carica */
    if($this.attr("data-carica") > 60){
      $this.addClass("alta");
    }else if ($this.attr("data-carica") > 20) {
      $this.addClass("media");
    }else{
      $this.addClass("bassa");
    };
    /* imposta percentuale di carica come larghezza */
    $this.css("width", $this.attr("data-carica")+"%");
  });
});
