import React from 'react';
import SellerHeader from "./SellerHeader";
import "../css/seller/SellerPage.css";
import SellerBody from "./SellerBody";

const SellerPage = (props) => {
	console.log("props1", props)
	return (
		<div className="seller-profile-container">
			<SellerHeader seller={props.seller} className="seller-header"/>
			<SellerBody  products={props.products}className="seller-body"/>
		</div>
	);
}
export default SellerPage;