import React, {Component} from 'react';
import SearchBar from './SearchBar';
import unsplash from '../api/unsplash'
import ImageList from './ImageList';

class App extends Component {
    state = {
        images: []
    }
    onSubmitForm = async (term) => {
   const response = await unsplash.get('/search/photos',{
            params: {query: term,per_page: 20}
        })
        console.log(response)
        this.setState({ images: response.data.results})
    }

    render(){
        return (
            <div className="ui container">
                <h1>Shearch Image</h1>
                <SearchBar on={this.onSubmitForm}/>
                Found: {this.state.images.length} in the request.
                <ImageList images={this.state.images} />
            </div>
        );
    }
}

export default App;

