import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { DataStatus, DEFAULT_CITY_LOCATION, DEFAULT_CITY_NAME, NameSpace, SortingOption } from '../../const';
import { OffersProcess } from '../../types';
import { fetchOffersAction } from '../api-action';
import { defineCityLocation, getOffersByCityName, sortOffers } from '../../utils/utils';

// %======================== offers-process.slice ========================% //

const initialState: OffersProcess = {
  cityName: DEFAULT_CITY_NAME,
  cityLocation: DEFAULT_CITY_LOCATION,
  all: [],
  sorted: [],
  sortingType: SortingOption.POPULAR,
  status: DataStatus.Unknown,
};

export const offersProcess = createSlice({
  name: NameSpace.Offers,
  initialState,
  reducers: {
    changeCity: (state, action: PayloadAction<string>) => {
      state.cityName = action.payload;
      state.sortingType = SortingOption.POPULAR;
      state.sorted = getOffersByCityName(state.all, state.cityName);
      state.cityLocation = defineCityLocation(state.sorted);
    },
    changeSortingType: (state, action: PayloadAction<SortingOption>) => {
      state.sortingType = action.payload || SortingOption.POPULAR;
      state.sorted = sortOffers(getOffersByCityName(state.all, state.cityName), action.payload);
    }
  },
  extraReducers(builder) {
    builder
      .addCase(fetchOffersAction.pending, (state) => {
        state.status = DataStatus.Loading;
      })
      .addCase(fetchOffersAction.fulfilled, (state, action) => {
        state.status = DataStatus.Loaded;
        state.all = action.payload;
        state.sorted = getOffersByCityName(state.all, state.cityName);
        state.cityLocation = defineCityLocation(state.sorted);
      })
      .addCase(fetchOffersAction.rejected, (state) => {
        state.status = DataStatus.Error;
      });
  }
});


export const { changeCity, changeSortingType } = offersProcess.actions;
