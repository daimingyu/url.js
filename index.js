(function(global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
    typeof define === 'function' && define.amd ? define(factory) :
    global.Url = factory()
} (this, function() {
    
    'use strict';
    var Url = {
        parse: function(href){
            var protocol = href.split(':')[0] ? href.split(':')[0] : '';
            var host = href.split('/')[2].split(':')[0];
            var port = href.split('/')[2].split(':')[1] ? href.split('/')[2].split(':')[1] : '80';
            var path = '/';
            var tArr = href.split('?')[0].split('/');
            for(var j=3; j<tArr.length; j++){
                if(j === tArr.length-1){
                    path += tArr[j];
                }else{
                    path += tArr[j] + '/';
                }
            }
            var query = {};
            if(href.split('?')[1]){
                var arr = href.split('?')[1].split('&');
                for(var i=0; i<arr.length; i++){
                    query[arr[i].split('=')[0]] = arr[i].split('=')[1];
                }
            }
            return {
                protocol: protocol,
                host: host,
                port: port,
                path: path,
                query: query
            }
        }
    }

    //返回对象
    return Url;
}));
