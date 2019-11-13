import React from 'react';
import './menu-item.styles.sass';
import { withRouter } from 'react-router';

export const MenuItem = withRouter(({ title, imageUrl, size, linkUrl, match, history }) => (
	<div className={`${size} menu-item`} onClick={() => history.push(`${match.url}${linkUrl}`)}>
		<div
			className="background-image"
			style={{
				backgroundImage: `url(${imageUrl})`
			}}
		/>
		<div className="content">
			<h1 className="title">{title.toUpperCase()}</h1>
			<span className="subtitle">SHOP NOW</span>
		</div>
	</div>
));
