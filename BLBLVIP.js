

脚本功能：哔哩哔哩 大会员9.0
下载地址：appstore下载

[rewrite_local]

^https?:\/\/app\.bilibili\.com\/x\/resource\/ip url reject
^http[s]?:\/\/api\.bilibili\.com\/x\/member\/app\/face\/update\?access_key url reject-200
^http[s]?:\/\/app\.bilibili\.com\/bilibili\.app\.interface\.v1\.Teenagers\/UpdateStatus url reject-200
^http[s]?:\/\/api\.bilibili\.com\/x\/member\/app\/uname\/update\?_device url reject-200
^http[s]?:\/\/.*passport-login\/revoke url reject
^http[s]?:\/\/api\.biliapi\.net\/x\/v2\/reply\/add url reject-200
^http[s]?:\/\/passport\.bilibili\.com\/x\/passport-login\/type url reject
^http[s]?:\/\/api\.bilibili\.com\/x\/v2\/reply\/add url reject-200
^http[s]?:\/\/app\.bilibili\.com\/x\/v2\/splash\/show url reject-dict
^http[s]?:\/\/((app)|(passport)|(api))\.bilibili\.com\/x\/.*(account\/mine\?|passport-login|vip|show\/tab|account\/myinfo\?).*$ url script-response-body https://raw.githubusercontent.com/WeiRen0/Scripts/main/BLBLVIP.js
^http[s]?:\/\/((app)|(passport)|(api))\.bilibili\.com\/(bilibili|x\/v2|x\/vip|x\/resource|x\/passport).*$ url script-request-header https://raw.githubusercontent.com/WeiRen0/Scripts/main/BZTK.js

#去播放页面Ad原作者脚本库 https://github.com/app2smile/rules
^https:\/\/app\.bilibili\.com\/bilibili\.app\.(view\.v1\.View\/View|dynamic\.v2\.Dynamic\/DynAll|playurl\.v1\.PlayURL\/PlayView)$ url script-response-body https://raw.githubusercontent.com/app2smile/rules/master/js/bilibili-proto.js


[mitm]

hostname = *.biliapi.*,*.bilibili.*


















