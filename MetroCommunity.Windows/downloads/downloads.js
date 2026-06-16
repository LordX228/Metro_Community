(function () {
    "use strict";

    window.onload = function () {
        document.getElementById("store81").addEventListener("click", showStore81Dialog);
        document.getElementById("store8").addEventListener("click", showStore8Dialog);
    };

    // Окремий поп-ап для 8.1
    function showStore81Dialog() {
        var msg = new Windows.UI.Popups.MessageDialog("Оберіть будь ласка файли:", "Магазин 8.1");

        msg.commands.append(new Windows.UI.Popups.UICommand("Програма", function () {
            Windows.System.Launcher.launchUriAsync(new Windows.Foundation.Uri("https://mega.nz/folder/LvgkwKrK#gnyktrRTOJaMLDDVPXx37A"));
        }));

        msg.commands.append(new Windows.UI.Popups.UICommand("Розблокування Sideloading", function () {
            Windows.System.Launcher.launchUriAsync(new Windows.Foundation.Uri("https://github.com/Iemand005/MetroUnlocker/releases/download/1.0.0/MetroUnlocker.exe"));
        }));

        msg.commands.append(new Windows.UI.Popups.UICommand("Скасувати"));
        msg.showAsync();
    }

    // Окремий поп-ап для 8.0
    function showStore8Dialog() {
        var msg = new Windows.UI.Popups.MessageDialog("Оберіть файли, будь ласка:", "Магазин 8");

        msg.commands.append(new Windows.UI.Popups.UICommand("Програма", function () {
            Windows.System.Launcher.launchUriAsync(new Windows.Foundation.Uri("https://mega.nz/folder/y6B1zY6R#6C33auQyhYNnx43qv2TNHQ"));
        }));

        msg.commands.append(new Windows.UI.Popups.UICommand("Розблокувати Sideloading", function () {
            Windows.System.Launcher.launchUriAsync(new Windows.Foundation.Uri("https://github.com/Iemand005/MetroUnlocker/releases/download/1.0.0/MetroUnlocker.exe"));
        }));

        msg.commands.append(new Windows.UI.Popups.UICommand("Скасувати"));
        msg.showAsync();
    }

    function showVS2013Dialog() {
        var msg = new Windows.UI.Popups.MessageDialog("Оберіть необхідний компонент для Visual Studio 2013:", "Visual Studio 2013");

        // Поп ап для завантаження
        msg.commands.append(new Windows.UI.Popups.UICommand("Завантажити ISO (Installer)", function () {
            Windows.System.Launcher.launchUriAsync(new Windows.Foundation.Uri("https://go.microsoft.com/fwlink/?LinkId=532504&type=ISO&clcid=0x409"));
        }));

        // Поп ап для інструкції
        msg.commands.append(new Windows.UI.Popups.UICommand("Читати інструкцію", function () {
            setImmediate(function () {
                var instr = new Windows.UI.Popups.MessageDialog("Текст інструкції...", "Інструкція");
                instr.showAsync();
            });
        }));

        msg.commands.append(new Windows.UI.Popups.UICommand("Назад"));

        msg.showAsync();
    }

    // Прив'язка до кнопки
    document.getElementById("vs2013-btn").addEventListener("click", showVS2013Dialog);
})();