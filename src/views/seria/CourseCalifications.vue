<template>
  <div>
    <Navbar />
    <div class="flex flex-col gap-5">
      <div class="bg-blue-800 text-white ">
        <div class="container mx-auto flex gap-5 px-5">
          <router-link to="/course/1">
            <div class="px-3 py-5">
              Curso
            </div>
          </router-link>
          <div class="px-3 py-5">
            Participantes
          </div>
          <div class="px-3 py-5 font-bold border-b-2 border-spacing-5 ">
            Calificaciones
          </div>
          <div class="px-3 py-5">
            Competencias
          </div>
        </div>
      </div>
      <div class="container mx-auto flex flex-col gap-5">
        <div class="font-bold text-3xl">
          (202401)(INF360) GESTIÓN DE PROYECTOS INFORMÁTICOS|Paralelos:200/201
        </div>
        <div class="flex flex-col gap-5 bg-white p-5 rounded">
          <div
            v-for="calification in califications"
            :key="calification.name"
            class="flex items-center"
          >
            <div />
            <div>
              {{
                calification.name
              }}:
              {{
                calification.calification
              }}
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
          calification: 10,

        },
        {
          name: 'Video Pitch',
          calification: 9,
        },
        {
          name: 'Historias de Usuario para PMV',
          calification: 8,
        },
      ],
    };
  },
};

</script>
