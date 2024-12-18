import { InfinitySpin } from 'react-loader-spinner';
import CarouselComponent from '../../Components/Carousel/CarouselComponent';
import Category from '../../Components/Category/Category';
import { Footer } from '../../Components/Footer/Footer';
import { MainData } from '../../data/mainData';

const Home = () => {
	if (MainData.length == 0)
		return (
			<div className='flex justify-center'>
				<InfinitySpin />
			</div>
		);
	return (
		<div className='dark:bg-dark dark:text-white'>
			<div className='flex justify-center py-5'>
				<CarouselComponent />
			</div>
			{MainData.map((category, index) => {
				if (category.productList.length != 0) {
					return <Category data={category} key={index} />;
				}
			})}

			<Footer />
		</div>
	);
};

export default Home;
