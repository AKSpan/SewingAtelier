/**
 * Created by Alexey on 12.03.2016.
 */
Atelier.module("Main", function (Main, Atelier, Backbone, Marionette, $, _) {
    /**
     * View для разметки главной страницы
     * @type {void|*}
     */
    Main.ShowMainPage = Marionette.LayoutView.extend({
        el: 'body',
        template: Marionette.TemplateCache.get("#main-template"),
        regions: {
            header: '#header',
            news: '#main-news',
            navpanel: '#nav-panel',
            main: '#main'
        },
        onRender: function () {
            this.getRegion('news').show(new Main.ShowNews());
            this.getRegion('navpanel').show(new Main.ShowNavPanel());
        }
    });
    /**
     * View для блока новостей
     * @type {void|*}
     */
    Main.ShowNews = Marionette.ItemView.extend({
        tagName: 'ul',
        className: 'list-inline',
        template: Marionette.TemplateCache.get("#news-template"),
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
    Main.ShowNavPanel = Marionette.ItemView.extend({
        template: Marionette.TemplateCache.get("#nav-template"),
        tagName: 'ul',
        className: 'nav nav-tabs',
        events: {
            "click li": "showChoosePage",
            //"mouseenter li": "showDropDownList"
        },
        showChoosePage: function (e) {
            console.log('showChoosePage')
            var el = $(e.target)
            if (el.find('ul').length != 0)
                el.find('ul').toggle();
        },
        showDropDownList: function (e) {
            console.log('showDropDownList')


        }
    });
});