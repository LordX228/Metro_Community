(function () {
    "use strict";

    var app = WinJS.Application;
    var activation = Windows.ApplicationModel.Activation;

    app.onactivated = function (args) {
        if (args.detail.kind === activation.ActivationKind.launch) {

            // 1. Инициализация всех элементов UI (ListView, AppBar и т.д.)
            args.setPromise(WinJS.UI.processAll().then(function () {

                // 2. Настройка списка данных для плиток
                var menuData = new WinJS.Binding.List([
                    { title: "Головна" },
                    { title: "Чат" },
                    { title: "Форум" },
                    { title: "Архів" }
                ]);

                // 3. Привязка данных к ListView
                var listView = document.getElementById("storeMenu").winControl;
                if (listView) {
                    listView.itemDataSource = menuData.dataSource;
                    listView.itemTemplate = document.getElementById("itemTemplate");
                }

                // 4. Логика для кнопки AppBar "Про сайт"
                var btnAbout = document.getElementById("btnAbout");
                if (btnAbout) {
                    btnAbout.addEventListener("click", function () {
                        var msg = new Windows.UI.Popups.MessageDialog(
                            "Metro Community v1.0.0.0\n\nПроект для Windows Phone 8.1",
                            "Про сайт"
                        );
                        msg.showAsync();
                    });
                }
            }));
        }
    };

    app.start();
})();