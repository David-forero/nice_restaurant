import React from "react";
import "react-native-gesture-handler";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import DetallesPlatillo from "./screens/DetallesPlatillo";
import FormularioPlatillo from "./screens/FormularioPlatillo";
import Menu from "./screens/Menu";
import NuevaOrden from "./screens/NuevaOrden";
import ProgresoPedido from "./screens/ProgresoPedido";
import Resumen from "./screens/Resumen";

import FirebaseState from "./context/firebase/firebaseState";
import PedidosState from "./context/pedidos/pedidosState";

const Stack = createStackNavigator();

export default function App() {
  return (
    <FirebaseState>
      <PedidosState>
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              headerStyle: {
                backgroundColor: "#FFDA00",
              },
              headerTitleStyle: {
                fontWeight: "bold",
              },
              headerTintColor: '#000'
            }}
          >
            <Stack.Screen
              name="nuevaOrden"
              component={NuevaOrden}
              options={{
                title: "Nueva Orden",
              }}
            />

            <Stack.Screen
              name="Menu"
              component={Menu}
              options={{
                title: "Nuestro Menu",
              }}
            />

            <Stack.Screen
              name="detallesPlatillo"
              component={DetallesPlatillo}
              options={{
                title: "Detalle Platillo",
              }}
            />

            <Stack.Screen
              name="formularioPlatillo"
              component={FormularioPlatillo}
              options={{
                title: "Ordenar Platillo",
              }}
            />

            <Stack.Screen
              name="resumenPedido"
              component={Resumen}
              options={{
                title: "Resumen Pedido",
              }}
            />

            <Stack.Screen
              name="progresoPedido"
              component={ProgresoPedido}
              options={{
                title: "Progreso de Pedido",
              }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </PedidosState>
    </FirebaseState>
  );
}
