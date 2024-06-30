<template>
  <Navbar />
  <div class="mt-6 ">
    <h1 class="text-3xl font-medium mb-5 container mx-auto">
      Bienvenidos
    </h1>
    <div class="p-8 mx-8 bg-white container mx-auto">
      <h2 class="text-2xl mb-4">
        Mis cursos
      </h2>
      <div class="flex gap-5">
        <div class="flex flex-col w-full gap-4 p-6 border-2 border-gray-400 justify-between">
          (202401)(INF360) GESTIÓN DE PROYECTOS INFORMÁTICOS|Paralelos:200/201
          <router-link
            :to="{name: 'course', params: {id:1}}"
            class="w-fit"
          >
            <div class="pr-4 pt-4 text-blue-500 font-bold">
              ir al curso
            </div>
          </router-link>
        </div>
        <div class="flex flex-col w-full gap-4 p-6 border-2 border-gray-400 justify-between">
          (202401)(INF338) TESTING DE INTERFACES USUARIOS|Paralelos:200
          <router-link
            :to="{name: 'course', params: {id:2}}"
            class="w-fit"
          >
            <div class="pr-4 pt-4 text-blue-500 font-bold">
              ir al curso
            </div>
          </router-link>
        </div>
        <div class="flex flex-col w-full gap-4 p-6 border-2 border-gray-400 justify-between">
          (202401)(INF379) VISUALIZACIÓN DE DATOS
          <router-link
            :to="{name: 'course', params: {id:3}}"
            class="w-fit"
          >
            <div class="pr-4 pt-4 text-blue-500 font-bold">
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
