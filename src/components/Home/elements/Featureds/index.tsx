import React from 'react';
import  FeaturedRight  from '../FeaturedRight';
import  FeaturedLeft  from '../FeaturedLeft';
import { dataOne, dataTwo, dataThree, dataFour, dataFive, dataSix } from '../../../../../public/data';

const Featureds = () => (
	<>
		<FeaturedLeft
			imageDescription={dataOne.imageDescription}
			date={dataOne.date}
			keywords={dataOne.keywords}
			title={dataOne.title}
			image={dataOne.image}
			transition={true}
			id={dataOne.id}
		/>
		<FeaturedRight
			imageDescription={dataTwo.imageDescription}
			date={dataTwo.date}
			keywords={dataTwo.keywords}
			title={dataTwo.title}
			image={dataTwo.image}
			id={dataTwo.id}
		/>
		<FeaturedLeft
			imageDescription={dataThree.imageDescription}
			date={dataThree.date}
			keywords={dataThree.keywords}
			title={dataThree.title}
			image={dataThree.image}
			id={dataThree.id}
		/>
		<FeaturedRight
			imageDescription={dataFour.imageDescription}
			date={dataFour.date}
			keywords={dataFour.keywords}
			title={dataFour.title}
			image={dataFour.image}
			id={dataFour.id}
		/>
		<FeaturedLeft
			imageDescription={dataFive.imageDescription}
			date={dataFive.date}
			keywords={dataFive.keywords}
			title={dataFive.title}
			image={dataFive.image}
			id={dataFive.id}
		/>
		<FeaturedRight
			imageDescription={dataSix.imageDescription}
			date={dataSix.date}
			keywords={dataSix.keywords}
			title={dataSix.title}
			image={dataSix.image}
			id={dataSix.id}
		/>
	</>
);

export default Featureds;
