// Screen controller
var uiController = (function () {
  var DOMstrings = {
    //
    inputType: ".add__type",
    inputDescription: ".add__description",
    inputValue: ".add__value",
    addBtn: ".add__btn",
  };
  //
  return {
    getInput: function () {
      return {
        type: document.querySelector(DOMstrings.inputType).value,
        description: document.querySelector(DOMstrings.inputDescription).value,
        value: document.querySelector(DOMstrings.inputValue).value,
      };
    },
    getDOMstrings: function () {
      return DOMstrings;
    },
  };
})();
// sanhuu  controller?///////////////////////////////////////
var financeController = (function () {
  var Income = function (id, description, value) {
    this.id = id;
    this.description = description;
    this.value = value;
  };
  var Expence = function (id, description, value) {
    this.id = id;
    this.description = description;
    this.value = value;
  };
  var data = {
    allItems: {
      inc: [],
      exp: [],
    },
    totals: {
      inc: 0,
      exp: 0,
    },
  };
  //   var incomes = [];
  //   var expences = [];
  //   var totalIncomes = 0;
  //   var totalExpenses = 0;
  //
  return {
    addItem: function (type, desc, val) {
      var item, id;
      if (data.allItems[type].length === 0) id = 1;
      else {
        id = data.allItems[type][data.allItems[type].length - 1].id + 1;
      }
      if (type === "inc") {
        item = new Income(id, desc, val);
      } else {
        item = new Expence(id, desc, val);
      }
      data.allItems[type].push(item);
      //   console.log("Item add");
    },
  };
})();
// contact controller
var appController = (function (uiCtrl, fnCtrl) {
  //
  var ctrlAddItem = function () {
    //1. oruulgh ugugdul delgetsnees olj avna
    var input = uiController.getInput();
    console.log(input);

    financeController.addItem(input.type, input.description, input.value);
    //2. olj avsan sanhuuloo oruulno
    //3. olj absan web deer gargana
    //4. musviig tootsoolno
    //5. uldegdel gargana
  };
  var setupEvenyList = function () {
    var DOM = uiController.getDOMstrings();
    document.querySelector(DOM.addBtn).addEventListener("click", function () {
      //
      ctrlAddItem();
    });

    document.addEventListener("keypress", function (event) {
      //
      if (event.keyCode === 13 || event.which === 13) {
        //
        ctrlAddItem();
      }
    });
  };

  return {
    init: function () {
      console.log("Application started");
      setupEvenyList();
    },
  };
})(uiController, financeController);

appController.init();
