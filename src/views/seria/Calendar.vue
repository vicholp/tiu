<template>
  <Navbar />
  <div class="calendar bg-white my-6 mx-auto">
    <div class="header">
      <button @click="prevMonth">
        ◀ {{ monthNames[month-1] }}
      </button>
      <h2>{{ monthNames[month] }} {{ year }}</h2>
      <button @click="nextMonth">
        {{ monthNames[month+1] }}▶
      </button>
    </div>
    <div class="weekdays">
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
        class="day"
      >
        <div class="number">
          {{ day.date }}
        </div>
        <div class="events">
          <div
            v-for="event in day.events"
            :key="event.id"
            class="event"
          >
            {{ event.name }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import Navbar from '@/components/Navbar.vue';

export default {
  components: {
    Navbar,
  },
  data(){
    return{
      month: new Date().getMonth(),
      year: new Date().getFullYear(),
      events: [
        {id: 1, name: 'Vencimiento Sprint Retrospective', date: '2024-06-30'},
        {id: 2, name: 'Vencimiento de Historias para PMV', date: '2024-06-20'},
        {id: 3, name: 'Vencimiento de Informe Card Sorting', date: '2024-06-19'},
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
  width: 100%;
  max-width: 800px;
  padding: 1rem;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.weekdays {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  text-align: center;
  font-weight: bold;
  padding: 0.5rem 0;
}
.grid {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 1rem;
}
.day {
  border: 1px solid #ddd;
  padding: 1rem;
}
.day.empty {
  background-color: transparent;
  border: none;
}
.number {
  font-weight: bold;
}
.events {
  margin-top: 1rem;
}
.event {
  background: #f0f0f0;
  padding: 0.5rem;
  border-radius: 4px;
  margin-top: 0.5rem;
}
</style>
