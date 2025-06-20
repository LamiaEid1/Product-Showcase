import { create } from "zustand";

// Zustand store for product state management
export const useProductStore = create((set) => ({
	// State
	products: [],
	setProducts: (products) => set({ products }),
	
	// Create a new product
	createProduct: async (newProduct) => {
		// Validate required fields
		if (!newProduct.name || !newProduct.image || !newProduct.price) {
			return { success: false, message: "Please fill in all fields." };
		}
		
		const res = await fetch("/api/products", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(newProduct),
		});
		const data = await res.json();
		
		// Add new product to state immediately (optimistic update)
		set((state) => ({ products: [...state.products, data.data] }));
		return { success: true, message: "Product created successfully" };
	},
	
	// Fetch all products from API
	fetchProducts: async () => {
		const res = await fetch("/api/products");
		const data = await res.json();
		set({ products: data.data });
	},
	
	// Delete a product by ID
	deleteProduct: async (pid) => {
		const res = await fetch(`/api/products/${pid}`, {
			method: "DELETE",
		});
		const data = await res.json();
		if (!data.success) return { success: false, message: data.message };

		// Remove product from state immediately (optimistic update)
		set((state) => ({ products: state.products.filter((product) => product._id !== pid) }));
		return { success: true, message: data.message };
	},
	
	// Update a product by ID
	updateProduct: async (pid, updatedProduct) => {
		const res = await fetch(`/api/products/${pid}`, {
			method: "PUT",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(updatedProduct),
		});
		const data = await res.json();
		if (!data.success) return { success: false, message: data.message };

		// Update product in state immediately (optimistic update)
		set((state) => ({
			products: state.products.map((product) => (product._id === pid ? data.data : product)),
		}));

		return { success: true, message: data.message };
	},
}));
