import React from 'react';
import { FaChevronDown, FaChevronRight, FaRegHeart } from 'react-icons/fa';
import { IoMdCheckmark } from 'react-icons/io';
import { useParams } from 'react-router-dom';
import { Rating } from 'react-simple-star-rating';
import { Products } from '../../data/productsData';
const ProductInfo = () => {
	const { id } = useParams();
	const {
		images,
		title,
		rating,
		fullPrice,
		sellPrice,
		productId,
		reviewsQuantity,
		ordersQuantity,
	} = Products.find(product => product.productId == id);
	const discount = Math.round(100 - sellPrice / (fullPrice / 100));
	return (
		<div className='px-32 flex dark:bg-dark dark:text-white'>
			<div>
				<h2 className='text-2xl font-bold w-[700px] py-2 '>{name}</h2>
				<div className='flex py-2 items-center'>
					<p>{rating}</p>
					<Rating
						readonly
						initialValue={rating}
						SVGstyle={{ display: 'inline-block' }}
						allowFraction
						size={15}
						transition
					/>
					<p>. 5 фото . +500 заказов</p>
				</div>
				<div className='flex'>
					<div className=''>
						{images.map(image => (
							<img src={image} className='w-[60] h-[80px] rounded-lg py-1' />
						))}

						<FaChevronDown className='size-3 ml-[20px]' />
					</div>
					<div className='flex gap-2 pl-5'>
						<img
							className='rounded-2xl w-[350px] h-[450px]'
							src={images[0]}
							alt=''
						/>
						<img
							className='rounded-2xl w-[350px] h-[450px]'
							src={images[1]}
							alt=''
						/>
					</div>
				</div>
			</div>
			<div className='pl-10'>
				<div className='border-2 rounded-xl p-5  mt-10'>
					<div>
						<div className='flex items-center'>
							<p className='text-4xl font-medium'>{sellPrice} сум</p>
							<p className='text-gray-500 pl-2 line-through '>
								{fullPrice} сум
							</p>
						</div>
						<div className='flex gap-2 py-3'>
							<div className='bg-orange-500 w-11 rounded-3xl flex items-center justify-center text-white text-xs font-medium'>
								-{discount}%
							</div>
							<div className='bg-orange-500 w-20 rounded-3xl flex items-center justify-center text-white text-xs font-medium'>
								Распродажа
							</div>
						</div>
					</div>
					<div className='bg-gray-200 py-3 px-2 rounded-lg w-[350px] flex items-center justify-between '>
						<div className='flex items-center gap-1'>
							<div className='bg-[#ff0] p-1 rounded-lg font-medium'>
								От 112 270 сум/мес
							</div>
							<p>в расрочку</p>
						</div>
						<FaChevronRight className='size-3 text-gray-400' />
					</div>

					<div className='flex  items-center gap-3 py-3'>
						<div className='bg-gray-200 py-3 px-20 rounded-lg'>
							<p className='text-lg '>Купить в 1 клик</p>
						</div>
						<div className='bg-gray-200 py-[18px] px-[18px] rounded-lg'>
							<FaRegHeart />
						</div>
					</div>

					<div className='bg-[#7f4dff] py-4 px-[85px] text-white font-medium text-lg rounded-lg'>
						Добавить в корзину
					</div>

					<div className='my-2 flex items-center gap-2'>
						<div className='bg-[#d7f5dd] p-1 rounded-md'>
							<IoMdCheckmark />
						</div>
						<p>В наличии {Math.round(Math.random() * 100 + 10)}</p>
					</div>

					<div className='my-2 flex items-center gap-2'>
						<div className='rounded-md'>
							<img
								className='w-6'
								src='https://ke-images.servicecdn.ru/static/product-action/badge_bought.png'
								alt=''
							/>
						</div>
						<p>{ordersQuantity} человек купили на этой неделе</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ProductInfo;
