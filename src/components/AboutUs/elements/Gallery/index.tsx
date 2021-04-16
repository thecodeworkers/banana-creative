import React, { useState } from 'react';
import { teamData } from './team';
import styles from './styles.module.scss';

const Gallery = () => {

	const team = teamData;
	const [image, setImage] = useState(null);

	const imageChange = (index) => image == index ? setImage(null) : setImage(index);

	return (
		<>
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

			<style jsx>{`
			 ._yellowCircle {
					width: 12px;
					height: 12px;
					background-color: #FFD400;
					border-radius: 50%;
					margin: 0px 4px 0px 4px;
			 }

			 ._redCircle {
				width: 12px;
				height: 12px;
				background-color: #FF004E;
				border-radius: 50%;
				margin: 0px 4px 0px 4px;
		 }

			._purpleCircle {
				width: 12px;
				height: 12px;
				background-color: #DC08C7;
				border-radius: 50%;
				margin: 0px 4px 0px 4px;
		}
		`}</style>
		</>
	)
};
export default Gallery;

