<template>
  <NavbarChistosa />
  <div class="border-b-4 border-orange-300 bg-orange-50 text-gray-800 ">
    <div class="container mx-auto flex gap-5 px-5">
      <div class="font-bold border-b-2 border-spacing-5 px-3 py-5">
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
  <div class="mt-6 container mx-auto flex flex-col gap-5">
    <h1 class="py-1 font-bold text-xl text-gray-800">
      Entrega 4
    </h1>
    <div class="bg-white rounded-xl shadow p-8">
      <div class="bg-gray-100 p-4 rounded-xl">
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
        class="block my-6 cursor-pointer bg-blue-500 rounded-xl w-fit text-white px-3 py-2"
        for="file"
      >
        Agregar entrega
      </label>

      <h2 class="text-2xl mb-6">
        Estado de la entrega
      </h2>
      <table class="table-auto ">
        <tbody class="">
          <tr
            v-for="item in table"
            :key="item.title"
            class="even:bg-white odd:bg-gray-100"
          >
            <td class="border px-4 py-2 font-bold">
              {{ item.title }}
            </td>
            <td class="border px-3 ">
              <p v-if="item.title == 'Estado de la entrega'">
                <span
                  v-if="uploaded"
                  class="bg-green-500 text-white px-5 py-2 rounded-xl"
                >
                  Entregado
                </span>
                <span
                  v-else
                  class="px-4 py-2"
                >
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

import NavbarChistosa from "@/components/NavbarChistoso.vue";

export default {
  components: {
    NavbarChistosa,
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
