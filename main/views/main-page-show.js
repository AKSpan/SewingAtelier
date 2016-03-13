/**
 * Created by Alexey on 12.03.2016.
 */
Atelier.module("Main", function (Main, Atelier, Backbone, Marionette, $, _) {
    Main.ShowNews = Marionette.ItemView.extend({
        template: '#aaa',
        events: {
            "click #news-left-arrow": "newsLeft",
            "click #news-right-arrow": "newsRight",
            "click #news-body": "newsBody"
        },
        newsLeft: function () {
            console.log("news left")
        },
        newsRight: function () {
            console.log("news right")
        },
        newsBody: function () {
            console.log("news body")
        }
    });

    Main.ShowMainPage = Marionette.LayoutView.extend({
        el: 'body',
        template: '#main-template',
        regions: {
            header: '#header',
            news: '#main-news',
            navpanel: '#nav-panel',
            main: '#main'
        },
        onRender: function () {
            console.log('onLayout Render');
            var a = new Main.ShowNews();
            this.getRegion('news').show(a);
        }
    });

});