'use strict';

var $ = require('jquery'),
  _ = require('underscore'),
  Backbone = require('backbone');

var ContactView = Backbone.View.extend({

  tagName: 'li',

  template: require('../../templates/views/contact.hbs'),

  initialize: function(){
    _.bindAll(this, 'render');
  },

  render: function(){
    this.$el.html(this.template(this.model.attributes));
    return this;
  }

});

module.exports = ContactView;
