<template>
  <div>
    <Navbar />
    <div class="flex flex-col gap-5">
      <div class="bg-gray-500 text-white ">
        <div class="container mx-auto flex gap-5 px-5">
          <router-link to="/course/1">
            <div class="font-medium border-b-2 border-spacing-5 px-3 py-4">
              Curso
            </div>
          </router-link>
          <div class="px-3 py-4">
            Participantes
          </div>
          <router-link to="/course/1/califications">
            <div class="px-3 py-4">
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
        <div class="flex flex-col gap-5 bg-white p-5 mb-6 shadow">
          <div class="flex">
            <div
              v-for="(unit, index) in units"
              :key="unit"
              :class="`p-3 px-5 text-blue-500 rounded-t ${index === 0 ? 'border font-bold' : 'border-b'}`"
            >
              {{ unit }}
            </div>
          </div>
          <div class="flex flex-col gap-5">
            <div
              v-for="link in links"
              :key="link"
              class="flex items-center gap-5 border p-5"
            >
              <div :class="`${link.class} p-2 text-black`">
                <Icon
                  :icon="link.icon"
                  class="text-4xl"
                />
              </div>
              <router-link :to="link.link">
                <div class="text-blue-500">
                  {{ link.title }}
                </div>
              </router-link>
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
      units: [
        'Informacion General',
        'Unidad 1',
        'Unidad 2',
        'Unidad 3',
      ],
      links: [
        {
          icon: 'mdi:link',
          title: 'Noticias y avisos',
          class: 'border-2 border-gray-500',
          link: '',

        },
        {
          icon: 'mdi:link',
          title: 'Entrega 4',
          class: 'border-2 border-gray-500',
          link: '/upload',

        },
        {
          icon: 'mdi:link',
          title: 'Control 4',
          class: 'border-2 border-gray-500',
          link: '/course/1/answer',

        },
      ],
    };
  },
};

</script>
