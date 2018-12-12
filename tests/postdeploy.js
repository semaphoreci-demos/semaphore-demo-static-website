module.exports = {
  'Test live website' : function (client) {
    client
      .url('http://markoci-gatsby.s3-website-us-east-1.amazonaws.com')
      .waitForElementVisible('body', 1000)
      .assert.title('Gatsby Starter Blog')
      .end();
  }
};
