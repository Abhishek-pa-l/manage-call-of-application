sap.ui.define(
    [
        "sap/ui/core/mvc/Controller",
        "sap/ui/model/json/JSONModel"
    ],
    function(BaseController,JSONModel) {
      "use strict";
  
      return BaseController.extend("com.sap.managecalloffapp.controller.View3", {
        onInit: function() {
          let logModel = new JSONModel([{
            "logDateTime": "2024-04-01",
            "logTitle": "KPO Dept Commented",
            "logComments": "Point No 3 in MOM adjusted.",
            "loggedBy": "User@kpo.kz",

        },
        {
            "logDateTime": "2024-04-05",
            "logTitle": "Supplier Commented",
            "logComments": "Describe more on point 3 in MOM Attached",
            "loggedBy": "supplier@gmail.com",

        },
        {
            "logDateTime": "2024-04-09",
            "logTitle": "Process Started",
            "logComments": "MoM Registered",
            "loggedBy": "VQ@kpo.kz",

        }]);

        this.getView().setModel(logModel, "logModel");
    
        }
      });
    }
  );
  