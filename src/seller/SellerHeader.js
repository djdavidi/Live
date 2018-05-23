import React from 'react';
import "../css/seller/SellerHeader.css";

const SellerHeader = (props) => {
	const {avatarUrl, name, description, specialties} = props.seller;
	return (
		<div className={props.className}>
			<img alt="seller avatar" src={avatarUrl}/>
			<h1 className="seller-name">{name}</h1>
			<div>{description}</div>
			<div>
				<span className="specialties">Specialties:</span>
				{ specialties.map(specialty => <span key={specialty} className="seller-specialty">{specialty}</span>)}
			</div>
		</div>
	);
}
export default SellerHeader;