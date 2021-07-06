import React, { useState, useRef, useEffect } from 'react';

import {
	CarouselButton,
	CarouselButtonDot,
	CarouselButtons,
	CarouselContainer,
	CarouselItem,
	CarouselItemImg,
	CarouselItemText,
	CarouselItemTitle,
	CarouselMobileScrollNode,
} from './TimeLineStyles';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { TimeLineData } from '../../constants/constants';

const Timeline = () => {
	return (
		<Section id="about">
			<SectionDivider />
			<br />
			<SectionTitle>About Me</SectionTitle>
			<SectionText>
				There’s nothing I enjoy more than developing good websites for nice people. It is really that simple. I
				am a team player passionate about the journey that does not end, called learning. I’ve spent many years
				trying to perfect what I do and while I’ll never be perfect, I do my best to come close. If you’ve got a
				project you’d like to work on with me just get in touch and we can get to work!
			</SectionText>
		</Section>
	);
};

export default Timeline;
