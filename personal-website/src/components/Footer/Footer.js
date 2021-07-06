import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import {
	CompanyContainer,
	FooterWrapper,
	LinkColumn,
	LinkItem,
	LinkList,
	LinkTitle,
	Slogan,
	SocialContainer,
	SocialIconsContainer,
} from './FooterStyles';

const Footer = () => {
	return (
		<FooterWrapper>
			<LinkList>
				<LinkColumn>
					<LinkTitle>Call</LinkTitle>
					<LinkItem href="tel:0810969129">0810969129</LinkItem>
				</LinkColumn>

				<LinkColumn>
					<LinkTitle>Email</LinkTitle>
					<LinkItem href="mailto:makofanethulane53@gmail.com">makofanethulane@gmail.com</LinkItem>
				</LinkColumn>
			</LinkList>

			<SocialIcons href="https://github.com/ThulaneMakofane">
				<AiFillGithub size="3rem" />
			</SocialIcons>

			<SocialIcons href="https://www.linkedin.com/in/thulane-makofane-2475511b2/">
				<AiFillLinkedin size="3rem" />
			</SocialIcons>

			<SocialIcons href="https://www.instagram.com/scottyguytumblr/">
				<AiFillInstagram size="3rem" />
			</SocialIcons>
		</FooterWrapper>
	);
};

export default Footer;
