(function ($){
  $.Carousel = function(el){
    this.$el = $(el);
    this.activeIdx = 0;
    this.$images = this.$el.find("div.items img")
    this.$images.eq(this.activeIdx).addClass("active");
    this.bindEvents();
  }
  
  $.fn.carousel = function () {
    return this.each(function () {
      new $.Carousel(this);
    });
  };
  
  $.Carousel.prototype.bindEvents = function(){
    var fn = this;
    $("a").on("click", this.clickCarousel.bind(this));
  }
  
  $.Carousel.prototype.clickCarousel = function(event){
    var fn =this;
    event.preventDefault();
    var $currentTarget = $(event.currentTarget);
    switch($currentTarget.attr("class")){
    case ("slide-left"):
      fn.slide(1);
      break;
    case ("slide-right"):
      fn.slide(-1);
      break;
    }
  }
  
  $.Carousel.prototype.slide = function(dir){
    if (this.transitioning === true){
      return
    }
    this.transitioning = true;
    var fn = this;
    var currentIdx = this.activeIdx
    var $prev = this.$images.eq(this.activeIdx)
    var dirClass = (dir === 1 ? "left" : "right");
    
    $prev.addClass(dirClass);
    
    $prev.one("transitionend", function(){
     $prev.removeClass("active left right");
     fn.transitioning = false;
    });
    
    this.activeIdx += dir;
    
    var wrapper = this.$images.length - 1;
    if(this.activeIdx > wrapper){
      this.activeIdx = 0;
    }else if(this.activeIdx < 0){
      this.activeIdx = wrapper;
    }
    var $curr = this.$images.eq(this.activeIdx)
    $curr.addClass("active");
    dirClass = (dir === 1 ? "right" : "left")
    $curr.addClass(dirClass);
   
    setTimeout(function(){
      $curr.removeClass("left right");
    }, 0);
  }
  
})(jQuery);