import * as React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import ProTip from "../src/ProTip";
import Link from "../src/Link";
import ResponsiveAppBar from "../components/navbar";
import Copyright from "../src/Copyright";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Layout from "../components/layout";

const theme = createTheme();

export default function About() {
	return (
		<Layout>
			<Container maxWidth="md">
				<Box sx={{ my: 4 }}>
					<Typography variant="h4" component="h1" gutterBottom>
						Profile
					</Typography>

					<Typography gutterBottom>
						I have worked in the digital field for over 20 years after leaving
						university in 1995 passing degrees in Social Science (BA),
						Development Studies (MA) and Computing (Conversion Msc).
					</Typography>

					<Typography gutterBottom>
						My first job in the then emerging internet field was for
						Ministryofsound.com, where I spent three years developing and
						maintaining their innovative website and digital products in its
						early days. Working in a small team using HTML / JavaScript / ASP /
						SQL and other technologies to develop for cross browser usability.
					</Typography>

					<Typography gutterBottom>
						The next substantial part of my early career was spent at EMAP
						developing and maintaining FHM.com - a large, innovative and
						successful men's lifestyle website and its associated digital
						products. Again working in a close knit medium sized team using HTML
						/ CSS / JavaScript / ASP / SQL and other technologies.
					</Typography>

					<Typography gutterBottom>
						Both of these work experiences helped establish my collaborative,
						knowledge sharing, solution driven approach to digital development,
						and a belief that this environment is necessary to produce the best
						and most robust digital products.
					</Typography>

					<Typography gutterBottom>
						The last 10 years have seen me focus largely in the Front End arena
						of Mobile and Web development. Continuing to use the many evolving
						technologies, working in some amazing teams, to produce a variety of
						cutting edge products. I continue to enjoy the challenges that are
						presented with trying to create great robust digital products in
						collaborative teams. Be they large or small. In the process I am
						always seeking to further develop my own knowledge and skills, and
						hoping to share knowledge and encourage others to grow.
					</Typography>

					<Typography gutterBottom>
						The last 5 months I have been working at Little Emperors, a private
						members hotel club, offering access to preferred rates and benefits
						at hotels around the globe, primarily working on their Website and
						Mobile Application. Working with React.js, React Native, backend
						API's and many JS libraries and design patterns.
					</Typography>

					<Typography gutterBottom>
						Before this I enjoyed 9 months working at Omni Property Finance Ltd
						in the finance sector developing an in house loan management React
						based web application.
					</Typography>

					<Typography gutterBottom>
						The previous year was working at Pancentric Ltd, a media agency
						focused in the insurance sector. Producing and maintaining various
						existing sites and .NET driven CMS’s, as well as prototyping a
						product called Goinsur - A single page React based web application.
						The Year before this I worked on what was my first commercial
						React/Redux project. Developing a sophisticated data driven web app.
						Utilizing many javascript libraries including D3, and gsap, within a
						React/Redux environment.
					</Typography>

					<Typography gutterBottom>
						I have now been working primarily in Node, React/Redux based
						environments for over 4 years, in 4 different positions. Getting
						amazing experiences, all positive in terms of my learning curve
						within the mobile/web development and Javascript ecosystem,
						particularly working with React.js in a Redux environment.
					</Typography>

					<Typography gutterBottom>
						I am very focused on wanting to continue to grow my knowledge and
						experience with javascript and React.js and its surrounding
						ecosystem of related javascript utilities and design ideas. However
						I am keen to continue learning, and sharing knowledge, in all areas
						of Mobile/Web Development.
					</Typography>

					<Button
						variant="contained"
						component={Link}
						noLinkStyle
						href="https://docs.google.com/document/d/1oScQEpf8-Uhx_kHiEnuO5eFQplhyNgvr20LvteyRMbk/edit?usp=sharing"
						target="_blank"
					>
						Go to CV on Google Docs
					</Button>

					<Copyright />
				</Box>
			</Container>
		</Layout>
	);
}
