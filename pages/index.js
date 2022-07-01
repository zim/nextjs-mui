import * as React from "react";
import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import ProTip from "../src/ProTip";
import Link from "../src/Link";
import Copyright from "/src/Copyright";
import ResponsiveAppBar from "../components/navbar";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme();

export default function Index() {
	return (
		<ThemeProvider theme={theme}>
			<CssBaseline />
			<ResponsiveAppBar />
			<Container maxWidth="sm">
				<Box sx={{ my: 4 }}>
					<Typography variant="h4" component="h1" gutterBottom>
						Welcome to this Next.js example site developed by Jolyon Segal
					</Typography>
					<Typography>I am a front end developer</Typography>

					<Copyright />
				</Box>
			</Container>
		</ThemeProvider>
	);
}
