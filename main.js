
$(document).ready(function() {

$.fn.colorPalette = function (options) {/*** container paleta**/
  this.addClass("color-paleta");
  this.color = {};
  this.bgColor = options.bgColor || "#003153";
  this.css({
    "background-color": this.bgColor
  });
  
  var greys = ["#ff005a", "#0087d1", "#ffd700"];
  
  for (var i = 0; i < greys.length; i++) {
    var grey = greys[i];
    var colorS = $("<div class='color-s' data-color='"+grey+"'></div>");
    colorS.css({"background-color": grey});
    
    this.color[grey] = colorS;
    this.append(colorS);
  }
  this.append("<div class='clear'/>");
  this.append("<div class='break'/>");
  
  for (var color in this.color) {
    if (color == "#900") { console.log("yup") }
    var swatch = this.color[color];
    
    swatch.click(function () {
      $(this).siblings().removeClass("selected");
      $(this).addClass("selected");
      
      var color = $(this).data("color");
      
      options.colorChange(color);
    });
  }
  
      this.append("<div class='clear'/>");
      /** cambio****/
      this.changeSelected = function (color) {
        var swatch = this.color[color];
        if (swatch) {
          swatch.siblings().removeClass("selected");
          swatch.addClass("selected");
          options.colorChange(color);
        }
      };

      return this;
    }
  
var colorPalette = $(".test").colorPalette({
  colorChange: function (color) {
    $(".result").css("background", color);
  },
  bgColor: "#003153"
});

colorPalette.changeSelected("#ff005a");

});