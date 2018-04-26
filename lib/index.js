import "regenerator-runtime"
import React from "react"
import { render } from "react-dom"
import { observer } from "mobx-react"
import store from "./store.js"

@observer
class NeverBored extends React.Component{
  render () {
    return (
      <div>
        <h1>Never Bored</h1>
        <p>Kid(s): I&apos;m bored!</p>
        <p>You: Okay. Here&apos;s your new job:</p>
        <h2>{this.props.store.activity}</h2>
        <input id="refresh" type="button"
          value="Refresh" onClick={this.onRefreshClick} />
      </div>
    )
  }

  onRefreshClick = () => {
    this.props.store.refresh()
  }
}

const mainEl = document.createElement("main")

render(
  <NeverBored store={ store } />,
  mainEl
)

document.body.appendChild(mainEl)
