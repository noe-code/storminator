define([
  'jquery',
  'underscore',
  'backbone',
  'app/views/dash'
  'app/views/about'

  ], function ($, _, Backbone, DashView, Aboutview) {
      'use strict';

      var AppView = Backbone.View.extend({
        id: 'app-view',

        html: [
            '<div class="navbar">',
              '<a class="navbar-brand" href="#">Storminator</a>',
              '<ul class="nav navbar-nav">',
                  '<li id="nav-dash"><a href="#dash">Dashboard</a></li>',
                  '<li id="nav-about"><a href="#about">About</a></li>',
              '</ul>',
            '</div>',
            '<div id="content"></div>'
        ].join(''),

          events: {

          },

        views: {},

        initialize: function() {
          this.views['dash'] = new DashView({
            id: 'page-dash',
            className: 'page-view'
          });

          this.views['about'] = new AboutView({
            id: 'page-about',
            className: 'page-view'
          });

          this.$el.append(this.html);
          this.$('#content').append(this.views['dash'].render().el);
          this.$('#content').append(this.views['about'].render().el);
        }
      });

      return AppView;

});
