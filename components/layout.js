import Head from "next/head";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Image from "next/image";
import styles from "./layout.module.scss";
import utilStyles from "../styles/utils.module.css";
import Link from "/src/Link";
import ResponsiveAppBar from "/components/navbar";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Copyright from "../src/Copyright";

const theme = createTheme();

const name = "Jolyon Segal";
export const siteTitle = "Next.js Sample Website";

export default function Layout({ children, home }) {
	return (
		<ThemeProvider theme={theme}>
			<Head>
				<link rel="icon" href="/favicon.ico" />
				<meta
					name="description"
					content="Learn how to build a personal website using Next.js"
				/>
				<meta
					property="og:image"
					content={`https://og-image.vercel.app/${encodeURI(
						siteTitle
					)}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
				/>
				<meta name="og:title" content={siteTitle} />
				<meta name="twitter:card" content="summary_large_image" />
			</Head>
			<CssBaseline />
			<ResponsiveAppBar />

			<main>{children}</main>

			<section className={styles.footer}>
				<p>Footer</p>
				<Copyright />
			</section>
		</ThemeProvider>
	);
}
