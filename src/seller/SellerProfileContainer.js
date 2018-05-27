// Container, so all of state
import React, { Component } from 'react';
import SellerPage from "./SellerPage";
import axios from "axios";

class SellerProfileContainer extends Component {
	constructor(props) {
		super(props);
		const url = "https://www.placecage.com/200/200";

		this.state = {
			products: [],
			reviews: [],
			seller: {
				name: "Ongo Gablogian",
				description: "Selling only the highest quality, most rare and premium gifs",
				avatarUrl: url,
				specialties: ["Gifs:: 1", "Gifs:: 2", "Gifs:: 3"]
			}
		}
	}
	componentDidMount() {
		const arr = [1,2,3,4,5];
		let gifs = arr.map(e => {
			return axios.get("https://api.giphy.com/v1/gifs/random?api_key=HujwHHYTGdsoAGYMmSU2GKJnU392Bjgn&tag=&rating=PG-13");
		})
		Promise.all(gifs)
		.then(res => {
			let prod = res.map(d => d.data.data);
			prod = [...prod, ...prod, ...prod, ...prod];
			this.setState({products: prod.concat(prod)});
		})
	}

	render() {
		const {products, seller} = this.state;
		return (
			<SellerPage products={products} seller={seller}/>
		);
	}
}
export default SellerProfileContainer;