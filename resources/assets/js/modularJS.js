var people = {
  people: ["Fabio", "Pontes"],
  init: function () {
    this.cacheDom();
    this.bindEvents();
    this.render();
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
      people: this.people,
    };
    this.$ul.html(Mustache.render(this.template, data));
  },
  bindEvents: function () {
    this.$button.on('click', this.addPerson.bind(this));
    this.$ul.delegate('i.del', 'click', this.deletePerson.bind(this));
  },
  addPerson: function (value) {
    this.people.push(value || this.$input.val());
    this.$input.val('');
    this.render();
  },
  deletePerson: function (event) {
    var $remove = $(event.target).closest('li');
    var i = this.$ul.find('li').index($remove);

    this.people.splice(i, 1);
    this.render();
  }
};
people.init();