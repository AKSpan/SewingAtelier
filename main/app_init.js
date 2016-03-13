/**
 * Created by Alexey on 12.03.2016.
 */
var Atelier = new Marionette.Application();

Atelier.on("start", function () {
    console.log('on start',Atelier);
    if (Backbone.history){
        Backbone.history.start();
    }
    var layouts = new Atelier.Main.ShowMainPage();
    layouts.render();
});