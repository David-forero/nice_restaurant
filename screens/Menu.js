import React, { useContext, useEffect } from "react";
import { StyleSheet, View, ScrollView, TouchableHighlight } from "react-native";
import FirebaseContext from "../context/firebase/firebaseContext";
import PedidoContext from '../context/pedidos/pedidosContext';
import { Image, Text } from "react-native-elements";
import { Fragment } from "react";

const Menu = ({navigation}) => {
  const { menu, obtenerProductos } = useContext(FirebaseContext);
  const { seleccionarPlatillo } = useContext(PedidoContext);

  useEffect(() => {
    obtenerProductos();
  }, []);

  const mostrarHeading = (categoria, i) => {
      
      if (i > 0) {
        const categoriaAnterior = menu[i - 1].categoria;
        if (categoriaAnterior !== categoria) {
            return (
            <View style={styles.separador}>
                <Text style={styles.separadorTexto}>{categoria}</Text>
            </View>
            );
        }
    }else{
        return (
            <View style={styles.separador}>
              <Text style={styles.separadorTexto}>{categoria}</Text>
            </View>
          );
    }
  }

  return (
    <ScrollView>
      {menu.map((platillo, i) => {
        return (
          <Fragment key={platillo.id}>
            {mostrarHeading(platillo.categoria, i)}

            <View style={styles.cardImgWrapper}>
              {/* <Text>Recently Viewed</Text> */}
                <TouchableHighlight onPress={() => {
                    //Eliminar su existencia, menos datos
                    const { existencia, ...platillo2 } = platillo;
                    
                    seleccionarPlatillo(platillo2);
                    navigation.navigate('detallesPlatillo')
                }}>
                  <View style={styles.card}>
                    <View style={styles.cardImgWrapper}>
                      <Image
                        source={{ uri: platillo.imagen }}
                        resizeMode="cover"
                        style={styles.cardImg}
                      />
                    </View>
    
                    <View style={styles.cardInfo}>
                      <Text style={styles.cardTitle}> {platillo.nombre} </Text>
                      {/* <Rating fractions="{1}" startingValue="{3.3}" /> */}
                      <Text style={platillo.cardDetails}>
                        {" "}
                        {platillo.descripcion}{" "}
                      </Text>
                    </View>
                  </View>
                </TouchableHighlight>
                </View>
          </Fragment>
        );
      })}
    </ScrollView>
  );
};

export default Menu;

const styles = StyleSheet.create({
  card: {
    height: 100,
    flexDirection: "row",
    shadowColor: "#999",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
  },
  cardImgWrapper: {
    flex: 1,
  },
  cardImg: {
    height: "100%",
    width: "100%",
    alignSelf: "center",
  },
  cardInfo: {
    flex: 2,
    padding: 10,
    borderColor: "#ccc",
    borderWidth: 1,
    backgroundColor: "#fff",
  },
  cardTitle: {
    fontWeight: "bold",
  },
  cardDetails: {
    fontSize: 12,
    color: "#444",
  },

  separador: {
    backgroundColor: '#000'
  },
  separadorTexto:{
    color: '#FFDA00',
    fontWeight: 'bold',
    textTransform: 'uppercase',
    textAlign: 'center',
    paddingHorizontal: 10,
    paddingVertical: 10
  }
});
