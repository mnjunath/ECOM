import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async ({ page, searchQuery }, { getState }) => {
    const limit = 10;
    const skip = (page - 1) * limit;

    let url = `https://dummyjson.com/products?limit=${limit}&skip=${skip}`;

    if (searchQuery) {
      url = `https://dummyjson.com/products/search?q=${searchQuery}&limit=${limit}&skip=${skip}`;
    }

    const response = await axios.get(url);
    return response.data.products;
  }
);

const initialState = {
  products: [],
  page: 1,
  loading: false,
  error: null,
  hasMore: true,
  searchQuery: "",
};

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setSearchQuery: (state, action) => {
      state.searchQuery = action.payload;
      state.page = 1;
      state.products = [];
      state.hasMore = true;
    },
    resetProducts: (state) => {
      state.products = [];
      state.page = 1;
      state.hasMore = true;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.loading = false;

        if (action.payload.length === 0) {
          state.hasMore = false;
        } else {
          state.products = [...state.products, ...action.payload];
          state.page += 1;
        }
      })
      .addCase(fetchProducts.rejected, (state) => {
        state.loading = false;
        state.error = "Failed to fetch products";
      });
  },
});

export const { setSearchQuery, resetProducts } = productSlice.actions;

export default productSlice.reducer;
