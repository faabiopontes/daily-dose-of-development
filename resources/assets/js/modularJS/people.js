// fully private now?
var peopleModule = (function () {
  var people = ["Fabio", "Pontes"];

  // this.cacheDom();
  var $el = $('#peopleModule');
  var $button = $el.find('button');
  var $input = $el.find('input');
  var $ul = $el.find('ul');
  var template = $el.find('#people-template').html();

  // this.bindEvents();
  $button.on('click', addPerson.bind(this));
  $ul.delegate('i.del', 'click', deletePerson.bind(this));

  _render();

  function _render() {
    $ul.html(Mustache.render(template, { people: people }));
  };

  function addPerson(eventOrName) {
    var name = typeof eventOrName == "string" ? eventOrName : $input.val();
    people.push(name);
    $input.val('');
    _render();
  }
  function deletePerson(eventOrNumber) {
    var i;
    if (typeof eventOrNumber === "number") {
      i = eventOrNumber;
    } else {
      var $remove = $(event.target).closest('li');
      i = $ul.find('li').index($remove);
    }
    people.splice(i, 1);
    _render();
  }

  return {
    addPerson: addPerson,
    deletePerson: deletePerson
  };
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