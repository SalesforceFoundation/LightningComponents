({
    handleItemSelected: function (component, event, helper) {
        var value = event.getParam('value');
        var values = component.get('v.values');
        values.push(value);
        component.set('v.values', values);
    },

    handlePillRemove : function(component, event, helper) {
        var index = event.getParam('index');
        var values = component.get('v.values');
        values.splice(index, 1);
        component.set('v.values', values);
    }
})