import React from 'react';
import SellerHeader from "./SellerHeader";
import "../css/seller/SellerProfile.css";
import SellerBody from "./SellerBody";

const SellerProfile = (props) => {
	console.log("props1", props)
	return (
		<div className="seller-profile-container">
			<SellerHeader seller={props.seller} className="seller-header"/>
			<SellerBody  products={props.products}className="seller-body"/>
		</div>
	);
}
export default SellerProfile;