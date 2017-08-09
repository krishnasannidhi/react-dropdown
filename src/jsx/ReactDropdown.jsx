import React,{Component} from 'react';
import * as d3 from 'd3';


export default class ReactDropdown extends Component{
  constructor(props){
    super(props)
    console.info('props from parent',props)
    this.liDynamicClass=  JSON.parse(props.isDisplayVertical)?'displayVertical':'displayInline'
  }
  render(){
    return(
      <div className="react-drop-down-container">
        <ol className="unordered-list">
          {this.props.datum?this.props.datum.map((item,index,array)=>{

          return  <li onClick={this.tabClicked.bind(this,item)}
                      key={'liChildItem_'+item.id}
                      id={'liChildItem_'+item.id}
                      className={'childItem '+this.liDynamicClass}>

                      <span>{item.label}</span>
                  </li>
          }):'Data not provided'}
          </ol>
      </div>
    )
  }
  tabClicked(data,e){
    //console.info('tabClicked child item & e',data,e)
    this.props.tabClicked(data)
  }
}
