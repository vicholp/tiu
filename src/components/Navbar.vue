<template>
  <div class="flex p-3 px-5 items-center shadow-md w-full justify-between bg-white">
    <div class="flex flex-row gap-6">
      <router-link :to="{name: 'home'}">
        <div>
          Pagina principal
        </div>
      </router-link>
      <router-link :to="{name: 'home'}">
        <div>
          Mis cursos
        </div>
      </router-link>
      <router-link :to="{name: 'calendar'}">
        <div>
          Calendario
        </div>
      </router-link>
    </div>
    <div class="flex items-center gap-4">
      <Icon
        icon="eva:search-fill"
        class="text-md"
      />
      <div class="w-[1px] h-12 bg-gray-200" />
      <Icon
        icon="simple-line-icons:bubble"
        class="text-md"
      />
      <Icon
        icon="fa:bell-o"
        class="text-md"
      />
      <button
        class="relative"
        @click="toggleMenu"
      >
        <div class="rounded-full bg-gray-300 h-10 w-10" />
      </button>
      <div
        v-if="isMenuOpen"
        class="absolute right-0 mt-20 w-48 bg-white shadow-lg rounded-lg"
      >
        <router-link
          :to="{ name: 'calendar' }"
          class="block px-4 py-2 text-gray-700 hover:bg-gray-200"
        >
          Calendario
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>

import { Icon } from '@iconify/vue';

export default {
  components: {
    Icon,
  },
  data(){
    return {
      isMenuOpen: false,
    };
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    },
  },
};


</script>
