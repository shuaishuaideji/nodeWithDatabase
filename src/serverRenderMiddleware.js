import React from 'react';
import { renderToString } from 'react-dom/server';
import { match, browserHistory } from 'react-router';
import Root from './view/RouterIndex';
import getRoutes from './routers';

// 传给下层两个变量
// <div id="app">${renderedContent}</div>
// <script>
//   window.__INITIAL_STATE__ = ${serialize(initialState)};
// </script>
// 1. renderedContent
// 2. serialize(initialState)
console.log('进来了');
module.exports = (req, res, next) => {
  match({
    browserHistory,
    routes: getRoutes(),
    location: req.originalUrl,
  }, (error, redirectLocation, renderProps) => { // eslint-disable-line
    if (error) {
      console.log('出错了');
      // 不作处理，转给客户端渲染
      return next();
    } else if (redirectLocation) {
    } else if (renderProps && renderProps.components) {
      const rootComp = <Root renderProps={renderProps} type="server" />;
      req.serverRenderData = { // eslint-disable-line
        content: renderToString(rootComp),
      };
      next()
    } else {
      console.log('直接出去了');
      next();
    }
  });
};
