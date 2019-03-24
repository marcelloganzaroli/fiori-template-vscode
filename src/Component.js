sap.ui.define(["sap/ui/core/UIComponent", "sap/ui/core/ComponentSupport"], function(UIComponent) {
	"use strict";
	return UIComponent.extend("nz.co.foodstuffs.apps.business.stocktake.management.Component", {
		metadata: {
			manifest: "json"
		},
		init: function() {
            sap.ui.core.UIComponent.prototype.init.apply(this, arguments);
            sap.ui.loader.config({
               
                map: {
                    '*': {
                        'moment': './modules/moment/moment'
                    },
                },
                shim: {
                    './modules/moment/moment': {
                        amd: true,
                        exports: 'moment'
                    }
                },
        
                // activate real async loading and module definitions
                async: true
            });
        }
	});
});
