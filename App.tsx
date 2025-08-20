import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Keyboard,
  Alert,
} from "react-native";

export default function App() {
  const [valor1, setValor1] = useState<string>("");
  const [valor2, setValor2] = useState<string>("");
  const [soma, setResultado] = useState(0);

  function efetuaSoma() {
    if (valor1 == "" || valor2 == "") {
      Alert.alert("Preencha os campos!");
    } else {
      let resultado =
        Number.parseFloat(valor1.replace(",", ".")) +
        Number.parseFloat(valor2.replace(",", "."));
      setResultado(resultado);
      Keyboard.dismiss();
    }
  }

  function efetuaSubtracao() {
    if (valor1 == "" || valor2 == "") {
      Alert.alert("Preencha os campos!");
    } else {
      let resultado =
        Number.parseFloat(valor1.replace(",", ".")) -
        Number.parseFloat(valor2.replace(",", "."));
      setResultado(resultado);
      Keyboard.dismiss();
    }
  }

  function efetuaDivisao() {
    if (valor1 == "" || valor2 == "") {
      Alert.alert("Preencha os campos!");
    } else {
      let resultado =
        Number.parseFloat(valor1.replace(",", ".")) /
        Number.parseFloat(valor2.replace(",", "."));
      setResultado(resultado);
      Keyboard.dismiss();
    }
  }

  function efetuaExponencial() {
    if (valor1 == "" || valor2 == "") {
      Alert.alert("Preencha os campos!");
    } else {
      let resultado =
        Number.parseFloat(valor1.replace(",", ".")) **
        Number.parseFloat(valor2.replace(",", "."));
      setResultado(resultado);
      Keyboard.dismiss();
    }
  }

  function limparVariaveis() {
    setValor1("");
    setValor2("");
    setResultado(0);
    Keyboard.dismiss();
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Calculadora</Text>

      <View style={styles.row}>
        <View style={styles.column}>
          <Text style={styles.labelValor1}>Valor 1</Text>
          <TextInput
            style={styles.campo1}
            keyboardType="decimal-pad"
            onChangeText={(texto) => setValor1(texto)}
            value={valor1}
          />
        </View>

        <View style={styles.column}>
          <Text style={styles.labelValor2}>Valor 2</Text>
          <TextInput
            style={styles.campo2}
            keyboardType="decimal-pad"
            onChangeText={(texto) => setValor2(texto)}
            value={valor2}
          />
        </View>
      </View>

      <View style={styles.row}>
        {" "}
        <TouchableOpacity style={styles.botaoSoma} onPress={() => efetuaSoma()}>
          <Text style={styles.labelBtnSoma}> + </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.botaoSubtracao}
          onPress={() => efetuaSubtracao()}
        >
          <Text style={styles.labelBtnSoma}> - </Text>
        </TouchableOpacity>
      </View>

      <View style={styles.row}>
        <TouchableOpacity
          style={styles.botaoDivisao}
          onPress={() => efetuaDivisao()}
        >
          <Text style={styles.labelBtnSoma}> / </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.botaoExponencial}
          onPress={() => efetuaExponencial()}
        >
          <Text style={styles.labelBtnSoma}> ^ </Text>
        </TouchableOpacity>
      </View>

      <View style={styles.row}>
        <TouchableOpacity style={styles.botaoLimpar} onPress={limparVariaveis}>
          <Text style={styles.labelBtnSoma}> Limpar </Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.resultado}>Resultado: {soma.toFixed(2)}</Text>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  resultado: {
    fontSize: 30,
    borderTopColor: "green",
    borderBottomColor: "green",
    borderTopWidth: 3,
    borderBottomWidth: 3,
    marginTop: 50,
    width: "90%",
    textAlign: "center",
  },
  container: {
    flex: 2,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
titulo: {
  fontSize: 30,
  color: "white", // Muda a cor do texto para branco
  backgroundColor: "blue", // Adiciona um fundo azul
  borderWidth: 3,
  borderColor: "green",
  padding: 15,
  borderRadius: 10,
  textAlign: "center", // Centraliza o texto
  shadowColor: "#000", // Adiciona sombra
  shadowOffset: {
    width: 0,
    height: 2,
  },
  shadowOpacity: 0.3, // Opacidade da sombra
  shadowRadius: 4, // Raio da sombra
  elevation: 5, // Para Android
}
,
  labelValor1: {
    fontSize: 25,
    color: "#a94fc9",
    fontWeight: "bold",
    marginTop: 30,
  },
  campo1: {
    borderBottomColor: "green",
    borderBottomWidth: 5,
    width: "100%",
    height: 60,
    textAlign: "center",
    fontSize: 25,
    marginTop: 10,
  },

  labelValor2: {
    fontSize: 25,
    color: "red",
    fontWeight: "bold",
    marginTop: 30,
  },
  campo2: {
    borderBottomColor: "blue",
    borderBottomWidth: 5,
    width: "100%",
    height: 60,
    textAlign: "center",
    fontSize: 25,
    marginTop: 10,
  },
  botaoSubtracao: {
    width: "40%",
    borderWidth: 2,
    borderColor: "blue",
    borderRadius: 30,
    height: 60,
    marginTop: 30,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#F54927",
  },
  botaoSoma: {
    width: "40%",
    borderWidth: 2,
    borderColor: "blue",
    borderRadius: 30,
    height: 60,
    marginTop: 30,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#b2ceed",
  },
  botaoDivisao: {
    width: "40%",
    borderWidth: 2,
    borderColor: "blue",
    borderRadius: 30,
    height: 60,
    marginTop: 30,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#27F591",
  },
  botaoExponencial: {
    width: "40%",
    borderWidth: 2,
    borderColor: "blue",
    borderRadius: 30,
    height: 60,
    marginTop: 30,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#F7F40A",
  },
  botaoLimpar: {
    width: "90%",
    borderWidth: 2,
    borderColor: "blue",
    borderRadius: 30,
    height: 60,
    marginTop: 30,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#F7840A",
  },
  labelBtnSoma: {
    fontSize: 25,
  },
  row: {
    flexDirection: "row",
    marginBottom: 12,
    justifyContent: "space-between",
    columnGap: 30,
  },
  column: {
    flexDirection: "column",
    marginBottom: 12,
  },
});
