/**
 * Created by Alexey on 12.03.2016.
 */
Atelier.module("Router", function (AtelierRouter, Atelier, Backbone, Marionette, $, _) {
    var RoutesController = {
        mainPage: function () {
            console.log('main page');
            //отобразить макет сайта
        },
        servicesPage: function () {
            console.log('services page')
        },
        priceListPage: function () {
            console.log('price list page')
        },
        contactsPage: function () {
            console.log('contacts page')
        },
        jobPage: function () {
            console.log('job page')
        }
    };
    AtelierRouter.AppRouter = Marionette.AppRouter.extend({
        controller: RoutesController,
        appRoutes: {
            '': 'mainPage',
            'services': 'servicesPage',
            'price-list': 'priceListPage',
            'contacts': 'contactsPage',
            'job': 'jobPage'
        }
    });

    Atelier.addInitializer(function () {
        new AtelierRouter.AppRouter();
    })
});