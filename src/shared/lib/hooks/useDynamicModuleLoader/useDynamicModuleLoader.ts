import { StoreWithmanager } from 'App/providers/StoreProvider';
import { useEffect } from 'react';
import { useStore, useDispatch } from 'react-redux';
import { Reducer } from '@reduxjs/toolkit';
import { StateSchemaKyes } from '../../../../App/providers/StoreProvider/config/StateSchema';

export type ReducersList = {
  [key in StateSchemaKyes]?: Reducer;
}

type ReducerListEntry = [StateSchemaKyes, Reducer];

export const useDynamicModuleLoader = (
  reducers: ReducersList,
  canRemove?: boolean,
) => {
  const store = useStore() as StoreWithmanager;
  const dispatch = useDispatch();

  useEffect(() => {
    Object.entries(reducers).forEach(([key, reducer]: ReducerListEntry) => {
      store.reducerManager.add(key, reducer);
      dispatch({ type: `@INIT ${key} reducer` });
    });

    return () => {
      Object.entries(reducers).forEach(([key]: ReducerListEntry) => {
        if (canRemove) {
          store.reducerManager.remove(key);
          dispatch({ type: `@REMOVE ${key} reducer` });
        }
      });
    };
  }, []);
};
