const ua = navigator.userAgent.toLowerCase();
let UA = {};
let s = null;
UA.ie = (s = ua.match(/(msie\s|trident.*rv:)([\d.]+)/)) ? s[2] : false;
UA.firefox = (s = ua.match(/firefox\/([\d.]+)/)) ? !!s[1] : false;
UA.chrome = (s = ua.match(/chrome\/([\d.]+)/)) ? !!s[1] : false;
UA.opera = (s = ua.match(/opera.([\d.]+)/)) ? !!s[1] : false;
UA.safari = (s = ua.match(/version\/([\d.]+).*safari/)) ? !!s[1] : false;
UA.android = (s = ua.match(/android/)) ? !!s : false;
UA.iphone = (s = ua.match(/iphone os/)) ? !!s : false;
UA.ipad = (s = ua.match(/ipad/)) ? !!s : false;
UA.ios = UA.ipad || UA.iphone;
UA.isWin32 = /win32/i.test(window.navigator.platform);
UA.isWeixin = (s = ua.match(/MicroMessenger/i)) ? !!s : false; // 判断是否是在微信浏览器里面
UA.isUcweb = (s = ua.match(/ucbrowser/)) ? !!s : false;
UA.isMqq = navigator.userAgent.indexOf('QQ') !== -1;
UA.isWeiBo = (s = ua.match(/__weibo__/)) ? !!s : false; // 是否微博浏览器
UA.winClient = (s = ua.match(/winclient/)) ? !!s : false; // 是否pc客户端

export default UA;
