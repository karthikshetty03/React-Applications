import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { Provider } from 'react-redux';
import { createStore,applyMiddleware,compose} from 'redux';
import reducers from './reducers';
import reduxThunk from 'redux-thunk';
import StreamReducer from './reducers/StreamReducer';
import modal from './components/Modal';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
    reducers,
    composeEnhancers(applyMiddleware(reduxThunk))
    );

ReactDOM.createPortal(<modal/>,document.querySelector("#modal"));
ReactDOM.render(
    <Provider store={store}>
    <App/> 
    </Provider>,
    document.querySelector('#root')
    
    
    );


