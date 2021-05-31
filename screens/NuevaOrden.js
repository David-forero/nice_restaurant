import React from "react";
import { StyleSheet, View } from "react-native";
import globalStyles from "../styles/global";
import { Button, Text } from "react-native-paper";
// import {useNavigation} from '@react-navigation/native';

const NuevaOrden = ({navigation}) => {

  // const navigation = useNavigation();

  return (
    <View style={globalStyles.contenedor} >
      <View style={styles.contenido}>
        <Button 
          style={globalStyles.boton} 
          mode="contained"
          onPress={() => navigation.navigate('Menu')}
        >
          <Text style={globalStyles.botonTexto}>Crear Nueva Orden</Text>
        </Button>
      </View>
    </View>
  );
};

export default NuevaOrden;

const styles = StyleSheet.create({
  contenido:{
    flex: 1,
    flexDirection: "column",
    justifyContent: 'center'
  }
});
