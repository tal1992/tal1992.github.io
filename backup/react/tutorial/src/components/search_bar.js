import React, { Component } from 'react';


class Searchbar extends Component{
    constructor(){
        super();
        this.state = {'term':''};
    }
    render = () =>{
    return (
        <div className="form-group">
            <input className="form-control input-lg"
            value={this.state.term}
            placeholder="Search Video"
            onChange={(e) => { this.props.onInputEnter(e.target.value); this.setState({term:e.target.value}); }  } />
        </div>
    );
    }

}

export default Searchbar;