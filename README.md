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

### As a developer, I want to use a component that I have not used before.
1. **Add a new remote**
    1. Right Click Remotes Menu in the sidebar  
	![Adding New remote](https://cloud.githubusercontent.com/assets/4258978/21665089/73d38858-d29f-11e6-8ff1-18f714726aee.png)
    2. Enter a name and the remote URL: 
    ![Enter remote URL](https://cloud.githubusercontent.com/assets/4258978/21665128/a03b3d0a-d29f-11e6-84c4-c7174f0c8b7a.png)
    3. You should see the new remote added to the list in this window:
    ![Note the new Remote](https://cloud.githubusercontent.com/assets/4258978/21665130/a8335df8-d29f-11e6-87e3-fd009fb8464b.png)
    5. See the new remote in the list
    ![See new remote listed](https://cloud.githubusercontent.com/assets/4258978/21665136/b2b8efb8-d29f-11e6-9716-24433558675d.png)

2. **Fetch the new remote:**
    ![Fetch new remote](https://cloud.githubusercontent.com/assets/4258978/21665139/b933c732-d29f-11e6-8434-b675cc4dcc28.png)

3. **Merge lightningcomponents/autocomplete (or your desired component) into your working branch**
    ![Pull remote branch into local repo](https://cloud.githubusercontent.com/assets/4258978/21665285/8447286a-d2a0-11e6-9ba8-6b852448f9ac.png)
        1. Note: In some cases you may need to manually pull the remote branch (in this case autocomplete) into your working branch as seen in this screenshot:
        	![Manual Pull](https://cloud.githubusercontent.com/assets/4258978/21665159/e05c6c24-d29f-11e6-969b-b91fafe4a22b.png)

4. **Deploy Metadata to your development org**
    ![Deploy Metadata](https://cloud.githubusercontent.com/assets/4258978/21665205/114d5b5e-d2a0-11e6-97d2-4064253c7daa.png)
