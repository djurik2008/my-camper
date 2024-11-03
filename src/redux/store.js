import { configureStore } from '@reduxjs/toolkit';
import {
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import { persistedCampersReducer } from './campers/campersSlice';
import { camperReducer } from './camper/camperSlice';
import { filterReduser } from './filter/filterSlice';

export const store = configureStore({
  reducer: {
    campers: persistedCampersReducer,
    camper: camperReducer,
    filter: filterReduser,
  },
  middleware: (gdm) =>
    gdm({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
