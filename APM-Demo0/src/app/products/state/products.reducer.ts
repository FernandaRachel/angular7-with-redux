import { IProduct } from '../product';
import * as fromRoot from '../../app.state';
import { createFeatureSelector, createSelector } from '@ngrx/store';

export interface State extends fromRoot.State {
  products: IProductState;
}

export interface IProductState {
  showProductCode: boolean;
  currentProduct: IProduct;
  products: IProduct[];
}

export const initialState: IProductState = {
  showProductCode: true,
  currentProduct: null,
  products: [],
};

const getProductFeatureState = createFeatureSelector<IProductState>('products');

export const getShowProductCode = createSelector(
  getProductFeatureState,
  state => state.showProductCode
);

export const getCurrentProduct = createSelector(
  getProductFeatureState,
  state => state.currentProduct
);

export const getProduct = createSelector(
  getProductFeatureState,
  state => state.products
);

export function reducer(state: IProductState = initialState, action): IProductState  {
  console.log(state);
  console.log(action);

  switch (action.type) {
    case 'TOGGLE_PRODUCT_CODE':
      return {
        ...state,
        showProductCode: action.payload,
      };
    default: return state;
  }
}
