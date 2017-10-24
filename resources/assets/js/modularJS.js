// trying to be private
// but still public hacking Sources of navigator
var peopleModule = (function () {
  var peopleObject = {
    names: ["Fabio", "Pontes"],
    init: function () {
      this.cacheDom();
      this.bindEvents();
      this.render();
      this.returnFunctions();
    },
    returnFunctions: function () {
      return {
        addPerson: this.addPerson,
        render: this.render
      }
    },
    cacheDom: function () {
      this.$el = $('#peopleModule');
      this.$button = this.$el.find('button');
      this.$input = this.$el.find('input');
      this.$ul = this.$el.find('ul');
      this.template = this.$el.find('#people-template').html();
    },
    render: function () {
      var data = {
        people: this.names,
      };
      this.$ul.html(Mustache.render(this.template, data));
    },
    bindEvents: function () {
      this.$button.on('click', this.addPerson.bind(this));
      this.$ul.delegate('i.del', 'click', this.deletePerson.bind(this));
    },
    addPerson: function (eventOrName) {
      var name = typeof eventOrName == "string" ? eventOrName : this.$input.val();
      this.names.push(name);
      this.$input.val('');
      this.render();
    },
    deletePerson: function (event) {
      var $remove = $(event.target).closest('li');
      var i = this.$ul.find('li').index($remove);

      this.names.splice(i, 1);
      this.render();
    }
  };
  peopleObject.init();
})();
// people.init();

var peoplePrivate = (function () {
  // this is function scope

  // this is a private variable
  var privateName = 'pontes';

  function sayPrivateName() {
    alert(privateName);
  }
  return {
    sayPrivateName: sayPrivateName
  }
})();
// peoplePrivate.sayPrivateName();