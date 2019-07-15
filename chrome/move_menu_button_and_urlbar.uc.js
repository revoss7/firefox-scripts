gBrowser.tabContainer.addEventListener('dblclick', function(event) {
    var browser = Components.classes["@mozilla.org/appshell/window-mediator;1"].getService(Components.interfaces.nsIWindowMediator);
	var mw = browser.getMostRecentWindow("navigator:browser");
	mw.gBrowser.reloadTabs(mw.gBrowser.tabs);
});

(function () {
    gBrowser.tabContainer.addEventListener('mouseover', function self(event) {
        if ((self.target = event.target).localName === 'tab'
            && !self.target.selected
            && !self.target.pinned) {

        if (!self.timeoutID) {
            this.addEventListener('mouseout', function () {
                clearTimeout(self.timeoutID)
                self.timeoutID = null;
            }, false);
        }
        self.timeoutID = setTimeout(function () {
            gBrowser.selectedTab = self.target;
        }, 50);
    }
}, false)
}());
document.getElementById('urlbar').addEventListener('click',
   function(e){
      if(e.button===0 )
         goDoCommand('cmd_copy');
   },
   false
);
(function() {
    let movable = [
        "back-button",
        "forward-button",
        "urlbar-container",
    ];
    
    for(let id of movable) {
        try {
            document.getElementById(id).setAttribute("removable", "true");
        } catch(e) {}
    }
})();

Components.utils.import("resource:///modules/CustomizableUI.jsm");
var {Services} = Components.utils.import("resource://gre/modules/Services.jsm", {});
var sss = Components.classes["@mozilla.org/content/style-sheet-service;1"].getService(Components.interfaces.nsIStyleSheetService);

(function(){
    let widgetId = "movable-PanelUI-button";
    
    let listener = {
        onWidgetCreated: function(aWidgetId, aArea) {
            if (aWidgetId != widgetId)
                return;
            
            if(listener.css !== undefined)
                sss.unregisterSheet(listener.css, sss.AGENT_SHEET);
            
            listener.css = Services.io.newURI("data:text/css;charset=utf-8," + encodeURIComponent('\
#' + aWidgetId + '{\
    list-style-image: url("chrome://browser/skin/menu.svg");\
}\
#PanelUI-button {\
    display: none !important;\
}\
'), null, null);
            
            sss.loadAndRegisterSheet(listener.css, sss.AGENT_SHEET);
        }
    }
    
    CustomizableUI.addListener(listener);
    CustomizableUI.createWidget({
        id: widgetId,
        type: "button",
        defaultArea: CustomizableUI.AREA_NAVBAR,
        label: "Main menu",
        tooltiptext: "Open menu",
        onCreated: function(node) {
            let originalMenu = node.ownerDocument.defaultView.PanelUI;
            
            // helper function to not repeat so much code
            function setEvent(event) {
                node.addEventListener(event, function(){
                    originalMenu.menuButton = node;
                }, {"capture": true});
                node.addEventListener(event, originalMenu);
            }
            
            setEvent("mousedown");
            setEvent("keypress");
        }
    });
})();
