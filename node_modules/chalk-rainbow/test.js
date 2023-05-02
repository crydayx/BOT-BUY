import test from 'ava'
import chalkRainbow from './'

test('chalk-rainbow does something awesome', t => {
  t.plan(1)

  console.log(chalkRainbow('Awesome rainbow string!'))
  t.true(true)
})
