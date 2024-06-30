<template>
  <Navbar />
  <div class="bg-blue-800 text-white ">
    <div class="container mx-auto flex gap-5 px-5">
      <router-link to="/course/1">
        <div class="px-3 py-5  font-bold border-b-2">
          Curso
        </div>
      </router-link>
      <div class="px-3 py-5">
        Participantes
      </div>
      <div class="px-3 py-5 border-spacing-5 ">
        Calificaciones
      </div>
      <div class="px-3 py-5">
        Competencias
      </div>
    </div>
  </div>
  <div class="mt-6">
    <h1 class="text-3xl font-medium container mx-auto">
      Entrega 4
    </h1>
    <div class="bg-white shadow-md m-8 p-8">
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
        class="block my-6 cursor-pointer bg-[#154466] w-fit text-white px-3 py-2"
        for="file"
      >
        Agregar entrega
      </label>

      <h2 class="text-2xl mb-6">
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
