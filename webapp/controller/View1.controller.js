sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller,JSONModel) {
        "use strict";

        return Controller.extend("com.sap.managecalloffapp.controller.View1", {
            onInit: function () {
                let data =[
                   {
                    "CoN":"Axpo213",
                    "Desc":"Description",
                    "sd":"1/04/2024",
                    "ed":"1/11/2025",
                    "status":"ok"
                   },
                   {
                    "CoN":"Axpo213",
                    "Desc":"Description",
                    "sd":"1/04/2024",
                    "ed":"1/11/2025",
                    "status":"ok"
                   }, {
                    "CoN":"Axpo213",
                    "Desc":"Description",
                    "sd":"1/04/2024",
                    "ed":"1/11/2025",
                    "status":"ok"
                   }
                ]
               
                let tabelmodel = new JSONModel(data);
                this.getView().setModel(tabelmodel, "myModel");

            },
            onNav : function(){
                this.getOwnerComponent().getRouter().navTo("RouteView2")
            }
        });
    });
