<template>
  <div>
    <NavbarChistosa />
    <div class="flex flex-col gap-5">
      <div class="border-b-4 border-orange-300 bg-orange-50 text-gray-800 ">
        <div class="container mx-auto flex gap-5 px-5">
          <div class="font-bold  px-3 py-5">
            Curso
          </div>
          <div class="px-3 py-5">
            Participantes
          </div>
          <router-link to="/chistosa/course/1/califications">
            <div class="px-3 py-5">
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
          <div class=" flex gap-3">
            <div class="bg-gray-200 text-sm rounded px-3 py-1 flex items-center gap-1">
              <Icon icon="line-md:menu" />
              INF360
            </div>
            <div class="bg-gray-200 text-sm rounded px-3 py-1 flex items-center gap-1">
              <Icon icon="line-md:person" />
              Paralelos:200/201
            </div>
            <div class="bg-gray-200 text-sm rounded px-3 py-1 flex items-center gap-1">
              <Icon icon="line-md:calendar" />
              2024-01
            </div>
          </div>
        </div>
        <div class="flex flex-col gap-5 bg-white p-5 rounded-xl shadow-xl">
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
              class="flex items-center gap-5 border p-5 rounded-xl"
            >
              <div :class="`${link.class} p-2  rounded-xl`">
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
import NavbarChistosa from '@/components/NavbarChistoso.vue';


export default {
  components: {
    Icon,
    NavbarChistosa,
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
          icon: 'line-md:bell-alert',
          title: 'Noticias y avisos',
          class: ' bg-blue-500 text-white',
          link: '/chistosa/upload',
        },
        {
          icon: 'line-md:document',
          title: 'Entrega 4',
          class: ' bg-red-500 text-white',
          link: '/chistosa/upload',
        },
        {
          icon: 'line-md:square-to-confirm-square-transition',
          title: 'Control 4',
          class: 'bg-green-500 text-white',
          link: '/chistosa/course/1/answer',
        },
      ],
    };
  },
};

</script>
