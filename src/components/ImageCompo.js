import '../css/imageCompo.css';
import React, {Component} from 'react';


class ImageCompo extends Component {
    constructor(props){
        super(props);
         
    }

        render(){
            const {id, discription, urls } = this.props.image;
            return(
                <div className="image-list">
                    <img key={id} src={urls.regular } alt={discription} />
                </div>
            );
        }
}

export default ImageCompo;