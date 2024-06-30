<template>
  <NavbarChistoso />
  <div class="calendar bg-white my-6 mx-auto container rounded-xl shadow shadow-xl">
    <div class="header">
      <button @click="prevMonth">
        ◀ {{ monthNames[month-1] }}
      </button>
      <h2>{{ monthNames[month] }} {{ year }}</h2>
      <button @click="nextMonth">
        {{ monthNames[month+1] }}▶
      </button>
    </div>
    <div class="weekdays ">
      <div
        v-for="weekday in weekdays"
        :key="weekday"
        class="weekday"
      >
        {{ weekday }}
      </div>
    </div>
    <div class="grid">
      <div
        v-for="emptyDay in emptyDays"
        :key="emptyDay"
        class="day empty"
      />
      <div
        v-for="day in daysInMonth"
        :key="day.date"
        class="day rounded-xl"
      >
        <div class="number">
          {{ day.date }}
        </div>
        <div class="events">
          <div
            v-for="event in day.events"
            :key="event.id"
            :class="`${event.class} event `"
          >
            {{ event.name }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import NavbarChistoso from '@/components/NavbarChistoso.vue';

export default {
  components: {
    NavbarChistoso,
  },
  data(){
    return{
      month: new Date().getMonth(),
      year: new Date().getFullYear(),
      events: [
        {id: 1, name: 'Vencimiento Sprint Retrospective', date: '2024-06-30', class: 'bg-yellow-300'},
        {id: 2, name: 'Vencimiento de Historias para PMV', date: '2024-06-20', class: 'bg-red-300'},
        {id: 3, name: 'Vencimiento de Informe Card Sorting', date: '2024-06-21', class: 'bg-orange-300'},
        {id: 4, name: 'Vencimiento de Informe de Entrevistas', date: '2024-06-15', class: 'bg-blue-300'},
        {id: 5, name: 'Vencimiento de Informe de Observaciones', date: '2024-06-10', class: 'bg-green-300'},
        {id: 6, name: 'Vencimiento de Informe de Entrevistas', date: '2024-06-05', class: 'bg-teal-300' },
        {id: 7, name: 'Vencimiento de Informe de Observaciones', date: '2024-06-01', class: 'bg-green-300'},
        {id: 7, name: 'Vencimiento de Informe de Observaciones', date: '2024-06-25', class: 'bg-green-300'},
      ],
    };
  },
  computed: {
    daysInMonth() {
      const days = [];
      const date = new Date(this.year, this.month, 1);
      while (date.getMonth() === this.month) {
        days.push({
          date: date.getDate(),
          events: this.events.filter(event => new Date(event.date).toDateString() === date.toDateString()),
        });
        date.setDate(date.getDate() + 1);
      }
      return days;
    },
    emptyDays() {
      const startDay = new Date(this.year, this.month, 1).getDay();
      return Array((startDay + 6) % 7).fill(null);
    },
    monthNames(){
      return ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto',
              'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
    },
    weekdays() {
      return ['Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb', 'Dom'];
    },
  },
  method: {
    prevMonth() {
      if (this.month === 0) {
        this.month = 11;
        this.year--;
      } else {
        this.month--;
      }
    },
    nextMonth() {
      if (this.month === 11) {
        this.month = 0;
        this.year++;
      } else {
        this.month++;
      }
    },
  },
};
</script>

<style>
.calendar {
  padding: 1rem;
}
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
}
.weekdays {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  text-align: center;
  font-weight: bold;
  padding: 0.5rem 0;
  border-bottom: 1px solid #ddd;
}
.grid {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 1rem;
}
.day {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 8rem;
  padding: 0.5rem;
  border: 1px solid #ddd;
  transition: background-color 0.3s;
  @apply w-full border border-gray-300
}
.day:hover {
  background-color: #f0f0f0;
}
.day.empty {
  background-color: transparent;
  border: none;
}
.number {
  font-weight: bold;
}
.events {
  overflow: hidden;
}
.event {
  font-size: 0.8rem;
  @apply  p-1 px-2 text-gray-900 rounded-xl
}
</style>
