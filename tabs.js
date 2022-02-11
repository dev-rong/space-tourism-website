const tabList = document.querySelector('[role="tablist"]');
const tabs = tabList.querySelectorAll('[role="tab"]');

tabList.addEventListener('keydown', changeTab)
tabs.forEach(tab=> {
    tab.addEventListener('click', changeTabPanel)
})
    // console.log(e.keyCode)
    // console.log(e.target)

    let tabFocus = 0;
    function changeTab(e){
        const keydownLeft = 37;
        const keydownRight = 39;

        if(e.keyCode === keydownLeft || e.keyCode === keydownRight){
            tabs[tabFocus].setAttribute("tabindex", -1);
        }

        if(e.keyCode === keydownRight) {
            tabFocus++;
            if(tabFocus >= tabs.length) {
                tabFocus = 0;
            }
        }else if(e.keyCode === keydownLeft) {
            tabFocus--;
            if(tabFocus < 0) {
                tabFocus = tabs.length - 1;
            }
        }

        tabs[tabFocus].setAttribute("tabindex", 0);
        tabs[tabFocus].focus();
    }

    function changeTabPanel(e){
        const targetTab = e.target;
        const targetPanel = targetTab.getAttribute('aria-controls');
        const targetImage = targetTab.getAttribute('data-image');

        const tabContainer = targetTab.parentNode;
        const mainContainer = tabContainer.parentNode; /* flexible than querySelectorAll('#main') */
        console.log(tabContainer)
        tabContainer
        .querySelector('[aria-selected="true"]')
        .setAttribute('aria-selected', false);

        targetTab.setAttribute('aria-selected', true);

        // mainContainer
        // .querySelectorAll('[role="tabpanel"]')
        // .forEach(panel=>panel.setAttribute("hidden", true))
        hideContent(mainContainer, '[role="tabpanel"]')

        // mainContainer.querySelector([`#${targetPanel}`]).removeAttribute('hidden');
        showContent(mainContainer, [`#${targetPanel}`])

        // mainContainer
        // .querySelectorAll('picture')
        // .forEach(picture=>picture.setAttribute("hidden", true))
        hideContent(mainContainer, 'picture')

        // mainContainer.querySelector([`#${targetImage}`]).removeAttribute('hidden');
        showContent(mainContainer, [`#${targetImage}`])
    }
    
    function hideContent(parent, content) {
        parent
        .querySelectorAll(content)
        .forEach(item=>item.setAttribute("hidden", true))
    }

    function showContent(parent, content) {
        parent.querySelector(content).removeAttribute('hidden');
    }
    // change the tabindex of the current tab to -1
    // if the right key is pushed, move to the next tab on the right
    // if the left key is pushed, move to the next tab on the left

    // tabs.forEach = tab => {
    //     if(e.keyCode===keydownRight) {
    //         e.target.attributes[4] = -1
    //         e.target.ariaSelected = "false"
    //     } else if(e.keyCode===keydownLeft){
    //         e.target.attributes[4] = 0
    //         e.target.ariaSelected = "true"
    //     }
    // }

    // const tabIndex = tabs.getAttribute("tabindex")
    // const ariaSelected = tabs.getAttribute("aria-selected")
    // e.target.tabindex = "-1";
    // if(e.keyCode===keydownRight||e.keyCode===keydownLeft){
    //     console.log(tabs)
        // e.target.tabindex = "0";
        // e.target.setAttribute("aria-selected", "true")
    // }

    

