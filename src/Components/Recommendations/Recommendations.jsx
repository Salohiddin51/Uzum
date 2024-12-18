import React from 'react';
import Card from '../../Containers/Card/Card';
const Recommendations = ({ data }) => {
	if (!data) return null;

	return (
		<div className='flex gap-5 justify-center flex-wrap '>
			{data.productList.map(product => (
				<Card product={product} key={product.key} />
			))}
		</div>
	);
};

export default Recommendations;
