const teacherPage = resolve => require(['./index'], resolve);

export default {
    path: '/teacher',
    name: 'teacher',
    meta: {
        title: '老师端'
    },
    component: teacherPage
}