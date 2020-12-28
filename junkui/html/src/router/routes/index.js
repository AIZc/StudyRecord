const Index = () => import('@/views/Index/Index')
const Empty = () => import('@/views/Index/Empty')

export default [
  {
    path: '/',
    component: Index,
  },
  {
    path: '*',
    component: Empty
  }
]