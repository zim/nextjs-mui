import React, { useState, useEffect } from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Pagination from "@mui/material/Pagination";
import PaginationItem from "@mui/material/PaginationItem";
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
	const [Page, setPage] = useState(1);
	console.log(data);
	console.log(data.length);

	console.log((Page - 1) * 10);
	console.log((Page - 1) * 10 + 9);

	const dataSlice = () => data.slice((Page - 1) * 10, (Page - 1) * 10 + 9);
	console.log(dataSlice());

	return (
		<Layout>
			<Container sx={{ py: 8 }} maxWidth="md">
				<Grid container spacing={4}>
					{dataSlice().map((product) => (
						<Grid item key={product.id} xs={12} sm={6} md={4}>
							<Link
								href={`/products/${product.id}`}
								className={styles.noDecoration}
							>
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
											maxHeight: "138px",
										}}
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
										<Button size="small">View</Button>
									</CardActions>
								</Card>
							</Link>
						</Grid>
					))}
				</Grid>
				<Pagination
					page={Page}
					count={3}
					shape="rounded"
					renderItem={(item) => (
						<PaginationItem
							component={Button}
							{...item}
							onClick={() => {
								console.log("clickkked", item.page);
								setPage(item.page);
							}}
						/>
					)}
					sx={{
						display: "flex",
						width: "100%",
						margin: "3rem 0",
						justifyContent: "center",
					}}
				/>
			</Container>
		</Layout>
	);
};

export default Products;
