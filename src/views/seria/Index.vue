<template>
  <Navbar />
  <div class="mt-6 ">
    <h1 class="text-3xl font-medium mb-5 container mx-auto">
      Bienvenidos
    </h1>
    <div class="shadow-md p-8 mx-8 bg-white">
      <h2 class="text-2xl mb-4">
        Mis cursos
      </h2>
      <div class="flex justify-evenly">
        <div class="flex flex-col gap-4 shadow-xl p-6 w-1/5 justify-between">
          Gestión de proyectos informaticos
          <router-link
            :to="{name: 'course', params: {id:1}}"
            class="w-fit"
          >
            <div class="pr-4 pt-4">
              ir al curso
            </div>
          </router-link>
        </div>
        <div class="flex flex-col gap-4 shadow-xl p-6 w-1/5 justify-between">
          Fisica
          <router-link
            :to="{name: 'course', params: {id:2}}"
            class="w-fit"
          >
            <div class="pr-4 pt-4">
              ir al curso
            </div>
          </router-link>
        </div>
        <div class="flex flex-col gap-4 shadow-xl p-6 w-1/5 justify-between">
          Quimica
          <router-link
            :to="{name: 'course', params: {id:3}}"
            class="w-fit"
          >
            <div class="pr-4 pt-4">
              ir al curso
            </div>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>
<script>

import Navbar from '@/components/Navbar.vue';

export default {
  components: {
    Navbar,
  },
};

</script>
