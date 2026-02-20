sap.ui.define([
    "sap/ui/core/mvc/Controller"
], (Controller) => {
    "use strict";

    return Controller.extend("dmsui.controller.View1", {
        onInit() {

        },
        getBaseURL: function () {
            var appId = this.getOwnerComponent().getManifestEntry("/sap.app/id");
            var appPath = appId.replaceAll(".", "/");
            var appModulePath = jQuery.sap.getModulePath(appPath);
            return appModulePath;
        },
        onTrigger: function () {
            debugger
            jQuery.ajax({
                url: this.getBaseURL()+"/browser/0648bb78-88ca-4e7d-a999-087eecf8fbe4/root?objectId=ed1a4d9100fc836a5b03a266&cmisselector=children&filter=cmis:name",
                method: "GET",
                contentType: "application/json",
                success: function (data) {
                    console.log(data)
                },
                error: function (err) {
                    console.error("CAPM update failed", err);
                }
            });

        }
    });
});