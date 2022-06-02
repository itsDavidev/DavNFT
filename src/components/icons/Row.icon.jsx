function RowIcon({ color, width = '21', height = '14', style }) {
	return (
		<>
			<svg
				className={style}
				width={width}
				height={height}
				viewBox='0 0 21 14'
				fill='none'
				xmlns='http://www.w3.org/2000/svg'>
				<path
					d='M19.9209 7.6364C20.2723 7.28493 20.2723 6.71508 19.9209 6.36361L14.1933 0.63604C13.8418 0.284569 13.272 0.284569 12.9205 0.63604C12.569 0.987512 12.569 1.55736 12.9205 1.90883L18.0117 7L12.9205 12.0912C12.569 12.4426 12.569 13.0125 12.9205 13.364C13.272 13.7154 13.8418 13.7154 14.1933 13.364L19.9209 7.6364ZM-7.86805e-08 7.9L19.2845 7.9L19.2845 6.1L7.86805e-08 6.1L-7.86805e-08 7.9Z'
					fill={color}
				/>
			</svg>
		</>
	);
}

export default RowIcon;
