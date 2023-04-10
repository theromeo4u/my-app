import React,{Component} from "react";
class PropsInClass extends React.Component{
    render()
    {
        return (
            <div>
            <h3>Props in ClassComp {this.props.name}</h3>
            </div>
        )
    }
}

export default PropsInClass;