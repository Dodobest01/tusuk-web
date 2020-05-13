// Screen controller

var uiController = (function () {
  //
})();

// sanhuu  controller?///////////////////////////////////////
var financeController = (function () {
  //
})();

// contact controller
var appController = (function (uiCtrl, fnCtrl) {
  //
  var ctrlAddItem = function () {
    //1. oruulgh ugugdul delgetsnees olj avna
    console.log("dfgh");
    //2. olj avsan sanhuuloo oruulno
    //3. olj absan web deer gargana
    //4. musviig tootsoolno
    //5. uldegdel gargana
  };
  document.querySelector(".add__btn").addEventListener("click", function () {
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
})(uiController, financeController);
