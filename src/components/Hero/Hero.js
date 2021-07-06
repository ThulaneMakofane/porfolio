import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
	<Section row nopadding>
		<LeftSection>
			<SectionTitle main center>
				Hi i am Scott. <br />
				welcome to my Portfolio
			</SectionTitle>
			<SectionText>I am a Web Application Developer that does Frontend and Backend.</SectionText>
			<Button>
				LearnMore<a href="about"></a>
			</Button>
		</LeftSection>
	</Section>
);

export default Hero;
