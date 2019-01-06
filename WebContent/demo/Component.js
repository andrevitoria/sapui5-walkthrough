sap.ui.define([
   "sap/ui/core/UIComponent",
   "sap/ui/model/json/JSONModel",
   "demo/walkthrough/controller/HelloDialog"

], function (UIComponent, JSONModel, HelloDialog) {
   "use strict";
   return UIComponent.extend("demo.walkthrough.Component", {	   
	      metadata : {
	            manifest: "json"
	      },
//The init function of the component is automatically invoked by SAPUI5 
//when the component is instantiated. Our component inherits from the base 
//class sap.ui.core.UIComponent and it is obligatory to make the super call 
//to the init function of the base class in the overridden init method. 
      init : function () {
         // call the init function of the parent
         UIComponent.prototype.init.apply(this, arguments);
         // set data model
         var oData = {
            recipient : {
               name : "World"
            }
         };
         var oModel = new JSONModel(oData);
         this.setModel(oModel);
      
         	// set dialog
            //this.getRootControl() get root view
			this._helloDialog = new HelloDialog(this.getRootControl());
		},
		exit : function() {
			this._helloDialog.destroy();
			delete this._helloDialog;
		},
		openHelloDialog : function () {
			this._helloDialog.open();
		}
   });
});