<template>
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
      <div class="flex flex-col gap-5 bg-white  p-8">
        <h2 class="text-3xl font-medium">
          Entrega 4
        </h2>
        <div class="bg-gray-100 p-4">
          <p>
            <b>Apertura:</b> miercoles, 27 de marzo de 2024, 00:00
          </p>
          <p>
            <b>Cierre:</b> Sabado, 6 de Julio de 2024, 23:55
          </p>
        </div>
        <input
          id="file"
          type="file"
          class="my-6 hidden"
          @change="uploaded = true"
        >
        <label
          class="block cursor-pointer bg-gray-500 w-fit text-white px-3 py-2"
          for="file"
        >
          Agregar entrega
        </label>

        <h2 class="text-2xl">
          Estado de la entrega
        </h2>
        <table class="table-auto">
          <tbody>
            <tr
              v-for="item in table"
              :key="item.title"
              class="even:bg-white odd:bg-gray-100"
            >
              <td class="border px-4 py-2 font-bold">
                {{ item.title }}
              </td>
              <td class="border px-4 py-2">
                <p v-if="item.title == 'Estado de la entrega'">
                  <span v-if="uploaded">
                    Entregado
                  </span>
                  <span v-else>
                    No se ha enviado nada en esta tarea
                  </span>
                </p>
                <p v-else>
                  {{ item.value }}
                </p>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>

import Navbar from "@/components/Navbar.vue";

export default {
  components: {
    Navbar,
  },
  data() {
    return {
      table: [
        {
          title: "Grupo",
          value: "G78",
        },
        {
          title: "Estado de la entrega",
          value: ``,
        },
        {
          title: "Estado de la calificación",
          value: "Sin calificar",
        },
        {
          title: "Tiempo restante",
          value: "8 días",
        },
        {
          title: "Última modificación",
          value: "-",
        },
        {
          title: "Comentarios de la entrega",
          value: "Comentarios (0)",
        },
      ],
      uploaded: false,
    };
  },
};
</script>
