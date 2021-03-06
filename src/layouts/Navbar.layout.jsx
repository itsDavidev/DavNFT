import WalletIcon from '../components/icons/Wallet.icon';
import logo from '../assets/itsDavidev.svg';
import { Link } from 'react-router-dom';

const Navbar = () => {
	const isActive = false;

	return (
		<div className='p-2 sticky top-0 z-20 left-0'>
			<nav className='bg-nav p-2  flex justify-around items-center rounded-2xl'>
				<Link to='/'>
					<img src={logo} alt='logo.svg' />
				</Link>

				<div>
					<ul className='flex flex-row gap-2 font-bold text-purple'>
						<li>
							<Link to='/collections'>Collections</Link>
						</li>
						<li>Events</li>
						<li>Assets</li>
						<li>Bundles</li>
					</ul>
				</div>

				<div className='flex flex-row gap-4'>
					{isActive ? (
						<button className='bg-gradient-to-r  from-purple to-gray-500 py-2 px-4 rounded-xl font-bold text-black relative hover:-top-1 hover:duration-1000   transition ease-in-out'>
							crated by you
						</button>
					) : (
						<Link
							to='/marketplace/sign-in'
							className='bg-gradient-to-r  from-purple to-gray-500 py-2 px-4 rounded-xl font-bold text-black relative hover:-top-1 hover:duration-1000   transition ease-in-out'>
							Sign In
						</Link>
					)}

					<button
						// onClick={() => toogle.on()}
						className=' relative flex items-center gap-2 bg-gradient-to-r to-gray-500 from-purple py-2 px-4 rounded-xl  font-bold text-black hover:-top-1 transition hover:duration-1000 ease-in-out hover:delay-1000'>
						<WalletIcon color='#000' width='16' />
						<span>Wallet</span>
					</button>
				</div>
			</nav>
		</div>
	);
};

export default Navbar;
