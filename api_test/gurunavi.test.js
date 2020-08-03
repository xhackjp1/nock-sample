const nock = require('nock');
const gurunavi = require('./gurunavi')

test('gurunaviの成功した場合ユニットテスト', async () => {
  const url = 'https://api.gnavi.co.jp';
  var path = '/RestSearchAPI/v3/';
  nock(url).get(path).reply(200, {
    'username': 'name' // 本来の成功時のレスポンスを使う
  });
  
  expect(await gurunavi.search()).toBe("name");
})

test('gurunaviに失敗したい場合ユニットテスト', async () => {
  const url = 'https://api.gnavi.co.jp';
  var path = '/RestSearchAPI/v3/';
  nock(url).get(path).reply(400, {
    'error': 'リクエスパラメータが違います' // 本来の成功時のレスポンスを使う
  });
  
  expect(await gurunavi.search()).toBe("Error: Request failed with status code 400");
})