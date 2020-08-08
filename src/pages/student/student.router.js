const studentPage = resolve => require(['./index'], resolve);

export default {
    path: '/student',
    name: 'student',
    meta: {
        title: '学生端'
    },
    component: studentPage
}