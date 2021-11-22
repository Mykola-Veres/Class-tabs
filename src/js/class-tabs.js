export class Tabs {
  constructor({rootSelector,
    currentActiveControlItem = "active",
    activePanePanel = "active",
    activeTab = 1
}){
    this._refs = this._getRefs(rootSelector)
    this._bindEvent()
    this._currentActiveControlItem = currentActiveControlItem
    this._activePanePanel = activePanePanel
    this._activeTab = activeTab - 1
    this._setActiveTab()
  }
  _getRefs (root) {
    const refs = {}
    refs.control = document.querySelector(`${root} [data-controls]`);
    refs.panes = document.querySelector(`${root} [data-panes]`);
    return refs
  }  
  _bindEvent (){
    this._refs.control.addEventListener("click", this._onControlClick.bind(this),)
  }
  _setActiveTab(){
    const controlItem = this._refs.control.querySelectorAll("a")  
    const controls = controlItem[this._activeTab]  
    controls.classList.add(this._currentActiveControlItem)
    
    const controld = this._getPaneId(controls)
    this._setActivePanePanel(controld)     
  }
  _setActivePanePanel(controld){
    const paneId = this._findPaneById(controld)
  paneId.classList.add(this._activePanePanel) 
  }

  _removeActivePane(controld) {
    const pane = this._findPaneById(controld)
    pane.classList.remove(this._activePanePanel)
  }

  _removeActiveTab() {
    const currentActiveControlItem = this._refs.control.querySelector(
    `.${this._currentActiveControlItem}` )   

    if (!currentActiveControlItem) {return}

      currentActiveControlItem.classList.remove(this._currentActiveControlItem)
      const controld = this._getPaneId(currentActiveControlItem)
      this._removeActivePane(controld)      
    }
  

  _onControlClick (event){    
    event.preventDefault;    
  if(event.target.nodeName !== "A") { console.log("false")
    return}  
  this._removeActiveTab()   
  const controlItem = event.target;
  controlItem.classList.add(this._currentActiveControlItem)
  const controld = this._getPaneId(controlItem)
  this._setActivePanePanel(controld)  
  }

    _getPaneId (elementId) {
      return elementId.getAttribute("href").slice(1)
    }
    _findPaneById(id){
      return this._refs.panes.querySelector(`#${id}`)
    }
}