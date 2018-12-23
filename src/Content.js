import React, { Component } from 'react';
import './style/content.css';
import './style/content_mobile.css';

class Content extends Component {

// image url
// 1: https://images-na.ssl-images-amazon.com/images/I/41b5yBqfnJL.jpg
// 2: https://images-na.ssl-images-amazon.com/images/I/616gdgJ7FAL._UX342_.jpg
// 3: https://images-na.ssl-images-amazon.com/images/I/410o%2BPU9kVL.jpg

  state = {
    activeImg: 1,
    showHidden: false,
  };
  
  imgActive(num) {
    // num is the number of images (1 - 3)
    this.setState({activeImg: num});
  }
  
  showHiddenText() {
    this.setState((prevState, props) => ({
        showHidden: !prevState.showHidden}));
  }
  
  addCart() {
    // everytime user click this button, bag + 1
    this.props.bagNum();
  }

  render() {
    // add css class to the selected images(small)
    let classList1 = "img_small change_pointer";
    let classList2 = "img_small change_pointer";
    let classList3 = "img_small change_pointer";
    let image_large;

    // and conditional render large image
    if (this.state.activeImg === 1) {
      classList1 += " img_selected";
      image_large = <img alt="image_large" src="https://images-na.ssl-images-amazon.com/images/I/41b5yBqfnJL.jpg" className="img_large" />;
    } else if (this.state.activeImg === 2) {
      classList2 += " img_selected";
      image_large = <img alt="image_large" src="https://images-na.ssl-images-amazon.com/images/I/616gdgJ7FAL._UX342_.jpg" className="img_large" />;
    } else {
      classList3 += " img_selected";
      image_large = <img alt="image_large" src="https://images-na.ssl-images-amazon.com/images/I/410o%2BPU9kVL.jpg" className="img_large" />;
    }
    
    // control hidden text
    let hidden_text;
    if (this.state.showHidden) {
      hidden_text = <p className="hidden_details">This is hidden text. This is hidden text. This is hidden text. This is hidden text.</p>;
    }

    return (
        <div className="content">

            <div className="img_list">
                <img onClick={()=>this.imgActive(1)} alt="image1_small" src="https://images-na.ssl-images-amazon.com/images/I/41b5yBqfnJL.jpg" className={classList1} />
                <img onClick={()=>this.imgActive(2)} alt="image2_small" src="https://images-na.ssl-images-amazon.com/images/I/616gdgJ7FAL._UX342_.jpg" className={classList2} />
                <img onClick={()=>this.imgActive(3)} alt="image3_small" src="https://images-na.ssl-images-amazon.com/images/I/410o%2BPU9kVL.jpg" className={classList3} />
            </div>
            {image_large}
            
            <div className="details">
                <div className="item_title">Brushed Gunmetal Olive</div>
                <div className="review_block">
                    <div className="block_elmt underline">6 Reviews</div>
                    <div className="block_elmt underline change_pointer">Add Your Review</div>
                </div>
                <div className="p item_text">This watch is constructed with a sandblasted gunmetal stainless steel case, white face with minimalist silver indexing, and finished with an olive leather band. The Horse logo lettering on dial and at buckle closure.</div>
                <div className="price">$149.00</div>
                <div className="item_details underline">
                    <div>Details & Specifications</div>
                    <div className="span_text change_pointer" onClick={this.showHiddenText.bind(this)}>+</div>
                </div>
                {hidden_text}
                <div className="button change_pointer" onClick={this.addCart.bind(this)}>Add to Cart</div>
            </div>
        
        </div>
    );
  }
}

export default Content;
