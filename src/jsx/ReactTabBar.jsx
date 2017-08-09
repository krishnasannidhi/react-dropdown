import React,{Component} from 'react';
import * as d3 from 'd3';


export default class ReactTabBar extends Component{
  constructor(props){
    super(props)
    console.info('props from parent',props)
    this.liDynamicClass=  JSON.parse(props.isDisplayVertical)?'displayVertical':'displayInline'
  }
  render(){
    return(
      <div className="react-tab-bar-container">
        <ol className="unordered-list">
          {this.props.datum?this.props.datum.map((item,index,array)=>{

          return  <li onClick={this.tabClicked.bind(this,item)}
                      key={'liChildItem_'+item.id}
                      id={'liChildItem_'+item.id}
                      className={'childItem '+this.liDynamicClass}>

                      <div>{this.labelFn.bind(this,item)()}</div>
                  </li>
          }):'Data not provided'}
          </ol>
      </div>
    )
  }
  tabClicked(data,e){
    this.props.tabClicked(data)
  }
  labelFn(item){
    if(this.props.label){
      return this.props.label(item)
    }
    else{
      return item.label
    }
  }
}
