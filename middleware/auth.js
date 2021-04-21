export default function (context) {
  console.log('AUTH MIDDLEWARE')
  if(!context.store.getters.isAuthenticated) {
    context.redirect('/admin/auth')
  }
}
