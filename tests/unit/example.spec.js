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

//******************/
// First Step
//******************/
// import { mount } from '@vue/test-utils'

// const App = {
//   template: `
//     <div>Hello World</div>
//   `
// }

// test('App', function() {
//   const wrapper = mount(App)
//   console.log(wrapper.html())
//   expect(wrapper.html()).toBe('<div>Hello World</div>')
// })

//******************/
// Second Step: Props
//******************/
// import { mount } from '@vue/test-utils'

// const App = {
//   props: {
//     count: {
//       type: Number
//     }
//   }, 
//   template: `
//     <div v-if="count % 2 === 0">
//       Count: {{ count }}. Count is even.
//     </div>

//     <div v-if="count % 2 !== 0">
//       Count: {{ count }}. Count is odd.
//     </div>
//   `
// }

// test('App', function() {
//   const wrapper = mount(App, {
//     props: {
//       count: 1
//     }
//   })

//   expect(wrapper.html()).toContain('Count: 1. Count is odd')
// })

//******************/
// Third Step Factory functions for concise tsts
//******************/
import { mount } from '@vue/test-utils'

const App = {
  props: {
    count: {
      type: Number
    }
  }, 
  template: `
    <div v-if="count % 2 === 0">
      Count: {{ count }}. Count is even.
    </div>

    <div v-if="count % 2 !== 0">
      Count: {{ count }}. Count is odd.
    </div>
  `
}

function factory(props) {
  return mount(App, {
    props
  })
}

describe('App', function() {
  test('render count when even', function() {
    const wrapper = factory({ count: 2 })
    expect(wrapper.html()).toContain('Count: 2. Count is even')
  }),

  test('render count when odd', function() {
    const wrapper = factory({ count: 1 })
    expect(wrapper.html()).toContain('Count: 1. Count is odd')
  })
})

///////////////////////
// TEST Component
//////////////////////

import CoolCard from '../../src/components/CoolCard.vue';

describe('CoolCard', () => {
  test('should render content correctly', () => {
    const wrapper = mount(CoolCard);
    expect(wrapper.find('[data-test="cool-card-div"]').text()).toEqual(
      'hello I am a card :)'
    );
  });
});

//******************/
// Fourth Step: Wrappers? Factories? Composition API?
//******************/

