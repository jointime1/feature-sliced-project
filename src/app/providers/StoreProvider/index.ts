import { createReduxStore } from './config/store';
import { StoreProvider } from './ui/StoreProvider';
import type { AppDispatch } from './config/store';
import type {
    StateSchema, StateSchemaKey, ThunkConfig,
} from './config/StateSchema';

export {
    StoreProvider,
    createReduxStore,
    StateSchema,
    StateSchemaKey,
    AppDispatch,
    ThunkConfig,
};
