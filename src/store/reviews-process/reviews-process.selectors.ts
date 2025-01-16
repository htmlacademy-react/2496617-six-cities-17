import { NameSpace } from '../../const';
import { AppState } from '../../types';

// %======================== reviews-process.selectors ========================% //

export const getReviews = (state: Pick<AppState, NameSpace.Reviews>) => state[NameSpace.Reviews].data;
export const getReviewsStatus = (state: Pick<AppState, NameSpace.Reviews>) => state[NameSpace.Reviews].status;
export const getPostingStatus = (state: Pick<AppState, NameSpace.Reviews>) => state[NameSpace.Reviews].postingStatus;
