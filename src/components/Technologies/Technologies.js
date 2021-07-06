import React from 'react';
import { DiFirebase, DiReact, DiZend } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () => (
	<Section id="technologies">
		<SectionDivider />
		<br />
		<SectionTitle>Technologies</SectionTitle>
		<SectionText>I have worked with a range of techlogies from Frontend to Backend.</SectionText>
		<List>
			<ListItem>
				<DiReact size="3rem" />
				<ListContainer>
					<ListTitle>Front-end</ListTitle>
					<ListParagraph>
						HTML5 <br />
						CSS3 <br />
						React JS <br />
					</ListParagraph>
				</ListContainer>
			</ListItem>

			<ListItem>
				<DiFirebase size="3rem" />
				<ListContainer>
					<ListTitle>Back-end</ListTitle>
					<ListParagraph>
						Node.js <br />
						Express.js <br />
						Postgresql
						<br />
						Jasmine unit testing
						<br />
						docker
						<br />
					</ListParagraph>
				</ListContainer>
			</ListItem>
		</List>
	</Section>
);

export default Technologies;
