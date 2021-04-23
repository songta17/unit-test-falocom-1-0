// import { shallowMount } from '@vue/test-utils'
// import HelloWorld from '@/components/HelloWorld.vue'

// describe('HelloWorld.vue', () => {
//   it('renders props.msg when passed', () => {
//     const msg = 'new message'
//     const wrapper = shallowMount(HelloWorld, {
//       props: { msg }
//     })
//     expect(wrapper.text()).toMatch(msg)
//   })
// })

import { mount } from '@vue/test-utils'

const App = {
  template: `
    <div>Hello World</div>
  `
}

test('App', function() {
  const wrapper = mount(App)
  console.log(wrapper.html())
  expect(wrapper.html()).toBe('<div>Hello World</div>')
})