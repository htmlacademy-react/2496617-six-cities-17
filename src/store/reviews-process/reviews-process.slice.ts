import { createSlice } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import { DataStatus, NameSpace, PostingStatus } from '../../const';
import { ReviewsProcess } from '../../types';
import { fetchReviewsAction, postReviewAction } from '../api-action';

// %======================== reviews-process.slice ========================% //

const initialState: ReviewsProcess = {
  data: [],
  status: DataStatus.Unknown,
  postingStatus: PostingStatus.Unknown,
};

export const reviewsProcess = createSlice({
  name: NameSpace.Reviews,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      // @------------ get reviews ------------@ //
      .addCase(fetchReviewsAction.pending, (state) => {
        state.status = DataStatus.Loading;
      })
      .addCase(fetchReviewsAction.fulfilled, (state, action) => {
        state.status = DataStatus.Loaded;
        state.data = action.payload;
      })
      .addCase(fetchReviewsAction.rejected, (state) => {
        state.status = DataStatus.Error;
      })

      // @------------ post review ------------@ //
      .addCase(postReviewAction.pending, (state) => {
        state.postingStatus = PostingStatus.Posting;
      })
      .addCase(postReviewAction.fulfilled, (state, action) => {
        state.postingStatus = PostingStatus.Posted;
        state.data.push(action.payload);
      })
      .addCase(postReviewAction.rejected, (state) => {
        state.postingStatus = PostingStatus.Error;
        toast.error('Could not send review');
      });
  }
});
