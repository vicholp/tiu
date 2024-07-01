<template>
  <div>
    <Navbar />
    <div class="flex flex-col gap-5">
      <div class="bg-gray-500 text-white ">
        <div class="container mx-auto flex gap-5 px-5">
          <router-link to="/course/1">
            <div class="px-3 py-4">
              Curso
            </div>
          </router-link>
          <div class="px-3 py-4">
            Participantes
          </div>
          <router-link to="/course/1/califications">
            <div class="font-medium border-b-2 border-spacing-5 px-3 py-4">
              Calificaciones
            </div>
          </router-link>
          <div class="px-3 py-4">
            Competencias
          </div>
        </div>
      </div>
      <div class="container mx-auto flex flex-col gap-5">
        <div class="font-bold text-3xl">
          (202401)(INF360) GESTIÓN DE PROYECTOS INFORMÁTICOS|Paralelos:200/201
        </div>
        <div class="flex flex-col gap-6 bg-white p-5">
          <h2 class="font-bold text-xl">
            Calificaciones
          </h2>
          <div class="grid grid-cols-12 font-bold mb-2">
            <div class="col-span-3">
              Actividad
            </div>
            <div class="col-span-1">
              Peso
            </div>
            <div class="col-span-1">
              Escala
            </div>
            <div class="col-span-1">
              Calificacion
            </div>
            <div class="col-span-1">
              Porcentaje
            </div>
            <div class="col-span-4">
              Comentario
            </div>
            <div class="col-span-1">
              Contribucion
            </div>
          </div>
          <div
            v-for="calification in califications"
            :key="calification.name"
            class="grid grid-cols-12"
          >
            <div class="col-span-3 flex items-center">
              {{ calification.name }}
            </div>
            <div class="col-span-1">
              {{ calification.weight }}
            </div>
            <div class="col-span-1">
              {{ calification.scale }}
            </div>
            <div class="col-span-1">
              {{ calification.calification }}
            </div>
            <div class="col-span-1">
              {{ calification.percentage }}
            </div>
            <div class="col-span-4">
              {{ calification.comment }}
            </div>
            <div class="col-span-1">
              {{ calification.contribution }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import { Icon } from '@iconify/vue';
import Navbar from '@/components/Navbar.vue';


export default {
  components: {
    Icon,
    Navbar,
  },
  data() {
    return {
      califications: [
        {
          name: 'Tarea Lean Canvas - 04/04/2024',
          calification: 50,
          percentage: '24%',
          scale: '0-100',
          contribution: '20%',
          weight: '30%',
          comment: 'Sin comentarios',
        },
        {
          name: 'Historias PMV - 19/06/2024',
          calification: 70,
          percentage:'24%',
          scale: '0-100',
          contribution: '30%',
          weight: '30%',
          comment: 'Excelente trabajo',
        },
        {
          name: 'Presentación PMV - 29/06/2024',
          calification: 77,
          percentage: '24%',
          scale: '0-100',
          contribution: '50%',
          weight: '30%',
          comment: 'Buen PMV!',
        },
      ],
    };
  },
};

</script>
