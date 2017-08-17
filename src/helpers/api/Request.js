'use strict'
import Host from './Host'
import HTTP from './HTTP.js'




export default {
    get(action, params) {
        let url;
        url = Host.hostPath + action;

        console.log('url ===== ' + url);
        return HTTP.get(url, params).then(
            (res) => {

                if (res.code !== 0 ) {
                    alert(res.msg)
                    throw '接口出错'
                }

                return res;
            }
        ).catch(
            (error) => {

                console.log(error)
                throw '连接失败'
            })


    },

    put(action, params) {
        let url;
        url = Host.hostPath + action;

        console.log('url ===== ' + url);
        return HTTP.put(url, params).then(
            (res) => {

                if (res.code !== 0 ) {
                    alert(res.msg)
                    throw '接口出错'
                }

                return res;
            }
        ).catch(
            (error) => {

                console.log(error)
                throw '连接失败'
            })


    },


    post(action, params) {
        let url;
        url = Host.hostPath + action;


        console.log('url 冯文华===== ' + url);

        return HTTP.post(url, params).then(
            (res) => {

                if (res.code !== 0 ) {
                    alert(res.msg)
                    throw '接口出错'
                }


                return res;
            }
        ).catch(
            (error) => {
                console.log(error)
                throw '连接失败'
            })


    },


}
