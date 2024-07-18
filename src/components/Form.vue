<script setup>
    const props = defineProps(['formulario', 'estado'])
</script>

<template>
    <form @submit.prevent @submit="formulario">
        <div class="row d-flex justify-content-center">
            <div class="col-8">
                <div class="row form-control d-flex justify-content-between p-5 text-bg-dark">
                    <div class="col-3 text-bg-dark">
                        <input required type="number" placeholder="Primeiro valor" class="form-control text-center text-bg-dark"
                            @change="e => estado.num1 = parseInt(e.target.value)">
                    </div>
                    <div class="col-2">
                        <select class="form-control text-center text-bg-dark" @change="(e) => estado.operacao = e.target.value">
                            <option value="soma">+</option>
                            <option value="subtracao">-</option>
                            <option value="multiplicacao">x</option>
                            <option value="divisao">/</option>
                        </select>
                    </div>
                    <div class="col-3">
                        <input required type="number" placeholder="Segundo valor" class="form-control text-center text-bg-dark"
                            @change="e => estado.num2 = parseInt(e.target.value)">
                    </div>
                    <div class="col-1">
                        <button type="submit" class="form-control btn btn-dark">=</button>
                    </div>
                    <div class="col-2">
                        <span class="form-control text-center text-bg-dark">{{ estado.resultado }}</span>
                    </div>
                </div>
            </div>
        </div>
    </form>
</template>

<style scoped>
    button {
        border: 1px solid #fff;
    }

    input::placeholder {
        color: #fff;
    }
</style>