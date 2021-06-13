import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";

export interface Urls {
  full: string;
  raw: string;
  regular: string;
  small: string;
  thumb: string;
}

export interface Links {
  download: string;
  download_location: string;
  html: string;
  self: string;
}

export interface UserProfile {
  small: string;
  medium: string;
  large: string;
}

export interface User {
  bio: string;
  first_name: string;
  for_hire: boolean;
  id: string;
  instagram_username: string;
  last_name: string;
  location: string;
  name: string;
  portfolio_url: string;
  profile_image: UserProfile;
  twitter_username: string;
  username: string;
}

export interface PhotoResult {
  urls: Urls;
  links: Links;
  user: User;
}

export interface PhotoState {
  photos: PhotoResult[];
}

const initialState: PhotoState = {
  photos: [],
};

export interface ApiResult {
  results: PhotoResult[];
}

export const photosSlice = createSlice({
  name: "photos",
  initialState,
  reducers: {
    setPhotos: (state, action: PayloadAction<PhotoResult[]>) => {
      state.photos = action.payload;
    },
    clearPhotos: (state) => initialState,
  },
});

export const { setPhotos, clearPhotos } = photosSlice.actions;

export const photos = (state: RootState) => state.photos.photos;

export default photosSlice.reducer;
