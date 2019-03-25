// @flow
import Controller from 'sap/ui/core/mvc/Controller';
import MessageToast from 'sap/m/MessageToast';
import JSONModel from 'sap/ui/model/json/JSONModel';
import Events from '../model/events';
import moment from 'moment';

export default Controller.extend("nz.co.foodstuffs.apps.business.stocktake.management.controller.App", {

	onInit: function () {

		const stocktakeEventModel = new JSONModel(Events.stocktakeEvents);
		const view = this.getView();
		view.setModel(stocktakeEventModel, 'StocktakeEvents');

	},

	onClearFilters: function(event) {
		MessageToast.show(event.getSource().getId() + " Pressed");
	},

	onDeleteSelected: function(event) {
		MessageToast.show(event.getSource().getId() + " Pressed");
	},	

    formatDateTime: function (dateTimeString) {
        return moment(dateTimeString).format('LT');
	},	
	
	updateControlWidth: function (iValue) {
		var $DSCContainer = this.byId("sideContentContainer").$();
		if (iValue) {
			$DSCContainer.width(iValue + "%");
		}
	},

});

