import React, { Component } from 'react';
import Option from '../Option/option'

class Options extends Component{
    
    render() 
    {
        const features = Object.keys(this.props.features).map(key=>
            <Option
                features={this.props.features}
                selected={this.props.itemsSelected}
                key={key}
                name={key}
                onSelect={this.props.handleUpdateSummary}/>)
        return (          
            <section className="main__form">
                <h3>TECH SPECS AND CUSTOMIZATIONS</h3>
                {features}
            </section>
        )       
    }
}

Options.defaultProps ={
    features:{},
    itemsSelected:{},
    selectedItems:{},
}
export default Options;