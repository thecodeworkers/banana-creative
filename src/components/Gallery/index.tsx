import React, { useState } from 'react';
import { teamData } from './team';
import styles from './styles.module.scss';

const Gallery = () => {

	const team = teamData;
	const [image, setImage] = useState(null);

	const imageChange = (index) => image == index ? setImage(null) : setImage(index);

	return (
		<div className={styles._generalGallery}>
			{
				team.map((item, index) => {
					return (
						<div className={styles._teamPhoto}
							style={{ backgroundImage: `url(${item.img})` }}
							onClick={() => imageChange(index)}
							key={index}
						>
							<div className={styles._teamDescription}>
								<ul className={styles._teamList}>
									<li className={styles._teamName}> {item.name} </li>
									<li className={styles._teamPosition}> {item.position} </li>
									<li className={styles._itemRow}> {item.skills[0].title}
										<div className={styles._circlesParent}>
											{
												item.skills[1].circles.map((skill, index) => {
													return (<div className={skill} key={index}></div>)
												})
											}
										</div>
									</li>
								</ul>
							</div>
						</div>
					)
				})
			}

		</div>
	)
};
export default Gallery;

// style={{backgroundImage: `url(${item.img})`}}
{/* <div className='_teamPhoto'  style={{backgroundImage: `url(${require('../../../assets/images/team/portrait.jpg')})`}} >
				<div className='_teamDescription'>
					<ul className='_teamList'>
						<li>Andrea González </li>
						<li>Co-founder / CEO & Art Director </li>
						<li className='_itemRow'>All creative fields
							<div className='_circlesParent'>
								<div className='_yellowCircle'></div>
								<div className='_redCircle'></div>
								<div className='_purpleCircle'></div>
							</div>
						</li>
					</ul>
				</div>
			</div> */}

