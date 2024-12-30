import { NameSpace } from '../../const';
import { AppState } from '../../types';

// %======================== reviews-process.selectors ========================% //

export const getReviews = (state: AppState) => state[NameSpace.Reviews].data;
export const getReviewsStatus = (state: AppState) => state[NameSpace.Reviews].status;
export const getPostingStatus = (state: AppState) => state[NameSpace.Reviews].postingStatus;
