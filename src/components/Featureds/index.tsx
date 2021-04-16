import React from 'react';
import { FeaturedRight, FeaturedLeft } from './elements';
import { dataOne, dataTwo, dataThree, dataFour, dataFive } from '../../../public/data';

const Featureds = () => (
	<>
		<FeaturedLeft
			imageDescription={dataOne.imageDescription}
			date={dataOne.date}
			keywords={dataOne.keywords}
			title={dataOne.title}
			number={dataOne.number}
			description={dataOne.description}
			descriptionTwo={dataOne.descriptionTwo}
			descriptionThree={dataOne.descriptionThree}
			descriptionFour={dataOne.descriptionFour}
			image={dataOne.image}
			transition={true}
			id={dataOne.id}
		/>
		<FeaturedRight
			imageDescription={dataTwo.imageDescription}
			date={dataTwo.date}
			keywords={dataTwo.keywords}
			title={dataTwo.title}
			subtitle={dataTwo.subtitle}
			number={dataTwo.number}
			description={dataTwo.description}
			descriptionTwo={dataTwo.descriptionTwo}
			descriptionThree={dataTwo.descriptionThree}
			descriptionFour={dataTwo.descriptionFour}
			image={dataTwo.image}
			id={dataTwo.id}
		/>
		<FeaturedLeft
			imageDescription={dataThree.imageDescription}
			date={dataThree.date}
			keywords={dataThree.keywords}
			title={dataThree.title}
			number={dataThree.number}
			description={dataThree.description}
			descriptionTwo={dataThree.descriptionTwo}
			descriptionThree={dataThree.descriptionThree}
			descriptionFour={dataThree.descriptionFour}
			image={dataThree.image}
			id={dataThree.id}
		/>
		<FeaturedRight
			imageDescription={dataFour.imageDescription}
			date={dataFour.date}
			keywords={dataFour.keywords}
			title={dataFour.title}
			subtitle={dataFour.subtitle}
			number={dataFour.number}
			description={dataFour.description}
			descriptionTwo={dataFour.descriptionTwo}
			descriptionThree={dataFour.descriptionThree}
			descriptionFour={dataFour.descriptionFour}
			image={dataFour.image}
			id={dataFour.id}
		/>
		<FeaturedLeft
			imageDescription={dataFive.imageDescription}
			date={dataFive.date}
			keywords={dataFive.keywords}
			title={dataFive.title}
			number={dataFive.number}
			description={dataFive.description}
			descriptionTwo={dataFive.descriptionTwo}
			descriptionThree={dataFive.descriptionThree}
			descriptionFour={dataFive.descriptionFour}
			image={dataFive.image}
			id={dataFive.id}
		/>
	</>
);

export default Featureds;
