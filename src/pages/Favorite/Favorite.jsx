import Card from '../../Containers/Card/Card';
import { Products } from '../../data/productsData';
import { useStore } from '../../store/store';

const Favorite = () => {
	const { favorite, addToFavorite, removeFromFavorite } = useStore();
	const favorites = favorite.map(id =>
		Products.find(product => id == product.productId)
	);
	return (
		<div>
			<div className='flex gap-5 justify-center flex-wrap '>
				{favorites.map(product => (
					<Card product={product} key={product.productId} />
				))}
			</div>
		</div>
	);
};
export default Favorite;
