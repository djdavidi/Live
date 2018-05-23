import React from 'react';
import "../css/seller/SellerBody.css";
const arr = [1,2,3,4,5];
// using index for key just because i have duplicate elements to fill up page
function Product({products}) {
	return (
		products.map((e, i) => {
			return (
			<div className="product-image-container" key={i}>
				<div className="product-image-overlay">
					<div>{e.title}</div>
					<div>Add to cart</div>
				</div>
				<img alt="gif" src={e.fixed_width_downsampled_url}/>
			</div>
			);
		})
	)
}

function Review() {
	return (
		arr.map(e => {
			return (
			<div className="seller-review-item" key={e}>
				<div className="seller-reviewer-item-header">David S. - 4/5</div>
				<div>Greatest gifs ever, would give 5 stars but I dislike the name David</div>
			</div>
			);
		})
	);
}
const SellerBody = (props) => {

	return (
		<div className={props.className}>
			
			<div className="seller-products">
				<Product products={props.products}/>
			</div>
			
			<div className="seller-reviews">
				<h1>Reviews</h1>
				<Review/>
			</div>

		</div>
	);
}
export default SellerBody;