import React from 'react';
import axios from 'axios';
import SearchInput from './components/SearchInput';
import './App.css';
import ImageList from './components/ImageList';

class App extends React.Component {
  state = { images: []}

   onSearchSubmit = async (entry)=> {
     const response = await axios.get (`https://pixabay.com/api/?key=37690526-5ad27b8dbdfb1c70126f997ae&q=${entry}&image_type=photo `);
     this.setState({images:response.data.hits})
    }
    

    render() { 
      return (
        <>
         <div className='center'>
           <SearchInput onSearchSubmit={this.onSearchSubmit} />
         </div>
         <div className='centerr'>
          <ImageList images={this.state.images} />
         </div>
        </>
      )
    }
  
}

export default App;
