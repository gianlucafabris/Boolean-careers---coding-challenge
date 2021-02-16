$(function(){
  $("[data-carica]").each(function(){
    var $this = $(this);
    if($this.attr("data-carica") > 60){
      $this.addClass("alta");
    }else if ($this.attr("data-carica") > 20) {
      $this.addClass("media");
    }else{
      $this.addClass("bassa");
    };
    $this.css("width", $this.attr("data-carica")+"%");
  });
});
