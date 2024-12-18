import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { BsMoonFill, BsSunFill } from 'react-icons/bs';
import { CiLocationOn } from 'react-icons/ci';
import { FaChevronDown } from 'react-icons/fa';
import { IoIosListBox, IoIosSearch, IoMdHeartEmpty } from 'react-icons/io';
import { MdOutlineShoppingBag } from 'react-icons/md';
import { VscAccount } from 'react-icons/vsc';
import { Link } from 'react-router-dom';
import { useStore } from '../../store/store';

const Navbar = () => {
	const { t, i18n } = useTranslation();
	const { favorite, cart } = useStore();
	const [language, setLanguage] = useState('ru');
	const [darkMode, setDarkMode] = useState(() => {
		const saqlangan = localStorage.getItem('darkMode');
		return saqlangan ? saqlangan : false;
	});

	useEffect(() => {
		localStorage.setItem('darkMode', darkMode);
		if (darkMode) {
			document.documentElement.classList.add('dark');
		} else {
			document.documentElement.classList.remove('dark');
		}
	}, [darkMode]);

	function changeLanguage() {
		if (language === 'uz') {
			i18n.changeLanguage('ru');
			setLanguage('ru');
		} else {
			i18n.changeLanguage('uz');
			setLanguage('uz');
		}
	}

	return (
		<div>
			<div className=' '>
				<div className='flex px-32 bg-slate-100 dark:bg-dark dark:text-white justify-between'>
					<div className='flex items-center'>
						<CiLocationOn />
						<p className='underline pl'>Тaшкент city</p>
						<p className='pl-5 font-semibold'>{t('pick-up point')}</p>
					</div>

					<div className=' '>
						<a
							className='pr-2 text-purple-500 font-semibold border-r-2'
							href=''
						>
							Стать продавцом
						</a>
						<a className='pl-2 text-purple-500 font-semibold' href=''>
							Открыть пункт выдачи
						</a>
						<a className='pl-4' href=''>
							Вапрос-ответ
						</a>
						<a className='pl-4' href=''>
							Мои заказы
						</a>
						<button className='pl-4' onClick={changeLanguage}>
							{language == 'uz' ? 'Uzbek' : 'Russian'}
						</button>
					</div>
				</div>

				<div className='px-32 pt-5 flex items-center dark:bg-dark dark:text-white'>
					<Link to={'/'}>
						<img
							className='w-60 '
							src='https://uzum.com/images/services/market-horizontal-logo.png'
							alt=''
						/>
					</Link>
					<button className='ml-10 flex items-center gap-2 bg-[#ceccff] text-[#7f4dff] rounded-md p-2'>
						<IoIosListBox className='size-5' />
						Каталог
					</button>

					<div className='ml-2 h-[42px] border-2 rounded-md  flex justify-between items-center w-[520px]'>
						<p className='ml-5 text-gray-500 '> Искать товары и котегории</p>
						<div className=' w-20 h-[42px] rounded-md flex items-center justify-center bg-[#edeff2]  '>
							<IoIosSearch className='size-5 ' />
						</div>
					</div>

					<div className='flex gap-4 pl-10 '>
						<Link
							className='flex items-center gap-2 text-lg hover:bg-gray-100'
							to={'/auth'}
						>
							<VscAccount className='size-5' />
							Войти
						</Link>
						<Link
							className='flex items-center gap-2 text-l hover:bg-gray-100 relative'
							to={'/favorite'}
						>
							<IoMdHeartEmpty className='size-6' />
							Избранное
							<span className='absolute -right-2 -top-1 text-sm text-uzum'>
								{favorite.length == 0 ? '' : favorite.length}
							</span>
						</Link>
						<Link
							className='flex items-center gap-2 text-lg hover:bg-gray-100 relative'
							to={'/cart'}
						>
							<MdOutlineShoppingBag className='size-5 ' />
							Корзина
							<span className='absolute -right-2 -top-1 text-sm text-uzum'>
								{cart.length == 0 ? '' : cart.length}
							</span>
						</Link>
						<button
							className='flex items-center gap-2 text-lg hover:bg-gray-100'
							onClick={() => setDarkMode(!darkMode)}
						>
							{darkMode ? (
								<>
									<BsSunFill className='size-5' />
									Light
								</>
							) : (
								<>
									<BsMoonFill className='size-5 ' />
									Dark
								</>
							)}
						</button>
					</div>
				</div>

				<div className='px-32 pt-5 flex items-center gap-[14px] dark:bg-dark dark:text-white'>
					<a className='flex gap-1' href=''>
						<img
							className='w-[24px]'
							src='https://static.uzum.uz/fast_categories/every1.png'
							alt=''
						/>
						<p>Выгода каждый день </p>
					</a>
					<div className=' flex  gap-[14px] text-gray-500'>
						<a href=''>Электроника</a>
						<a href=''>Бытовая техника</a>
						<a href=''>Одежда</a>
						<a href=''>Обувь</a>
						<a href=''>Аксессуары</a>
						<a href=''>Красота и уход</a>
						<a href=''>Здоровье</a>
						<a href=''>Товары для дома</a>
						<a href=''>Строительство и ремонт</a>
						<button className='flex items-center gap-1'>
							Ещё
							<FaChevronDown className='size-3' />
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
