import createActivity from "./create-activity.js"
import { observable } from "mobx"

class Store {
  @observable activity

  constructor () {
    this.refresh()
  }

  refresh() {
    this.activity = createActivity()
  }
}

const store = new Store()

export default store
