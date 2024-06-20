import { View, Text } from "react-native";

export default TextWhite = ({ texto, size }) => {
  return (
    <View>
      <Text style={{ color: "white", fontSize: size || 20 }}>{texto}</Text>
    </View>
  );
};

// export default TextWhite;
// Una forma de exportar
// Si el size no existe y estan las barras se pondra el numero por defecto que esta
