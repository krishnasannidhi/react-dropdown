import React,{Component} from 'react'
import ReactDOM from 'react-dom'
import ReactDropdown from './ReactDropdown'

export default class App extends Component{
  constructor(props){
    super(props)
    this.tabData=[
      {label:'Tab 1','id':1},
      {label:'Tab 2','id':2},
      {label:'Tab 3','id':3},
      {label:'Tab 4','id':4}
    ]
    this.labelFunction=this.labelFunction;
    this.tabClickedInParent=this.tabClickedInParent.bind(this)
  }
  render(){
    return(
      <div className="react-drop-down-app">
        <ReactDropdown tabClicked={this.tabClickedInParent}
          datum={this.tabData} isDisplayVertical="true"
          label={this.labelFunction}
          ></ReactDropdown>
      </div>
    )
  }
  labelFunction(d){
    return d.label
  }
  tabClickedInParent(data){
    console.info('tabClickedInParent',data)
  }
}

ReactDOM.render(<App/>,document.getElementById("mainAppContainer"))
