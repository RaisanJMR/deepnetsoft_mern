import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { productListReducer } from './reducers/productReducer'
import { userLoginReducer } from './reducers/userReducers'
const reducer = combineReducers({
  productList: productListReducer,
  userLogin: userLoginReducer,
})

const userDetailsFromStorage = localStorage.getItem('userDetails')
  ? JSON.parse(localStorage.getItem('userDetails'))
  : null
const initialState = {
  userLogin: { userDetails: userDetailsFromStorage },
}
const middleware = [thunk]
const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
)
export default store
