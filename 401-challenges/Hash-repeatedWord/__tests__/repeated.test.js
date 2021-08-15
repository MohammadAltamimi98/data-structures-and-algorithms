const repeatedWords = require('../index');

describe('Checks the repeated words function', () => {

  string = "SAY SOMETHING SAY SOMETHING NOW !"
  test('should return an array of repeated words', () => {
    expect(repeatedWords(string)).toEqual(['say', 'something'])
  })

  test('should return no repeatition when there is none', () => {
    string="say something now !"
    expect(repeatedWords(string)).toEqual('no repeatitions')
  })
  
})
