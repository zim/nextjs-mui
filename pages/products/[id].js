import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Layout from "../../components/layout";
import { getProductsData } from "../../lib/products";

export const getStaticPaths = async () => {
	const products = await getProductsData();

	const paths = products.map((product) => {
		return {
			params: {
				id: product.id.toString(),
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

	const response = await fetch(`https://dummyjson.com/products/${id}`);
	const product = await response.json();

	return {
		props: {
			product,
		},
	};
};

const Product = ({ product }) => {
	// const router = useRouter();
	// const { id } = router.query;

	return (
		<Layout>
			<Container sx={{ py: 8 }} maxWidth="md">
				<Box>
					<Paper>
						<Typography variant="h4" component="h1" gutterBottom>
							Product ID: {product.id}
						</Typography>
						<Typography variant="h4" component="h1" gutterBottom>
							Product Title: {product.title}
						</Typography>
					</Paper>
				</Box>
			</Container>
		</Layout>
	);
};

export default Product;
