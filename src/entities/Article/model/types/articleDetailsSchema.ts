import { Article } from 'entities/Article/model/types/article';

export interface ArticleDetailsSchema {
    isLoading: boolean;
    error?: string;
    data?: Article;
}
