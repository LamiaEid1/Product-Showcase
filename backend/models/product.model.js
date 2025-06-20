import mongoose from "mongoose";

// Product schema definition with required fields and timestamps
const productSchema = new mongoose.Schema(
	{
		name: {
			type: String,
			required: true,
		},
		price: {
			type: Number,
			required: true,
		},
		image: {
			type: String,
			required: true,
		},
	},
	{
		timestamps: true, // Automatically adds createdAt and updatedAt fields
	}
);

const Product = mongoose.model("Product", productSchema);

export default Product;
