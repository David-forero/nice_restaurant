import React, { useContext } from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { Button } from "react-native-paper"
import PedidosContext from "../context/pedidos/pedidosContext";
import globalStyle from "../styles/global";

const DetallesPlatillo = ({navigation}) => {
  const { platillo } = useContext(PedidosContext);
  return (
    <View style={globalStyle.contenedor}>
      <View style={{
          width: '100%',
          height: '100%',
          flex: 1,
          justifyContent: "space-between",
          paddingVertical: 20,
      }}>
         <View>
              <Text style={styles.textCenter}>{platillo.nombre}</Text>
              <View style={styles.card}>
                  <Image
                    style={styles.cardImg}
                    source={{ uri: platillo.imagen }}
                    resizeMode="cover"
                  />
        
                 <Text>{platillo.descripcion}</Text>
                  <View>
                      <Text style={styles.h1}>Precio: {platillo.precio}$</Text>
                  </View>
              </View>
         </View>

          <Button onPress={() => navigation.navigate('formularioPlatillo')} style={globalStyle.boton}   mode="contained" >
            <Text style={globalStyle.botonTexto}>Ordernar Platillo</Text>
          </Button>
      </View>
    </View>
  );
};

export default DetallesPlatillo;

const styles = StyleSheet.create({
  textCenter: {
    textAlign: "center",
    fontSize: 20,
    textTransform: "uppercase",
    marginVertical: 10,
  },
  card: {
    height: '70%',
    shadowColor: "#999",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
    paddingHorizontal: 10,
    paddingVertical: 10,
    backgroundColor: '#eee',
    display: "flex",
    justifyContent: "space-between"
  },

  cardImg: {
    height: "66%",
    width: "100%",
    alignSelf: "center",
  },
  h1:{
      fontSize: 18,
      fontWeight: 'bold'
  },

});
