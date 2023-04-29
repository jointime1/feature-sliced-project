import { StateSchema } from 'app/providers/StoreProvider';

export const getArticleCommentsIsLoading = (state: StateSchema) => state.articleDetailComments?.isLoading;

export const getArticleCommentsError = (state: StateSchema) => state.articleDetailComments?.error;
