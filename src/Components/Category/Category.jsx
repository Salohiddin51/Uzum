import Card from '../../Containers/Card/Card';
const Category = ({ data }) => {
	if (!data) return null;

	return (
		<div>
			<h1 className='ml-32 text-3xl py-3 font-bold'>{data.title}</h1>
			<div className='flex gap-5 justify-center flex-wrap '>
				{data.productList.map(product => (
					<Card product={product} key={product.productId} />
				))}
			</div>
		</div>
	);
};
export default Category;
