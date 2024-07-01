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
            <div class="border-spacing-5 px-3 py-4">
              Calificaciones
            </div>
          </router-link>
          <div class="px-3 py-4">
            Competencias
          </div>
        </div>
      </div>
      <div class="container flex flex-col mx-auto gap-5">
        <div class="font-bold text-3xl">
          (202401)(INF360) GESTIÓN DE PROYECTOS INFORMÁTICOS|Paralelos:200/201
        </div>
        <div class="flex flex-col gap-5 py-5 p-6 mx-8 bg-white mb-6">
          <div class="container mx-auto flex flex-col gap-5">
            <div class="font-bold text-2xl">
              Control 4
            </div>
            <div class="flex gap-5">
              <div class="flex flex-col flex-grow gap-5">
                <div
                  v-for="question, index in questions"
                  :key="question.question"
                  class="flex items-center gap-5"
                >
                  <div class="border bg-w h-full justify-center flex p-5 whitespace-nowrap">
                    Pregunta {{ index + 1 }}
                  </div>
                  <div class="flex flex-col gap-3 bg-blue-200 p-5 w-full">
                    <div>
                      {{ question.question }}
                    </div>
                    <div class="flex flex-col">
                      <div
                        v-for="alternative in question.alternatives"
                        :key="alternative"
                        class="flex items-center gap-5"
                      >
                        <input type="radio">
                        <div>
                          {{ alternative }}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="flex flex-col gap-3 p-5 w-50 h-full bg-white border">
                <div class="flex gap-2">
                  <div class="p-2 border">
                    1
                  </div>
                  <div class="p-2 border">
                    2
                  </div>
                </div>
                <router-link to="/course/1">
                  <button class="font-medium p-3">
                    Finalizar intento
                  </button>
                </router-link>
              </div>
            </div>
            <div class="content-center justify-center">
              <router-link to="/course/1">
                <button class="py-2 px-4 font-bold">
                  Finalizar intento
                </button>
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
      questions: [
        {
          question: '¿Cuál es la capital de Chile?',
          alternatives: [
            'Santiago',
            'Buenos Aires',
            'Lima',
            'Montevideo',
          ],
        },
        {
          question: '¿Cuál es la capital de Argentina?',
          alternatives: [
            'Santiago',
            'Buenos Aires',
            'Lima',
            'Montevideo',
          ],
        },
      ],
    };
  },
};

</script>
