<template>
  <div>
  <h1 v-for="user in data">
    {{user}}
  </h1>
    <input placeholder="Имя" v-model="name" type="text">
    <input placeholder="Почта" v-model="email" type="text">
    <button @click="handleAdd">Добавить</button>
  </div>
</template>

<script setup lang="ts">
const {data, refresh} = await useFetch('/api/user')

const name = ref('')
const email = ref('')

const handleAdd = async () => {

  await useFetch('/api/user', {
    method: 'POST',
    body: {
      name: name.value,
      email: email.value
    }
  })
  await refresh()
}

</script>

<style scoped lang="scss">

</style>