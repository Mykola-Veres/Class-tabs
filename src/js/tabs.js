import { Tabs } from "./class-tabs";

const tabsFirst = new Tabs ({
  rootSelector: "#tabs-1",
  currentActiveControlItem: "controls__item--active",
  activePanePanel: "pane--active",
  activeTab: 2,
})

const secondTabs = new Tabs ({
  rootSelector: "#tabs-3",
  currentActiveControlItem: "controls__item--active",
  activePanePanel: "pane--active",
  activeTab: 1,
})

const thTabs = new Tabs ({
  rootSelector: "#tabs-2",
  currentActiveControlItem: "controls__item--active",
  activePanePanel: "pane--active",
  activeTab: 3,
})
// const refs = {
//   control: document.querySelector("#tabs-1 [data-controls]"),
//   panes: document.querySelector("#tabs-1 [data-panes]"),
// }
// refs.control.addEventListener("click", ((event) => {
//   event.preventDefault;    
//   if(event.target.nodeName !== "A") { console.log("false")
//     return}
// const currentActiveControlItem = refs.control.querySelector(".controls__item--active") 
//     if (currentActiveControlItem) {
//     currentActiveControlItem.classList.remove("controls__item--active")
//     const controld = getPaneId(currentActiveControlItem)  
//     const pane = findPaneById(controld)
//     pane.classList.remove('pane--active')
//   }
//   const controlItem = event.target;
//   controlItem.classList.add("controls__item--active")
//   const controld = getPaneId(controlItem)
//   const paneId = findPaneById(controld)
//   paneId.classList.add("pane--active")
// }))
// function getPaneId (elementId) {
//   return elementId.getAttribute("href").slice(1)
// }
// function findPaneById(id){
//   return refs.panes.querySelector(`#${id}`)
// }