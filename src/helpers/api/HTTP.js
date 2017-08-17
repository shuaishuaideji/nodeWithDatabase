//
//  HTTP.js
//  TCPayUser
//  网络请求类，提供get方法跟post方法
//  Created by 冯文华 on 2016-05-17.
//  Copyright © 2016 Defa. All rights reserved.
//

'use strict'
import queryString from 'query-string';
import fetch from 'isomorphic-fetch';
require('es6-promise').polyfill();
let kDeadline = 10;      // 默认超时时间10s


// 超时功能实现 dsd
//261137
//aaa
const oldfetch = fetch;
var newfetch = function (input, opts) {
    return new Promise((resolve, reject) => {

        let _timer = setTimeout(() => {
            reject('网络连接超时');
        }, 10000);

        oldfetch(input, opts)
            .then((result1) => {
                clearTimeout(_timer);
                return resolve(result1);
            }, reject);

    });
};


export default {
    get(url, params) {
        if (params) {
            url += '?' + queryString.stringify(params);
            console.log('完整的请求网址是' + url)
        }
        var headers = {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/x-www-form-urlencoded',
                'User-Agent': 'Curl',
                'Accept-Encoding': 'deflate',
            },
        }

        return newfetch(url, headers)
            .then(res => {

                return res.json()
            }
        );
    },
    put(url, params) {

        let headers = {
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-Type': ' application/json;charset=UTF-8',
                'User-Agent': 'Curl',
                'Accept-Encoding': 'deflate',
            },
            body:JSON.stringify(params),

        }

        return newfetch(url, headers)
            .then(res => {

                    return res.json()
                }
            );
    },

    post(url, params) {
        let headers = {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': ' application/json;charset=UTF-8',
                'User-Agent': 'Curl',
                'Accept-Encoding': 'deflate',
            },
            body:JSON.stringify(params),


        }
        return newfetch(url, headers)
            .then(res=> {
                try {

                    return res.json()
                } catch (e) {
                    return parseError;
                }
            },

            (res)=> {
                console.log(`request rejected ${res}`);
                throw res;
            })
    },


}
