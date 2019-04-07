import '../css/imageCompo.css';
import React, {Component} from 'react';


class ImageCompo extends Component {
    constructor(props){
        super(props);
        
        this.state = {
            spans: 0
        }

        this.imageRef = React.createRef();
    }

    componentDidMount(){
        this.imageRef.current.addEventListener('load', this.setSpans)
    }

    setSpans = () => {
     const height = this.imageRef.current.clientHeight;

     const spans = Math.ceil(height / 5 + 1);

     this.setState({ spans });

    }
        render(){

            const { discription, urls } = this.props.image;
            return (
                <div style={{gridRowEnd: `span ${this.state.spans}`}}>
                    <img 
                    ref={this.imageRef} 
                    src={urls.regular } 
                    alt={discription} />
                </div>
            );
        }
}

export default ImageCompo;