({
    handleInputChange: function(component) {
        this.setListVisibility(component, false);

        var keyword = component.find('input').get('v.value');
        var context = component.get('v.currentContextValue');

        // IE 11 fires the input event when we tab off,
        // causing it to reopen.
        //
        // if this event is fired and the element is not focused, ignore
        if (component.get('v.inputFocused')) {
            component.set('v.keyword', keyword);

            if (!keyword) {
                // user has cleared the textbox, so clear our results
                component.set('v.items', []);
                return;
            }

            this.setListVisibility(component, true);
            component.set('v.showLoadingIndicator', true);

            var dataProvider = component.get('v.dataProvider')[0];

            dataProvider.provide(
                keyword,
                context,
                $A.getCallback(function (err, results) {
                    if (!component || !component.isValid()) {
                        return;
                    }
                    if (err) {
                        component.set('v.showLoadingIndicator', false);
                        throw err;
                    }
                    var currentKeyword = component.get('v.keyword');
                    var currentContext = component.get('v.currentContextValue');
                    // only refresh the list if this callback is still relevant
                    if (results.keyword == currentKeyword && results.context == currentContext) {
                        component.set('v.items', results.items);
                        component.set('v.showLoadingIndicator', false);
                    }
                })
            );

        }
    },

    setListVisibilityDelayed: function (component, visible) {
        var helper = this;
        if (component._focus) {
            component._focus(
                $A.getCallback(
                    function() {
                        if (component && component.isValid()) {
                            helper.setListVisibility(component, visible);
                        }
                    }
                ),
                250 // too small a number caused issues in IE and Firefox on Windows
            );
        } else {
            helper.setListVisibility(component, visible);
        }
    },

    setListVisibility: function (component, visible) {
        var listComponent = component.find('list');
        $A.util.toggleClass(listComponent, "slds-hide", !visible);
        component.set('v.isListVisible', visible);
    },

    toggleContextMenu: function (component) {
        component.set('v.showContextMenu', !component.get('v.showContextMenu'));
    },

    detectCurrentContext: function (contextOptions) {
        return contextOptions.reduce(
            function (selected, item, {}) {
                if (!selected || (item.isValid() && item.get('v.selected'))) {
                    return item;
                } else {
                    return selected;
                }
            }
        );
    },

    updateCurrentContext: function (component) {
        var contextOptions = component.get('v.contextOptions');
        var currentContext = this.detectCurrentContext(contextOptions);
        if (currentContext && currentContext.isValid()) {
            component.set('v.currentContextLabel', currentContext.get('v.label'));
            component.set('v.currentContextValue', currentContext.get('v.context'));
            component.set('v.currentContextIconName', currentContext.get('v.iconName'));
        }
    },

})