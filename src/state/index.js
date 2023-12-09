import { createSlice } from "@reduxjs/toolkit";


const initialState = {
  mode: "dark",
  user: null,
  token: null,
  pdv: [],
  pdvs: [],
  produits: [],
  produitsPdv: [],
  dproduits: [],
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setMode: (state) => {
      state.mode = state.mode === "dark" ?   "light":"dark";
    },
    setLogin: (state, action) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
    },
    setLogout: (state) => {
      state.user = null;
      state.token = null;
    },
    setFriends: (state, action) => {
      if (state.user) {
        state.user.friends = action.payload.friends;
      } else {
        console.error("user friends non-existent :(");
      }
    },
    setPdvs: (state, action) => {
      state.pdvs = action.payload.pdvs;
    },
    setPdv: (state, action) => {
      state.pdv = action.payload.pdv;
    },
    setProduits: (state, action) => {
      state.produits = action.payload.produits;
    },
    setDproduits: (state, action) => {
      state.dproduits = action.payload.dproduits;
    },
    setProduitsPdv: (state, action) => {
      state.produitsPdv = action.payload.produitsPdv;
    },
  },
});

export const { setMode, setLogin, setLogout, setFriends, setPdvs, setPdv ,setProduits,setDproduits,setProduitsPdv} =
  authSlice.actions;
export default authSlice.reducer;

