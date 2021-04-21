export default function (context) {
  console.log('CHECK MIDDLEWARE')
  context.store.dispatch('initAuth', context.req)
}
