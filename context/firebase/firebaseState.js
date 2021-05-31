import React, {useReducer} from 'react';
import {OBTENER_PRODUCTOS_EXITO} from '../../types';
import firebase from '../../firebase/index';
import FirebaseReducer from './firebaseReducer';
import FirebaseContext from './firebaseContext';
import _ from 'lodash';

const FirebaseState = ({children}) =>{
    const initialState = {
        menu: []
    }

    const [state, dispatch] = useReducer(FirebaseReducer, initialState);

    const obtenerProductos = () =>{
      
        firebase.db.collection('productos').where('existencia', '==', true)
        .onSnapshot(manejarSnapshot);

        function manejarSnapshot(snapshot) {
            let platillos = snapshot.docs.map(doc => {
                return{
                    id: doc.id,
                    ...doc.data()
                }
            });

            //Ordenamos con una libreria
            platillos = _.sortBy(platillos, 'categoria')

            // console.log(platillos)

            dispatch({
                type: OBTENER_PRODUCTOS_EXITO,
                payload: platillos
            });
        }
    }

    return(
        <FirebaseContext.Provider
            value={{
                menu: state.menu,
                firebase,
                obtenerProductos
            }}
        >
            {children}
        </FirebaseContext.Provider>
    )
}

export default FirebaseState