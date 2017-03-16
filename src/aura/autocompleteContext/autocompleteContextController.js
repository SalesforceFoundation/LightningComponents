({
    select : function(component, event, helper) {
        var menuSelectEvent = component.getEvent('menuSelect');
        menuSelectEvent.setParams({
            "selectedItem": component,
            "hideMenu": true,
            "deselectSiblings": true,
            "focusTrigger": true
        });
        menuSelectEvent.fire();
    }
})