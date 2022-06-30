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
						I am concerned that I have not done enough.
					</Typography>
					<Button variant="contained" component={Link} noLinkStyle href="/">
						Go to the main page
					</Button>
					<ProTip />
					<Copyright />
				</Box>
			</Container>
		</Layout>
	);
}
