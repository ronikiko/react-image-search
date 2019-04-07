import React, {Component} from 'react';
import ImageCompo from './ImageCompo';


class ImageList extends Component {
   
    render(){
        const fullImages = this.props.images.map(image => {
            return <div key={image.id} style={{float: 'left', width: '250px'}}>
                    <ImageCompo image={image} />
                    </div>
        })
        return (
            <div>
               {fullImages}
            </div>
        );
    }
}

export default ImageList;