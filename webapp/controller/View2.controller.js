sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
    "sap/ui/core/Fragment"

],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, JSONModel, Fragment) {
        "use strict";

        return Controller.extend("com.sap.managecalloffapp.controller.View2", {
            onInit: function () {
                let data = [
                    {
                        "Name": "Laurent Dubois",
                        "JobTitle": "Accounts Payable Manager",
                        "Photo": "/images/Laurent_Dubois.png",
                        "Icon": "sap-icon://activity-individual",
                        "JobResponsibilities": "Plans, organizes and manages the operations and activities of an accounts payables.\nSupervises employees and monitors activities.\nFinal check of accounts payable payments and sign off.\nReporting to the head of finance.\n\n\"I am a diligent person. I put great attention to detail.\"",
                        "HireDate": "Date(1371020400000)"
                    },
                    {
                        "Name": "Sabine Mayer",
                        "JobTitle": "Configuration Expert",
                        "Photo": "/images/Sabine_Mayer.png",
                        "Icon": "sap-icon://settings",
                        "JobResponsibilities": "Implementing new Public Cloud ERP Financials system into his company and keeping it aligned with business.\nDuring the initial set-up of an ERP system: Customizing Financial Accounting settings such as organizational  structures, chart of accounts, and tax configuration (as part of implementation projects).\nDuring the ongoing maintenance of the configuration: Adapting the configuration to organizational and  process changes in business.\n\n\"I’m a versatile person. I keep the big picture in mind.\"",
                        "HireDate": "Date(1376290800000)"
                    },
                    {
                        "Name": "Alain Chevalier",
                        "JobTitle": "Credit Analyst",
                        "Photo": "/images/Alain_Chevalier.png",
                        "Icon": "sap-icon://manager-insight",
                        "JobResponsibilities": "Responsible for a high number of accounts (ca. 4000 customers).\nMonitor the credit risk of his customers.\nFocus on changes in his customer’s credit situation.\nRecurring checks on a regular basis.\nDecide on credit blocked sales orders.\nDecide on credit limits for his customers (according the company’s credit policy).\n\n\"I almost always find a pragmatic solution, that’s acceptable for my customers and my company.\"",
                        "HireDate": "Date(1332403200000)"
                    },
                    {
                        "Name": "Monique Legrand",
                        "JobTitle": "GL Accountant",
                        "Photo": "/images/Monique_Legrand.png",
                        "Icon": "sap-icon://account",
                        "JobResponsibilities": "Ensure and adjust correct structuring of company (e.g. chart of accounts, legal/management entities , profit centers etc. …).\nEnsure accuracy of financial data (profit center data).\nExplain financial data for both compliance and management purposes  (Profit center reporting).\nExecute, check, and explain period-end close.\nIdentify root causes of issues on accounts, track and correct these.\n\n\"I am a diligent person. I  put great attention to detail.\"",
                        "HireDate": "Date(1422777600000)"
                    },
                    {
                        "Name": "John Miller",
                        "JobTitle": "GL Accountant",
                        "Photo": "/images/John_Miller.png",
                        "Icon": "sap-icon://account",
                        "JobResponsibilities": "Ensure and adjust correct structuring of company (e.g. chart of accounts, legal/management entities , profit centers etc. …).\nEnsure accuracy of financial data (profit center data).\nExplain financial data for both compliance and management purposes  (Profit center reporting).\nExecute, check, and explain period-end close.\nIdentify root causes of issues on accounts, track and correct these.\n\n\"I am a diligent person. I  put great attention to detail.\"",
                        "HireDate": "Date(1473404400000)"
                    },
                    {
                        "Name": "Richard Wilson",
                        "JobTitle": "Internal Auditor",
                        "Photo": "/images/Richard_Wilson.png",
                        "Icon": "sap-icon://badge",
                        "JobResponsibilities": "Execute the audit (Setup meeting, request documents, do interview, etc.).\nFinish the report (Working papers, findings).\nFollow up action plans.",
                        "HireDate": "Date(1167638400000)"
                    },
                    {
                        "Name": "Julie Armstrong",
                        "JobTitle": "Internal Auditor",
                        "Photo": "/images/Julie_Armstrong.png",
                        "Icon": "sap-icon://badge",
                        "JobResponsibilities": "Execute the audit (Setup meeting, request documents, do interview, etc.).\nFinish the report (Working papers, findings).\nFollow up action plans.",
                        "HireDate": "Date(1272697200000)"
                    },
                    {
                        "Name": "Donna Moore",
                        "JobTitle": "Expense Controller",
                        "Photo": "/images/Donna_Moore.png",
                        "Icon": "sap-icon://employee",
                        "JobResponsibilities": "Keep Organizational Structure updated.\nOrganize and reorganize related objects into groups Keep object information up-to-date as needed.\nMaintain overhead-related structures and objects so costs can be distributed fairly.\nTrigger cost reposting to properly reflect changes that were not made in time.\n\n\"Everything needs to be as efficient as possible and always correct.\"",
                        "HireDate": "Date(920275200000)"
                    },
                    {
                        "Name": "Elena Petrova",
                        "JobTitle": "Accounts Receivable Accountant",
                        "Photo": "/images/Elena_Petrova.png",
                        "Icon": "sap-icon://employee",
                        "JobResponsibilities": "Responsible for a high number of accounts (ca. 5000 customers).\nCentral contact for all internal and external requests for invoice related issues (e.g. manage disputes on invoices, set dunning blocks). (ca. 15-30 calls per day).\nPost-processing of incoming payments; clearing accounts.\nCollect Cash.\nManage accounting related master data of his customers.\n\n\"I am a diligent person. I put great attention to detail.\"",
                        "HireDate": "Date(1354348800000)"
                    }
                ]


                let atablemodel = new JSONModel(data);
                this.getView().setModel(atablemodel, "myModel")



                var oData = [{
                    ItemCategory: "",
                    Material: "",
                    ShortText: "",
                    MaterialGroup: "",
                    Quantity: "",
                    UOM: "",
                    Price: "",
                    DeliveryDate: "",
                    AccountAssignmentCategory: ""
                }]
                    ;

                let btablemodel = new JSONModel(oData);
                this.getView().setModel(btablemodel, "myModell")

                let suppllier = [{ supNo: "SUP1232345" },
                { supNo: "SUP123235" },
                { supNo: "SUP1223345" }]
                let supplier = new JSONModel(suppllier);
                this.getView().setModel(supplier, "sup")


                let contractData = [{ conNo: "CON20001" },
                { conNo: "CON20002" },
                { conNo: "CON20301" }]
                let contract = new JSONModel(contractData);
                this.getView().setModel(contract, "con")


                let POdata = [{ poNo: "300000" },
                { poNo: "300001" },
                { poNo: "300002" }]
                let PO = new JSONModel(POdata);
                this.getView().setModel(PO, "PO")

                let logModel = new JSONModel([{
                    "logDateTime": "2024-03-30",
                    "logTitle": "Status Changed In Approval",
                    "logComments": "Status Changed In Approval",
                    "loggedBy": "LCD@kpo.kz",

                }, {
                    "logDateTime": "2024-04-01",
                    "logTitle": "LCD Dept Commented",
                    "logComments": "This is my example comment....",
                    "loggedBy": "LCD@kpo.kz",

                },
                {
                    "logDateTime": "2024-04-05",
                    "logTitle": "C&P Dept Commented",
                    "logComments": "This is my example comment....",
                    "loggedBy": "C&P@kpo.kz",

                },
                {
                    "logDateTime": "2024-04-09",
                    "logTitle": "VQ Section Head Commented",
                    "logComments": "This is my example comment....",
                    "loggedBy": "VQ@kpo.kz",

                }]);

                this.getView().setModel(logModel, "logModel");


            },
            onBeforeRendering: function () {
                this._generateTokenforWf();
            },

            onAddItemPress: function () {


                var oModel = this.getView().getModel("myModell");
                let oldData = oModel.getData();


                var oNewRowData = {
                    ItemCategory: "",
                    Material: "",
                    ShortText: "",
                    MaterialGroup: "",
                    Quantity: "",
                    UOM: "",
                    Price: "",
                    DeliveryDate: "",
                    AccountAssignmentCategory: ""
                };

                oldData.push(oNewRowData);
                oModel.setData(oldData);
                oModel.refresh();
            },
            onAddMoreDetails: function () {
                if (!this.AddMoreDetails) {
                    Fragment.load({
                        id: this.getView().getId(),
                        name: "com.sap.managecalloffapp..view.fragment.AddMoreDetails",
                        controller: this
                    }).then(oDialog => {
                        this.AddMoreDetails = oDialog
                        this.getView().addDependent(oDialog)
                        oDialog.open()
                    })
                } else {
                    this.AddMoreDetails.open()
                }
            },
            onCancel: function () {
                this.AddMoreDetails.close();
            },
            supplierHelp: function () {
                if (!this.Supplier) {
                    Fragment.load({
                        id: this.getView().getId(),
                        name: "com.sap.managecalloffapp..view.fragment.Supplier",
                        controller: this
                    }).then(oDialog => {
                        this.Supplier = oDialog
                        this.getView().addDependent(oDialog)
                        oDialog.open()
                    })
                } else {
                    this.Supplier.open()
                }
            },
            onCancelSupplier: function () {
                this.Supplier.close();

            },
            onDelete: function () {
                var oTable = this.byId("idProductsTable");
                var aSelectedItems = oTable.getSelectedContexts();

                // Check if any item is selected
                if (aSelectedItems.length > 0) {
                    // If only one item is selected, delete it directly
                    if (aSelectedItems.length === 1) {
                        var oSelectedItem = aSelectedItems[0];
                        var oModel = oTable.getModel("myModell");
                        var aData = oModel.getData();
                        var iIndex = aData.indexOf(oSelectedItem.getObject());
                        aData.splice(iIndex, 1); // Remove the selected item
                        oModel.setData(aData); // Update the model
                    } else {
                        // If multiple items are selected, delete them one by one starting from the last index
                        for (var i = aSelectedItems.length - 1; i >= 0; i--) {
                            var oSelectedItem = aSelectedItems[i];
                            var oModel = oTable.getModel("myModell");
                            var aData = oModel.getData();
                            var iIndex = aData.indexOf(oSelectedItem.getObject());
                            aData.splice(iIndex, 1); // Remove the selected item
                            oModel.setData(aData); // Update the model
                        }
                    }

                    // Clear the selection after deletion
                    oTable.removeSelections();

                }
            },
            contractHelp: function () {
                if (!this.contract) {
                    Fragment.load({
                        id: this.getView().getId(),
                        name: "com.sap.managecalloffapp..view.fragment.Contract",
                        controller: this
                    }).then(oDialog => {
                        this.contract = oDialog
                        this.getView().addDependent(oDialog)
                        oDialog.open()
                    })
                } else {
                    this.contract.open()
                }
            },
            onCancelContract: function () {
                this.contract.close();

            },
            onAddFromDocument: function () {
                if (!this.PO) {
                    Fragment.load({
                        id: this.getView().getId(),
                        name: "com.sap.managecalloffapp..view.fragment.ListOfPO",
                        controller: this
                    }).then(oDialog => {
                        this.PO = oDialog
                        this.getView().addDependent(oDialog)
                        oDialog.open()
                    })
                } else {
                    this.PO.open()
                }
            },
            onCancelPO: function () {
                this.PO.close();

            },
            onSubmit: function () {
                let that = this;
                debugger;
                const oPayload = {
                    "definitionId": "eu10.development-and-test-kjejpj21.postaward.cONApproval",
                    "context": {
                        "contype": "CON",
                        "supplier": "SUP134000",
                        "contract": "CON78600",
                        "startdate": "2024-05-30",
                        "enddate": "2024-06-30"
                    }
                }
                let sURL;
                if (this.appModulePath.length > 5) {
                    sURL = this.appModulePath + "/spa/workflow/rest/v1/workflow-instances";
                }
                else {
                    sURL = "/workflow/rest/v1/workflow-instances";
                }
                $.ajax({
                    url: sURL,
                    method: "POST",

                    data: JSON.stringify(oPayload),
                    async: false,
                    headers: {
                        "X-CSRF-Token": that.tokenWF,
                        "Content-Type": "application/json"
                    },
                    success: function (result1) {
                        debugger;
                        sap.m.MessageBox.success("Sent For Approval");
                        

                    }.bind(this),
                    error: function (oError) {
                        sap.m.MessageBox.error("Technical error occured.")
                    }.bind(this)
                });

            },
            _generateTokenforWf: function () {
                // this.getModel("appModel").setProperty("/busy", true);
                const appId = this.getOwnerComponent().getManifestEntry("/sap.app/id");
                const appPath = appId.replaceAll(".", "/");
                this.appModulePath = jQuery.sap.getModulePath(appPath);
                let that = this;
                let sURL;
                if (this.appModulePath.length > 5) {
                    sURL = this.appModulePath + "/spa/workflow/rest/v1/xsrf-token";
                }
                else {
                    sURL = "/rest/v1/xsrf-token";
                }
                $.ajax({

                    url: sURL,
                    method: "GET",
                    async: false,
                    headers: {
                        "X-CSRF-Token": "Fetch"
                    },
                    success: function (result1, xhr1, data1) {
                        that.tokenWF = data1.getResponseHeader("x-csrf-token");
                        console.log(that)
                    }
                });
            },



        });
    });
