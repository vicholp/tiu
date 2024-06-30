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
    {
      path: '/chistosa/',
      name: 'chistosa.home',
      component: () => import('../views/chistosa/Index.vue'),
    },
    {
      path: '/chistosa/course/:id',
      name: 'chistosa.course',
      component: () => import('../views/chistosa/Course.vue'),
    },
    {
      path: '/chistosa/course/:id/califications',
      name: 'chistosa.course.califications',
      component: () => import('../views/chistosa/CourseCalifications.vue'),
    },
    {
      path: '/chistosa/course/:id/answer',
      name: 'chistosa.course.answer',
      component: () => import('../views/chistosa/AnswerQuestions.vue'),
    },
    {
      path: '/chistosa/calendar',
      name: 'chistosa.calendar',
      component: () => import('../views/chistosa/Calendar.vue'),
    },
    {
      path: '/chistosa/upload',
      name: 'chistosa.upload',
      component: () => import('../views/chistosa/UploadFile.vue'),
    },
  ],
});

export default router;
