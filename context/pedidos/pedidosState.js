import React, {useReducer} from 'react';

import PedidosReducer from './pedidosReducer';
import PedidosContext from './pedidosContext';
import { SELECCIONAR_PRODUCTO } from '../../types';

const PedidosState = ({children}) =>{
    const initialState = {
        pedido: [],
        platillo: null
    }

    const [state, dispatch] = useReducer(PedidosReducer, initialState);

    const seleccionarPlatillo = (platillo) =>{
        dispatch({
            type: SELECCIONAR_PRODUCTO,
            payload: platillo
        })
    }

    return(
        <PedidosContext.Provider
            value={{
                pedido: state.menu,
                platillo: state.platillo,
                seleccionarPlatillo
            }}
        >
            {children}
        </PedidosContext.Provider>
    )
}

export default PedidosState