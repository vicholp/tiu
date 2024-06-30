<template>
  <div>
    <NavbarChistosa />
    <div class="flex flex-col gap-5">
      <div class="border-b-4 border-orange-300 bg-orange-50 text-gray-800 ">
        <div class="container mx-auto flex gap-5 px-5">
          <router-link to="/chistosa/course/1">
            <div class=" border-spacing-5 px-3 py-5">
              Curso
            </div>
          </router-link>

          <div class="px-3 py-5">
            Participantes
          </div>
          <router-link to="/chistosa/course/1/califications">
            <div class="px-3 py-5  font-medium">
              Calificaciones
            </div>
          </router-link>
          <div class="px-3 py-5">
            Competencias
          </div>
        </div>
      </div>
      <div class="container mx-auto flex flex-col gap-5">
        <div class="flex flex-col justify-center gap-2 py-3">
          <div class="font-bold text-xl text-gray-800 ">
            Gestion de proyectos informaticos
          </div>
        </div>
        <div class="flex flex-col gap-9 bg-white p-5 rounded shadow-xl">
          <div
            v-for="calification in califications"
            :key="calification.name"
            class="grid grid-cols-12"
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
          calification: 10,
          percentage: '24%',
          scale: '0-100',
          contribution: '50%',
          weight: '30%',
          comment: 'Excelente trabajo',
        },
        {
          name: 'Tarea Lean Canvas - 04/04/2024',
          calification: 10,
          percentage:'24%',
          scale: '0-100',
          contribution: '50%',
          weight: '30%',
          comment: 'Excelente trabajo',
        },
        {
          name: 'Tarea Lean Canvas - 04/04/2024',
          calification: 10,
          percentage: '24%',
          scale: '0-100',
          contribution: '50%',
          weight: '30%',
          comment: 'Excelente trabajo',
        },
      ],
    };
  },
};

</script>
