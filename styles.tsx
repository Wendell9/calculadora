import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
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