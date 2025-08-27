import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Keyboard,
  Alert,
} from "react-native";

import { styles } from "./styles";

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