<template>
  <div>
    <NavbarChistosa />
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
          <div class="px-3 py-4">
            Calificaciones
          </div>
        </router-link>
        <div class="px-3 py-4">
          Competencias
        </div>
      </div>
    </div>
    <h1 class="text-3xl font-medium mb-5 container mx-auto mt-8">
      (202401)(INF360) GESTIÓN DE PROYECTOS INFORMÁTICOS|Paralelos:200/201
    </h1>
    <div class="flex flex-col gap-5 py-5 shadow-xl p-6 mx-8 bg-white rounded-xl mb-6">
      <div class="container mx-auto flex flex-col gap-5">
        <div class="font-bold text-3xl">
          Control 4
        </div>
        <div class="flex gap-5">
          <div class="flex flex-col flex-grow gap-5">
            <div
              v-for="question, index in questions"
              :key="question.question"
              class="flex items-center gap-5"
            >
              <div class="bg-blue-100 h-full justify-center flex flex-col p-5 whitespace-nowrap rounded-xl font-bold">
                <div>
                  Pregunta {{ index + 1 }}
                </div>
                <div>
                  Puntua {{ question.puntaje }}
                </div>
              </div>
              <div class="flex flex-col gap-3 bg-blue-200 p-5 w-full rounded-xl">
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
          <div class="flex flex-col gap-3 p-5 w-50 h-full bg-white rounded-xl shadow">
            <div class="flex gap-2">
              <div class="p-2 border">
                1
              </div>
              <div class="p-2 border">
                2
              </div>
            </div>
            <router-link to="/chistosa/course/1">
              <button class="font-medium p-3">
                Finalizar intento
              </button>
            </router-link>
          </div>
        </div>
        <div class="content-center justify-center">
          <router-link to="/chistosa/course/1">
            <button class="py-2 px-4 text-white font-bold border rounded-xl bg-blue-500 hover:bg-blue-600">
              Finalizar intento
            </button>
          </router-link>
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
      questions: [
        {
          question: '¿Cuál es la capital de Chile?',
          alternatives: [
            'Santiago',
            'Buenos Aires',
            'Lima',
            'Montevideo',
          ],
          puntaje: '20',
        },
        {
          question: '¿Cuál es la capital de Argentina?',
          alternatives: [
            'Santiago',
            'Buenos Aires',
            'Lima',
            'Montevideo',
          ],
          puntaje: '10',
        },
      ],
    };
  },
};

</script>
