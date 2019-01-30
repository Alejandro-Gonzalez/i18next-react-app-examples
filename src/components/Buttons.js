import React from 'react';

const types = ['simple component', 'function component', 'hoc component'];

const Buttons = ({ onClick, active }) => (
	<div className="buttons">
		{types.map((type, idx) => (
			<button
				className={`${active === idx + 1 ? 'active' : ''}`}
				key={type}
				onClick={() => onClick(idx + 1)}
			>
				{type.toUpperCase()}
			</button>
		))}
	</div>
);

export default Buttons;
