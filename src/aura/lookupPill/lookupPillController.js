({
    handleRemove : function(component, event, helper) {
        var index = component.get('v.index');
        var removeEvent = component.getEvent('lookupPillRemove');
        removeEvent.setParams({'index': index});
        removeEvent.fire();
    }
})