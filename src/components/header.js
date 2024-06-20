import { View } from "react-native";
import TextWhite from "./textWhite";

export default Headers = (texto) => {
  return (
    <View styles={styles.container}>
      <TextWhite texto={texto}></TextWhite>
      <image style={style.img} source={require("../../assets/logoNasa.png")} />
    </View>
  );
};
const style = stylesSheet.create({
  img: {
    whidth: 100,
    height: 100,
  },
  container: {},
});

const styles = StyleSheet.create({
  boton: {
    borderColor: "black",
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    margin: 5,
  },
  texto: {
    fontSize: 15,
    fontWeight: "bold",
  },
});
