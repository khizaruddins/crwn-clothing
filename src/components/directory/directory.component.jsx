import React from 'react';
import { MenuItem } from '../menu-item/menu-item.component';
import './directory.styles.sass';

export class Directory extends React.Component {
	constructor() {
		super();
		this.state = {
			sections: [
				{
					title: 'hats',
					imageUrl:
						'https://images.pexels.com/photos/1751150/pexels-photo-1751150.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260',
					id: 1
				},
				{
					title: 'jackets',
					imageUrl:
						'https://images.pexels.com/photos/1839564/pexels-photo-1839564.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260',
					id: 2
				},
				{
					title: 'sneakers',
					imageUrl:
						'https://images.pexels.com/photos/1124466/pexels-photo-1124466.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260',
					id: 3
				},
				{
					title: 'womens',
					imageUrl:
						'https://images.pexels.com/photos/285171/pexels-photo-285171.jpeg?cs=srgb&dl=beautiful-clothes-eyewear-285171.jpg&fm=jpg',
					size: 'large',
					id: 4
				},
				{
					title: 'mens',
					imageUrl:
						'https://images.pexels.com/photos/211050/pexels-photo-211050.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
					size: 'large',
					id: 5
				}
			]
		};
	}
	render() {
		return (
			<div className="directory-menu">
				{this.state.sections.map(({ title, imageUrl, id, size }) => {
					return <MenuItem title={title} key={id} imageUrl={imageUrl} size={size} />;
				})}
			</div>
		);
	}
}
