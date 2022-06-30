import * as React from "react";
import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button } from "@mui/material";
import Box from "@mui/material/Box";
import ProTip from "/src/ProTip";
import Link from "/src/Link";
import Copyright from "/src/Copyright";
import ResponsiveAppBar from "/components/navbar";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Head from "next/head";
import Layout from "/components/layout";
import utilStyles from "/styles/utils.module.css";
// import { getSortedPostsData } from "/lib/posts";
import { getTeamsData } from "/lib/teams";
// import Link from "next/link";
import Navbar from "/components/Navbar";

console.log("getTeamsData =======");
console.log(getTeamsData());

const theme = createTheme();

export const getStaticPaths = async () => {
	// const products = await getProductsData();

	const teamsData = getTeamsData();

	console.log(teamsData);

	const paths = teamsData.clubs.map((team) => {
		return {
			params: {
				id: team.id.toString(),
			},
		};
	});

	return {
		paths,
		fallback: false,
	};
};

export const getStaticProps = async (context) => {
	const id = context.params?.id;
	console.log(id);

	// const response = await fetch(`https://dummyjson.com/products/${id}`);
	const teamsData = getTeamsData();
	console.log(teamsData);

	const team = teamsData.clubs.filter((team) => team.id === id);
	console.log(team);

	return {
		props: {
			team,
		},
	};
};

export default function Team({ team }) {
	console.log({ team });
	const { name, country } = team[0];
	console.log(name);
	return (
		<Layout>
			<Container sx={{ py: 8 }} maxWidth="md">
				<Grid item key={team.id} xs={12} sm={6} md={4}>
					<Card
						sx={{
							height: "100%",
							display: "flex",
							flexDirection: "column",
						}}
					>
						<CardMedia
							component="img"
							sx={{
								// 16:9
								width: "50px",
							}}
							image={`/images/teams/arsenal-50.png`}
							alt="random"
						/>
						<CardContent sx={{ flexGrow: 1 }}>
							<Typography gutterBottom variant="h5" component="h2">
								{name}
							</Typography>
							<Typography>{country}</Typography>
						</CardContent>
						<CardActions>
							<Button href={`/teams/${team.id}`} size="small">
								View
							</Button>
							<Button size="small">Edit</Button>
						</CardActions>
					</Card>
				</Grid>
			</Container>
		</Layout>
	);
}
