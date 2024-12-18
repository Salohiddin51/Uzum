import { Products } from '../../data/productsData';
import { useStore } from '../../store/store';

const Cart = () => {
	const { cart } = useStore();
	const cartItems = cart.map(id =>
		Products.find(product => id == product.productId)
	);
	return (
		<div className='px-36'>
			<div className='border-b pb-5'>
				{cartItems.map(item => (
					<div className='flex gap-4 justify-between'>
						<div className='flex gap-4'>
							<img src={item.images[0]} alt='' className='w-20' />
							<div>
								<p>{item.title}</p>
								<button className='p-2 bg-green-500 rounded-full w-10 h-10'>
									+
								</button>
								<button className='p-2 bg-red-500 rounded-full w-10 h-10'>
									-
								</button>
							</div>
						</div>
						<div>
							<p>{item.sellPrice} so'm</p>
						</div>
					</div>
				))}
			</div>
			<div className='flex justify-end p-2'>
				<p>{cartItems.reduce((acc, item) => acc + item.sellPrice, 0)} so'm</p>
			</div>
		</div>
	);
};
export default Cart;
