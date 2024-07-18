<script setup>
import { reactive } from 'vue';
import Form from './components/Form.vue';
import Header from './components/Header.vue';

  const estado = reactive({
    operacao: 'soma',
    num1: 0,
    num2: 0,
    resultado: '',
  });


  function multiplicacao(a, b) {
    estado.resultado = a * b;
    return estado.resultado;
  };
  function soma(a, b) {
    estado.resultado = a + b;
    return estado.resultado;
  };
  function subtracao(a, b) {
    estado.resultado = a - b;
    return estado.resultado;
  };
  function divisao(a, b) {
    estado.resultado = a / b;
    return estado.resultado;
  };


  function operacao() {
    switch (estado.operacao) {
      case 'soma' :
        return soma(estado.num1, estado.num2)
      case 'subtracao' :
        return subtracao(estado.num1, estado.num2)
      case 'multiplicacao' :
        return multiplicacao(estado.num1, estado.num2)
      case 'divisao' :
        return divisao(estado.num1, estado.num2)
    }
  }
</script>

<template>
  <div class="container">
    <Header />
    <Form :operacao="operacao()" :estado="estado" />
  </div>
</template>

<style scoped>

</style>
