import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/seria/Index.vue'),
    },
    {
      path: '/course/:id',
      name: 'course',
      component: () => import('../views/seria/Course.vue'),
    },
    {
      path: '/course/:id/califications',
      name: 'course.califications',
      component: () => import('../views/seria/CourseCalifications.vue'),
    },
    {
      path: '/course/:id/answer',
      name: 'course.answer',
      component: () => import('../views/seria/AnswerQuestions.vue'),
    },
    {
      path: '/calendar',
      name: 'calendar',
      component: () => import('../views/seria/Calendar.vue'),
    },
    {
      path: '/upload',
      name: 'upload',
      component: () => import('../views/seria/UploadFile.vue'),
    },
  ],
});

export default router;
