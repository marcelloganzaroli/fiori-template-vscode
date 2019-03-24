'use strict';

sap.ui.define(['sap/ui/core/mvc/Controller', 'sap/ui/model/json/JSONModel', '../model/events', 'moment'], function (Controller, JSONModel, __Events, __moment) {
	function _interopRequireDefault(obj) {
		return obj && obj.__esModule && typeof obj.default !== "undefined" ? obj.default : obj;
	}

	var Events = _interopRequireDefault(__Events);

	var moment = _interopRequireDefault(__moment);

	var __exports = Controller.extend("nz.co.foodstuffs.apps.business.stocktake.management.controller.App", {

		onInit: function onInit() {

			var stocktakeEventModel = new JSONModel(Events.stocktakeEvents);
			var view = this.getView();
			view.setModel(stocktakeEventModel, 'StocktakeEvents');
		},

		formatDateTime: function formatDateTime(dateTimeString) {
			return moment(dateTimeString).format('LLLL');
		}

	});

	return __exports;
});