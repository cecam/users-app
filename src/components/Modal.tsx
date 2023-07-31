import { FC, useContext } from 'react'
import { Dialog } from '@headlessui/react'
import { motion, AnimatePresence } from 'framer-motion'

import { CurrentUserContext } from '../context/CurrentUserContext'

const Modal: FC = () => {
	const { currentUser, setCurrentUser } = useContext(CurrentUserContext)

	return (
		<AnimatePresence>
			{currentUser && (
				<Dialog
					open={currentUser ? true : false}
					onClose={() => setCurrentUser(null)}
					as='div'
					className='fixed inset-0 z-10 flex flex-items-center justify-center overflow-y-auto'
				>
					<div className='flex flex-col py-8 px-4 text-center'>
						<Dialog.Overlay />
						<div
							className='fixed inset-0 transition-opacity'
							aria-hidden='true'
						>
							<div className='absolute inset-0 bg-gray-500 opacity-75'></div>
						</div>

						<motion.div
							initial={{ scale: 0.75, opacity: 0 }}
							animate={{
								scale: 1,
								opacity: 1,
								transition: { duration: 0.15, ease: 'easeOut' },
							}}
							exit={{
								scale: 0.75,
								opacity: 0,
								transition: { duration: 0.15, ease: 'easeIn' },
							}}
							className='flex intems-end justify-center min-h-[380px] pt-4 px-4 pb-20 text-center sm:block sm:p-0'
						>
							<span
								className='hidden sm:inline-block sm:align-middle sm:h-screen'
								aria-hidden='true'
							>
								&#8203;
							</span>

							<div
								className='inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full'
								role='dialog'
								aria-modal='true'
								aria-labelledby='modal-headline'
							>
								<div className='bg-white px-4 pt-5 pb-4 w-[320px] sm:p-6 sm:pb-4'>
									<div className='sm:flex sm:items-start'>
										<div className='mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10'>
											<img
												className='rounded-full'
												src={currentUser.picture.large}
												alt={`${currentUser.name.first} ${currentUser.name.last}`}
											/>
										</div>
										<div className='mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left'>
											<Dialog.Title
												as='h3'
												className='text-lg leading-6 font-medium text-gray-900'
												id='modal-headline'
											>
												{currentUser.name.first} {currentUser.name.last}
											</Dialog.Title>
											<div className='mt-2'>
												<Dialog.Description
													as='p'
													className='text-sm text-gray-500'
												>
													{currentUser.location.country}
												</Dialog.Description>
											</div>
										</div>
									</div>
								</div>
								<div className='bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse'>
									<button
										type='button'
										tabIndex={0}
										className='mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm'
										onClick={() => setCurrentUser(null)}
									>
										Cancel
									</button>
								</div>
							</div>
						</motion.div>
					</div>
				</Dialog>
			)}
		</AnimatePresence>
	)
}

export default Modal
