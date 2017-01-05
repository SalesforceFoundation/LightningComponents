# Proposed Component Repository Workflow

We have a need to synchronize changes made to Lightning Components as we re-use those components in multiple different projects.

This repository is for each component to be shared, and then merge changes from this repository into projects where the component is being used.  Changes can be pushed back to this repository, as well.

In the example use cases below, we'll assume that there is an 'autocomplete' component that has been created on a unique branch in this repository. The autocomplete component's latest version is reflected in the `autocomplete/master` branch.

## Command Line Examples:

### As a developer, I want to use a component that I have not used before.

    git remote add lightningcomponents git@github.com:SalesforceFoundation/LightningComponents.git
    git fetch lightningcomponents
    git merge lightningcomponents/autocomplete/master

### As a developer, I want to see how my copy of a component differs from the latest version of the component

    git fetch lightningcomponents
    git diff HEAD...lightningcomponents/autocomplete/master

### As a developer, I want to retrieve the latest updates to a component (and I have no conflicting local modifications)

    git fetch lightningcomponents
    git merge lightningcomponents/autocomplete/master

### As a developer, I want to retrieve the latest updates to a component (and I want to overwrite my local modifications)

    git fetch lightningcomponents
    git merge -s recursive -X theirs lightningcomponents/autocomplete/master

### As a developer, I want to make changes to a component locally and share those changes with other developers

    git fetch lightningcomponents
    git checkout -b feature/my-autocomplete-update lightningcomponents/autocomplete/master
    <edit some files>
    git add <new/modified files>
    git commit -m "Adding a new feature to autocomplete component"
    git push lightningcomponents HEAD
    <open pull request in Github>
    git checkout dev    # you likely do not want to commit other work to this branch, so don't forget to switch batch to main line!
    
## Examples Using Source Tree

- Coming Soon
- See Source Tree Draft Document Here: https://salesforce.quip.com/aFkgA62paWeh

### As a developer, I want to use a component that I have not used before.
**Add a new remote**

1. Right Click Remotes Menu in the sidebar
2. [Image: file:///-/blob/HJOAAAPcwl5/l_NFClTBFcQgxWl2PBEE7w]
3. Enter a name and the remote URL:
    1. [Image: file:///-/blob/HJOAAAPcwl5/TQoA67D5OIT8W7FocDTKvw]
4. You should see the new remote added to the list in this window:
    1. [Image: file:///-/blob/HJOAAAPcwl5/h-Ia9RMYGz7mWMqelAgqiQ]
5. See the new remote in the list
6. [Image: file:///-/blob/HJOAAAPcwl5/HvwtssM5X0BU2OMlRrcxAw]

**Fetch the new remote:**

1. [Image: file:///-/blob/HJOAAAPcwl5/-pKQtfU2-rYUHGKsknytNA]

**Merge lightningcomponents/autocomplete (or your desired component) into your working branch**

1. [Image: file:///-/blob/HJOAAAPcwl5/jcGTX1lTigZTnqEn5BMRRg]
    1. In some cases you may need to manually pull the remote branch (in this case autocomplete) into your working branch as seen in this screenshot:
    2. [Image: file:///-/blob/HJOAAAPcwl5/GJ-BRb0y-4fSdgo4J1FQKw]

**Deploy Metadata to your development org**

1. [Image: file:///-/blob/HJOAAAPcwl5/ebyX5379cXfsYSSN8tE3Pw]



