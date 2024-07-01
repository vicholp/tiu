<template>
  <div>
    <NavbarChistosa />
    <div class="flex flex-col gap-5">
      <div class="border-b-4 border-orange-300 bg-orange-50 text-gray-800 ">
        <div class="container mx-auto flex gap-5 px-5">
          <router-link to="/chistosa/course/1">
            <div class=" border-spacing-5 px-3 py-4">
              Curso
            </div>
          </router-link>

          <div class="px-3 py-4">
            Participantes
          </div>
          <router-link to="/chistosa/course/1/califications">
            <div class="px-3 py-4 border-b-2 border-red-500 font-medium">
              Calificaciones
            </div>
          </router-link>
          <div class="px-3 py-4">
            Competencias
          </div>
        </div>
      </div>
      <div class="container mx-auto flex flex-col gap-5">
        <div class="flex flex-col justify-center mb-2 py-3">
          <h1 class="text-3xl font-medium container mx-auto">
            (202401)(INF360) GESTIÓN DE PROYECTOS INFORMÁTICOS|Paralelos:200/201
          </h1>
        </div>
        <div class="flex flex-col gap-6 bg-white p-5 rounded-xl shadow-xl">
          <h2 class="font-bold text-xl">
            Calificaciones
          </h2>
          <div>
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
              class="grid grid-cols-12 space-y-4"
            >
              <div class="col-span-3 flex items-center gap-3">
                <Icon
                  icon="line-md:document"
                  class="text-xl"
                />
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
  </div>
</template>

<script>

import { Icon } from '@iconify/vue';
import NavbarChistosa from '@/components/NavbarChistoso.vue';

export default {
  components: {
    Icon,
    NavbarChistosa,
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
