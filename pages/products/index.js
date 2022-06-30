import * as React from "react";
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
import ProTip from "/src/ProTip";
import Link from "/src/Link";
import ResponsiveAppBar from "/components/navbar";
import Copyright from "/src/Copyright";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import styles from "./products.module.css";
import Layout from "../../components/layout";
import { getProductsData } from "../../lib/products";

const theme = createTheme();

export const getStaticProps = async () => {
	// const response = await fetch("https://dummyjson.com/products");
	// const data = await response.json();

	const products = await getProductsData();

	return {
		props: {
			data: products,
		},
	};
};

const Products = ({ data }) => {
	console.log(data);
	return (
		<Layout>
			<Container sx={{ py: 8 }} maxWidth="md">
				{/* End hero unit */}
				<Box sx={{ my: 4 }} className={styles.productsPage}>
					<Typography variant="h4" component="h1" gutterBottom>
						Products
					</Typography>
				</Box>
				<Grid container spacing={4}>
					{data.map((product) => (
						<Grid item key={product.id} xs={12} sm={6} md={4}>
							<Card
								sx={{
									height: "100%",
									display: "flex",
									flexDirection: "column",
								}}
							>
								<CardMedia
									component="img"
									sx={
										{
											// 16:9
										}
									}
									image={product.thumbnail}
									alt="random"
								/>
								<CardContent sx={{ flexGrow: 1 }}>
									<Typography gutterBottom variant="h5" component="h2">
										{product.title}
									</Typography>
									<Typography>{product.category}</Typography>
								</CardContent>
								<CardActions>
									<Button href={`/products/${product.id}`} size="small">
										View
									</Button>
									<Button size="small">Edit</Button>
								</CardActions>
							</Card>
						</Grid>
					))}
				</Grid>
			</Container>
		</Layout>
	);
};

export default Products;
