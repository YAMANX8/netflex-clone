const tabItems = document.querySelectorAll(".tab-item");
const tabContentItems = document.querySelectorAll(".tab-content-item");

function openNewTab() {
    // removing the previews actions
    tabItems.forEach(item => item.classList.remove("tab-border"));
    tabContentItems.forEach(item => item.classList.remove("show"));

    //now adding the red underline for the tab
    this.classList.add("tab-border");

    //now showing the content itself
    const tabContentItem = document.querySelector(`#${this.id}-content`);
    tabContentItem.classList.add("show");
}

// adding an event listener for each tab item
tabItems.forEach(item => item.addEventListener("click", openNewTab));
//item here referr to each node in the nodeList so, it is the parameter of the function
