(function () {
    "use strict";
    var app = WinJS.Application;

    app.onactivated = function (args) {
        if (args.detail.kind === Windows.ApplicationModel.Activation.ActivationKind.launch) {
            args.setPromise(WinJS.UI.processAll().then(function () {
                var aboutBtn = document.getElementById("aboutBtn");
                aboutBtn.addEventListener("click", function () {
                    var msg = new Windows.UI.Popups.MessageDialog(
                        "Сайт буде тільки українською, не вистачило бюджету на перекладачів. " +
                        "Майте при собі перекладач або знання з української мови." +
                        "Сайт зроблений на колінці, прошу пробачати та милувати за помилки в коді",
                        "Про сайт"
                    );
                    msg.showAsync();
                }, false);
            }));
        }
    };
    app.start();
})();