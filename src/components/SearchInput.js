import React from 'react';
import './SearchInput.css'

class SearchInput extends React.Component {
    state= { entry:''};

    onHandle = (event)=>{
        event.preventDefault();
        this.props.onSearchSubmit(this.state.entry);
    }
    render() {
        
        return (
            <div className='container'>
                <form onSubmit={this.onHandle} className='form'>
                    <input className='input' type="text" placeholder='Search...' onChange={(event)=> this.setState({entry:event.target.value}) } value={this.state.entry} /> 
                    
                </form>
            </div>
        )
    }
}

export default SearchInput;