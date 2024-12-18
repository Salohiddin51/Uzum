import {
	Button,
	Card,
	Checkbox,
	Input,
	Typography,
} from '@material-tailwind/react';
import { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { BiHide, BiShow } from 'react-icons/bi';

const Auth = () => {
	const [passwordShow, setPasswordShow] = useState(false);
	const {
		register,
		handleSubmit,
		formState: { errors },
		control,
	} = useForm();
	function sendData(formaniMalumoti) {
		console.log(formaniMalumoti);
	}
	function changePasswordShow() {
		setPasswordShow(!passwordShow);
	}
	return (
		<div className='flex justify-center dark:text-black'>
			{/* <form
				onSubmit={handleSubmit(sendData)}
				className='flex flex-col gap-2 p-4'
			>
				<input
					type='email'
					className='p-2 rounded-md'
					{...register('email', { required: true, minLength: 5 })}
				/>
				{errors.email && (
					<p className='text-red-600 m-0 text-center text-xs'>
						email kiritilishi shart!
					</p>
				)}
				<input
					type='password'
					className='p-2 rounded-md'
					{...register('password', {
						required: true,
						pattern:
							/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/,
					})}
				/>
				{errors.password?.type == 'required' && (
					<p className='text-red-600 m-0 text-center text-xs'>
						parol kiritilishi shart!
					</p>
				)}
				{errors.password?.type == 'pattern' && (
					<>
						<p className='text-red-600 m-0 text-center text-xs'>
							Parol kamida 8 ta harf, bitta katta Harf
						</p>
						<p className='text-red-600 m-0 text-center text-xs'>kamida 1 son</p>
						<p className='text-red-600 m-0 text-center text-xs'>
							kamida 1 simvol
						</p>
					</>
				)}
				<input type='submit' className='bg-green-400 p-2 rounded-md' />
			</form> */}
			<Card color='transparent' shadow={false}>
				<Typography variant='h4' color='blue-gray'>
					Sign Up
				</Typography>
				<Typography color='gray' className='mt-1 font-normal'>
					Nice to meet you! Enter your details to register.
				</Typography>
				<form
					className='mt-8 mb-2 w-80 max-w-screen-lg sm:w-96'
					onSubmit={handleSubmit(sendData)}
				>
					<div className='mb-1 flex flex-col gap-6'>
						<Typography variant='h6' color='blue-gray' className='-mb-3'>
							Your Name
						</Typography>
						<Controller
							name='name'
							control={control}
							render={({ field }) => (
								<Input
									size='lg'
									placeholder='name@mail.com'
									className=' !border-t-blue-gray-200 focus:!border-t-gray-900'
									labelProps={{
										className: 'before:content-none after:content-none',
									}}
									{...field}
								/>
							)}
						/>
						<Typography variant='h6' color='blue-gray' className='-mb-3'>
							Your Email
						</Typography>
						<Controller
							name='email'
							control={control}
							render={({ field }) => (
								<Input
									size='lg'
									placeholder='name@mail.com'
									className=' !border-t-blue-gray-200 focus:!border-t-gray-900'
									labelProps={{
										className: 'before:content-none after:content-none',
									}}
									{...field}
								/>
							)}
						/>
						<Typography variant='h6' color='blue-gray' className='-mb-3'>
							Password
						</Typography>
						<div className='relative'>
							<Controller
								name='password'
								control={control}
								render={({ field }) => (
									<Input
										type={passwordShow ? 'text' : 'password'}
										size='lg'
										placeholder='********'
										className=' !border-t-blue-gray-200 focus:!border-t-gray-900'
										labelProps={{
											className: 'before:content-none after:content-none',
										}}
										{...field}
									/>
								)}
							/>
							{passwordShow ? (
								<BiShow
									className='absolute right-3 top-3'
									size={18}
									onClick={changePasswordShow}
								/>
							) : (
								<BiHide
									className='absolute right-3 top-3'
									size={18}
									onClick={changePasswordShow}
								/>
							)}
						</div>
					</div>
					<Controller
						name='terms'
						control={control}
						render={({ field }) => (
							<Checkbox
								label={
									<Typography
										variant='small'
										color='gray'
										className='flex items-center font-normal'
									>
										I agree the
										<a
											href='#'
											className='font-medium transition-colors hover:text-gray-900'
										>
											&nbsp;Terms and Conditions
										</a>
									</Typography>
								}
								containerProps={{ className: '-ml-2.5' }}
								{...field}
							/>
						)}
					/>
					<Button className='mt-6' fullWidth type='submit'>
						sign up
					</Button>
					<Typography color='gray' className='mt-4 text-center font-normal'>
						Already have an account?{' '}
						<a href='#' className='font-medium text-gray-900'>
							Sign In
						</a>
					</Typography>
				</form>
			</Card>
		</div>
	);
};
export default Auth;
