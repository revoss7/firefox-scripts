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
