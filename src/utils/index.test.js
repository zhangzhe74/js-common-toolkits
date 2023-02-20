const { getUrlParams } = require('./index.ts');

test('getUrlParams', () => {
  expect(getUrlParams('http://asdf.com?name=zhang')).toEqual({ name: 'zhang' });
});
