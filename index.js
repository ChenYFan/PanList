// Enter your account cookies below.
// Or comment out those, then add them into CloudFlare Environment Variables.
const BDUSS = ''
const STOKEN = ''
const USERNAME = ''
const PASSWORD = ''

// Keep default for now.
const USER_AGENT = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.514.1919.810 Safari/537.36'
const loginhtml = `<!DOCTYPE html><html lang="zh-cmn-Hans"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1, user-scalable=no"><script src="https://cdn.jsdelivr.net/npm/jquery@3.4.1"></script><title>登录百度网盘后台</title><style>*,body{font-weight:300}.bg-container,.wrapper{position:absolute;overflow:hidden;left:0;width:100%}@font-face{font-family:iconfont;src:url(//at.alicdn.com/t/font_1706200_3sgw4esvyq9.eot?t=1584846914425);src:url(//at.alicdn.com/t/font_1706200_3sgw4esvyq9.eot?t=1584846914425#iefix) format('embedded-opentype'),url(data:application/x-font-woff2;charset=utf-8;base64,d09GMgABAAAAAAPcAAsAAAAACEAAAAOQAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHEIGVgCDMgqDVIMaATYCJAMUCwwABCAFhG0HUhswBxEVnPHIfiZkcgn7O+8oo66bEbK2OpSJxjfBA+X1vslMtll8iBW0KuzdSry1J/JGpwASAA0EaO7O95urXT4WOkKV5Nojj7b4hwrpy2SO/v97p78xLfvYuvYslzWHLex8DDAOpEDHnGQljg3TC+cUPEjbIQAHqRRD1GvQzI2BgvQTgBjYr083jJQNVcMRGEZbyVSVKhajY2hztCvAIv178YYywgANXUJ2atW7fk9qmZi1ZMCSjnILC8fbDUAHJFAMUCCGl/oGIm2uGBKHP1RRC3BgoKGZmLxVUbOWZcWqHRkc9A8PBBKFBsIGKXUBUAvlFZhwBAGmhiDBLIqgwKyVRwPuKwAOWAjCWUxL9mpIWOWKcikVmuwiF0+49sx9/bnn5gvfDdO/at6eQHTP5dHLd8Z6V67btSPG061Q523w0S5OzYETx4QbT9zXbnmuP/bdvOsL9lwR2D031utePndvMM7nXRncNy/G4xvlEveE69fc4Tdu+AbcnOdxa4E98/bFyZV75+5WxGRRnfY0cEulpaqbVCzNtxTEU1P1m2J4tFGwJ7VcytpevcrWOXd44oCjAyZu3DXRvQxryi09PV2/BcVQIlRxZPWvAFhMXkb1qQ3bHPFvOVXxWI1TjTLPFjtT5smFsAtxVqK82CcvekwcsbMOHDh4wOBxYw4eZI+NVR+A6Vmx4bGz1ZI0XFw1r0mlXm20lW5RpWd+s0u/ijYZwarmHJsZVi+tXKjMlU2rm186Hlk6tFxaPfwAWLPk3380K2u4Qm6xtmaprTL4b/dj0Nu/F+qwat8MpwLgzvpfdbSsPbbVBj9Ijy//kxa1tAb7qAqUxK4rT8490qpVpxGATiESBDT4aTX/LxTJg3H0MbPIZMAgJgaNIqSAxCCbpGjFQMdJObBhUBMcFKXhbCdRDEcilB0oZAYAQTiHQCOU4yAJ5ypJ0e6DTizvwEa4kODAK6KWdJIrLP1uHgWtYqDuj3zPi2FOvTHlb7BpaiWp1NwvSPRJKrMiW3zFAhljRPy2laohIzzTC9gN08S0Cgf0mjnV9ZLnpuxDWc/z5oZHQasYqPsj3/NiZGO9yX3/DTZNrdQQ+qJfkOjbpzIrWpBedUsrwrXcEr9tpWrICM/0AjyYaI5pLe8U0GvmemTWS47qmba6bH7D/IybAAdkZV1oQgoldGHjYViCYPl3WKxb86g+On/sE/+kc/CLtS1vNg==) format('woff2'),url(//at.alicdn.com/t/font_1706200_3sgw4esvyq9.woff?t=1584846914425) format('woff'),url(//at.alicdn.com/t/font_1706200_3sgw4esvyq9.ttf?t=1584846914425) format('truetype'),url(//at.alicdn.com/t/font_1706200_3sgw4esvyq9.svg?t=1584846914425#iconfont) format('svg')}.iconfont{font-family:iconfont!important;font-size:16px;font-style:normal;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.icon-querenzhengque:before{content:"\e600"}.icon-tishi:before{content:"\e640"}.icon-cuowu:before{content:"\e602"}.icon-jinggao:before{content:"\e62b"}*{box-sizing:border-box;margin:0;padding:0}body{font-family:"Source Sans Pro",sans-serif;color:#fff}body ::-webkit-input-placeholder{font-family:"Source Sans Pro",sans-serif;color:#fff;font-weight:300}body :-moz-placeholder{font-family:"Source Sans Pro",sans-serif;color:#fff;opacity:1;font-weight:300}body ::-moz-placeholder{font-family:"Source Sans Pro",sans-serif;color:#fff;opacity:1;font-weight:300}body :-ms-input-placeholder{font-family:"Source Sans Pro",sans-serif;color:#fff;font-weight:300}.wrapper{background:#0396FF;background:-webkit-linear-gradient(top left,#0396FF 0,#ABDCFF 100%);background:-moz-linear-gradient(top left,#0396FF 0,#ABDCFF 100%);background:-o-linear-gradient(top left,#0396FF 0,#ABDCFF 100%);background:linear-gradient(to bottom right,#0396FF 0,#ABDCFF 100%);height:100%}.bg-container{top:50%;height:400px;margin-top:-200px}.wrapper.form-success .container h1{transform:translatey(85px)}.container{max-width:600px;margin:0 auto;padding:80px 0;height:400px;text-align:center}.container h1{font-size:40px;transition-duration:1s;transition-timing-function:ease-in-put;font-weight:200}form button,form input{appearance:none;outline:0;padding:10px 15px;width:250px;font-size:18px;transition-duration:.25s}form{padding:20px 0;position:relative;z-index:2}form input{border:1px solid rgba(255,255,255,.4);background-color:rgba(255,255,255,.2);border-radius:3px;margin:0 auto 10px;display:block;text-align:center;color:#fff;font-weight:300}form input:hover{background-color:rgba(255,255,255,.4)}form input:focus{background-color:#fff;width:300px;color:#ABDCFF}form button{background-color:#fff;border:0;color:#ABDCFF;border-radius:3px;cursor:pointer}form button:hover{background-color:#f5f7f9}.bg-bubbles{position:absolute;top:0;left:0;width:100%;height:100%;z-index:1}.bg-bubbles li{position:absolute;list-style:none;display:block;width:40px;height:40px;background-color:rgba(255,255,255,.15);bottom:-160px;-webkit-animation:square 25s infinite;animation:square 25s infinite;-webkit-transition-timing-function:linear;transition-timing-function:linear}.bg-bubbles li:nth-child(1){left:10%}.bg-bubbles li:nth-child(2){left:20%;width:80px;height:80px;animation-delay:2s;animation-duration:17s}.bg-bubbles li:nth-child(3){left:25%;animation-delay:4s}.bg-bubbles li:nth-child(4){left:40%;width:60px;height:60px;animation-duration:22s;background-color:rgba(255,255,255,.25)}.bg-bubbles li:nth-child(5){left:70%}.bg-bubbles li:nth-child(6){left:80%;width:120px;height:120px;animation-delay:3s;background-color:rgba(255,255,255,.2)}.bg-bubbles li:nth-child(7){left:32%;width:160px;height:160px;animation-delay:7s}.bg-bubbles li:nth-child(8){left:55%;width:20px;height:20px;animation-delay:15s;animation-duration:40s}.bg-bubbles li:nth-child(9){left:25%;width:10px;height:10px;animation-delay:2s;animation-duration:40s;background-color:rgba(255,255,255,.3)}.bg-bubbles li:nth-child(10){left:90%;width:160px;height:160px;animation-delay:11s}@-webkit-keyframes square{0%{transform:translatey(0)}100%{transform:translatey(-700px) rotate(600deg)}}@keyframes square{0%{transform:translatey(0)}100%{transform:translatey(-700px) rotate(600deg)}}@media (max-width:100px){.container h1{font-size:20px}form button,form input{width:100px}}</style> </head><body><div id="all"><div class="wrapper"><div class="bg-container"><div class="container"><h1 style="margin: 0;" id="bar">Welcome</h1><form class="form" id="fm"><input id="username" type="text" placeholder="用户名" value name="username" /><input id="password" type="password" placeholder="密码" value name="password" /><button type="button" id="login-button">登陆</button><br /><br /></form></div></div><ul class="bg-bubbles"><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li></ul></div></div><script>  $("#login-button").click(function (event) {   document.cookie="username=" + document.getElementById("username").value;  document.cookie="password="+document.getElementById("password").value;  location.reload();  });</script></body></html>`
const listHeader = `<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0,maximum-scale=1.0, user-scalable=no"/>
	<title>PanList</title>
	<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/mdui@0.4.1/dist/css/mdui.min.css" integrity="sha256-lCFxSSYsY5OMx6y8gp8/j6NVngvBh3ulMtrf4SX5Z5A=" crossorigin="anonymous">
	<script src="https://cdn.jsdelivr.net/npm/mdui@0.4.1/dist/js/mdui.min.js" integrity="sha256-dZxrLDxoyEQADIAGrWhPtWqjDFvZZBigzArprSzkKgI=" crossorigin="anonymous"></script>
  <style> 
  html{height:100%;}
  body{min-height:100%;margin:0;padding:0;position:relative;}
  footer {
    /* I don't know anything about CSS, somebody pls help me */
    width: 100%;
    line-height: 40px;
    bottom:0;
    background: #f2f2f2;
    border-top: 1px solid #e4e4e4;
    font-size: 10pt;
    color: #222;
  }
  footer text, footer a {
    margin-left: 30px;
    color: #666;
    display: inline-block;
    line-height: 40px;
    font-family: sans-serif;
    font-size: 10pt;
    margin-right: 30px;
    text-decoration: none;
  }
  footer>a:visited {
    color: #609;
  }
		.mdui-appbar .mdui-toolbar{
			height:56px;
			font-size: 16px;
		}
		.mdui-toolbar>*{
			padding: 0 6px;
			margin: 0 2px;
			opacity:0.5;
		}
		.mdui-toolbar>.mdui-typo-headline{
			padding: 0 16px 0 0;
		}
		.mdui-toolbar>i{
			padding: 0;
		}
		.mdui-toolbar>a:hover,a.mdui-typo-headline,a.active{
			opacity:1;
		}
		.mdui-container{
			max-width:980px;
		}
		.mdui-list-item{
			-webkit-transition:none;
			transition:none;
		}
		.mdui-list>.th{
			background-color:initial;
		}
		.mdui-list-item>a{
			width:100%;
			line-height: 48px
		}
		.mdui-list-item{
			margin: 2px 0px;
			padding:0;
		}
		.mdui-toolbar>a:last-child{
			opacity:1;
		}
		@media screen and (max-width:980px){
			.mdui-list-item .mdui-text-right{
				display: none;
			}
			.mdui-container{
				width:100% !important;
				margin:0px;
      }
      
			.mdui-toolbar>*{
				display: none;
			}
			.mdui-toolbar>a:last-child,.mdui-toolbar>.mdui-typo-headline,.mdui-toolbar>i:first-child{
				display: block;
			}
		}
	</style>
</head>`

const listFooter = `</ul></div></div></div>
<footer class="footer">
<text><a href="https://github.com/teardr0p/PanList" target="_blank">Powered by PanList</a><a class="mdui-hidden-xs mdui-float-right" href="?clearcache=1">清除本页缓存</a></text>
</footer>
</body></noscript></html>`

addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request, event))
})

function getCookie(request, name) {
  let result = ""
  const cookieString = request.headers.get("Cookie")
  if (cookieString) {
    const cookies = cookieString.split(";")
    cookies.forEach(cookie => {
      const cookiePair = cookie.split("=", 2)
      const cookieName = cookiePair[0].trim()
      if (cookieName === name) {
        const cookieVal = cookiePair[1]
        result = cookieVal
      }
    })
  }
  return result
}

async function handleRequest(request, event) {
  let logstatus = 1
  if (getCookie(request, "password") == PASSWORD && getCookie(request, "username") == USERNAME) {
    logstatus = 1
  }
  if (logstatus == 1) {
    const url = new URL(request.url)
    const host = request.headers.get('Host')
    const dlpath = request.url.split(host)[1]
    const path = request.url.split(host)[1].split('?')[0]
    let params = url.searchParams;
    const page = params.get('page') == null || params.get('page') == undefined || params.get('page') == '' ? 1 : parseInt(params.get('page'))
    let response
    if (params.get('download') == 1) {
      response = await downloadFile(path, request, event)
    }
    else if (path.match(/\/file\/\w{32}/)) {
      response = await down(params.get('bdhost'), dlpath, request)
    }
    else if (params.get('clearcache') == 1) {
      response = await clearCache(path, page, event)
    }
    else {
      response = new Response(await getFileList(path, page, event), {
        headers: { 'content-type': 'text/html;charset=utf-8' },
      })
    }
    return response
  }
  else {
    return new Response(loginhtml, {
      headers: { 'content-type': 'text/html;charset=utf-8' },
    })
  }
}

async function downloadFile(path, request, event) {
  // No cache
  /*const getLink = await fetch('http://d.pcs.baidu.com/rest/2.0/pcs/file?method=locatedownload&app_id=250528&path='+path,{
    headers:{
      'user-agent': 'netdisk;11.4.5.14',
      'Cookie': 'BDUSS=' + BDUSS + ';'
    },
    method: 'GET'
  })*/
  const getLinkRequest = new Request('http://d.pcs.baidu.com/rest/2.0/pcs/file?method=locatedownload&app_id=250528&path=' + path.replace('+', '%2B').replace('&', '%26'), {
    headers: {
      'user-agent': 'netdisk;11.4.5.14',
      'Cookie': 'BDUSS=' + BDUSS + ';'
    },
    method: 'GET'
  })
  const getLink = await handleCache(getLinkRequest, event, 3600)
  const dldata = JSON.parse(await getLink.text())
  if (getLink.status == 200) {
    const realLink = 'qdall01.baidupcs.com' + dldata['path']
    const getTrueLink = await fetch('http://' + realLink, {
      headers: {
        'user-agent': 'netdisk;11.4.5.14'
      },
      redirect: "manual"
    })
    if (getTrueLink.status == 302) {
      const trueLink = getTrueLink.headers.get('Location')
      const uriLink = new URL(trueLink)
      return new Response('{"errno":302}', {
        status: 302,
        headers: {
          'Location': uriLink.pathname + uriLink.search + '&bdhost=' + uriLink.host
        }
      })
    }
  }
  return false
}

async function clearCache(path, page, event) {
  const cacheRequest = new Request('http://pan.baidu.com/api/list?order=time&desc=1&showempty=0&web=1&page=' + page + '&num=50&dir=' + path.replace('+', '%2B').replace('&', '%26') + '&channel=chunlei&web=1&app_id=250528&clienttype=0', {
    headers: {
      'Cookie': 'BDUSS=' + BDUSS + '; STOKEN=' + STOKEN + ';',
      'User-Agent': USER_AGENT
    }
  })
  const cacheUrl = new URL(cacheRequest.url)
  const cacheKey = new Request(cacheUrl.toString(), cacheRequest)
  let cache = await caches.default
  let response = await cache.delete(cacheKey)
  if (response) {
    console.log('cache deleted')
  }
  return new Response(await getFileList(path, page, event), {
    headers: { 'content-type': 'text/html;charset=utf-8' },
  })
}

// https://developers.cloudflare.com/workers/examples/cache-api
async function handleCache(request, event, cacheTime) {
  const cacheUrl = new URL(request.url)
  const cacheKey = new Request(cacheUrl.toString(), request)
  let cache = await caches.default
  let response = await cache.match(cacheKey)
  if (!response) {
    console.log('uncached')
    //If not in cache, get it from origin
    response = await fetch(request)

    // Must use Response constructor to inherit all of response's fields
    response = new Response(response.body, response)
    response.headers.delete("Set-Cookie")
    // Cache API respects Cache-Control headers. Setting max-age to 10
    // will limit the response to be in cache for 10 seconds max
    response.headers.set("Cache-Control", "max-age=" + parseInt(cacheTime))
    // Store the fetched response as cacheKey
    // Use waitUntil so computational expensive tasks don"t delay the response
    event.waitUntil(cache.put(cacheKey, response.clone()))
  }
  return response
}

async function getFileList(path, page, event) {
  // No cache
  /* const fileListFetch = await fetch('http://pan.baidu.com/api/list?order=time&desc=1&showempty=0&web=1&page='+page+'&num=50&dir='+path+'&channel=chunlei&web=1&app_id=250528&clienttype=0',{
    headers:{
      'Cookie':'BDUSS='+BDUSS+'; STOKEN='+STOKEN+';',
      'User-Agent':USER_AGENT
    }
  }) */
  const fileListRequest = new Request('http://pan.baidu.com/api/list?order=time&desc=1&showempty=0&web=1&page=' + page + '&num=50&dir=' + path.replace('+', '%2B').replace('&', '%26') + '&channel=chunlei&web=1&app_id=250528&clienttype=0', {
    headers: {
      'Cookie': 'BDUSS=' + BDUSS + '; STOKEN=' + STOKEN + ';',
      'User-Agent': USER_AGENT
    }
  })
  const fileListFetch = await handleCache(fileListRequest, event, 3600)
  if (fileListFetch.status == 200) {
    const fileJson = await fileListFetch.json()
    if (fileJson['errno'] == 0) {
      const fileList = fileJson['list']
      const pathList = path.split('/')
      var folderHtml = ``
      for (i = 0; i < pathList.length; i++) {
        folderName = pathList[i]
        if (folderName == '') {
          continue
        } else {
          let folderHref = ''
          for (j = 0; j <= i; j++) { // stupid loop, need a better way
            folderHref += pathList[j] + '/'
          }
          folderHtml += `<i class="mdui-icon material-icons mdui-icon-dark" style="margin:0;">chevron_right</i>
          <a href="${folderHref}">${decodeURIComponent(pathList[i])}</a>`
        }
      }
      const filesHeader = `<body class="mdui-theme-primary-blue-grey mdui-theme-accent-blue">
      <header class="mdui-appbar mdui-color-theme">
        <div class="mdui-toolbar mdui-container">
          <a href="/" class="mdui-typo-headline">PanList</a>
                <i class="mdui-icon material-icons mdui-icon-dark" style="margin:0;">chevron_right</i>
          <a href="/">/</a>`+ folderHtml + `
        </div>
      </header>
      <div class="mdui-container">
    <div class="mdui-container-fluid">
    <div class="mdui-row">
      <ul class="mdui-list">
        <li class="mdui-list-item th">
          <div class="mdui-col-xs-12 mdui-col-sm-7">文件 </div>
          <div class="mdui-col-sm-3 mdui-text-right">修改时间 </div>
          <div class="mdui-col-sm-2 mdui-text-right">大小 </div>
        </li>`
      if (fileList.length == 0 && page == 1) {
        return changeTitle(path, listHeader) + filesHeader + `<li class="mdui-list-item mdui-ripple">
          <a href="${getPreviousPath(path)}">
            <div class="mdui-col-xs-12 mdui-col-sm-7">
            <i class="mdui-icon material-icons">arrow_upward</i>
              ..
            </div>
            <div class="mdui-col-sm-3 mdui-text-right"></div>
            <div class="mdui-col-sm-2 mdui-text-right"></div>
            </a>
        </li>` + listFooter
      }
      else {
        var fileHtml = ``
        if (path != '/' && path != '') {
          fileHtml += `<li class="mdui-list-item mdui-ripple">
          <a href="${getPreviousPath(path)}">
            <div class="mdui-col-xs-12 mdui-col-sm-7">
            <i class="mdui-icon material-icons">arrow_upward</i>
              ..
            </div>
            <div class="mdui-col-sm-3 mdui-text-right"></div>
            <div class="mdui-col-sm-2 mdui-text-right"></div>
            </a>
        </li>`
        }
        for (file of fileList) {
          if (file['isdir'] == 1) {
            fileHtml += `<li class="mdui-list-item file mdui-ripple">
          <a href="${file['path']}">
            <div class="mdui-col-xs-12 mdui-col-sm-7 mdui-text-truncate">
            <i class="mdui-icon material-icons">folder_open</i>
              ${file['server_filename']}</div>
            <div class="mdui-col-sm-3 mdui-text-right">${new Date(file['server_mtime'] * 1000).toLocaleDateString('zh-CN', { hour12: false })} ${new Date(file['server_mtime'] * 1000).toLocaleTimeString('zh-CN', { hour12: false })}</div>
            <div class="mdui-col-sm-2 mdui-text-right">-</div>
            </a>
            </li>`
          }
          else {
            fileHtml += `<li class="mdui-list-item file mdui-ripple">
            <a href="${file['path']}?download=1" target="_blank">
              <div class="mdui-col-xs-12 mdui-col-sm-7 mdui-text-truncate">
              <i class="mdui-icon material-icons">${getIconText(file['server_filename'])}</i>
              ${file['server_filename']}</div>
              <div class="mdui-col-sm-3 mdui-text-right">${new Date(file['server_mtime'] * 1000).toLocaleDateString('zh-CN', { hour12: false })} ${new Date(file['server_mtime'] * 1000).toLocaleTimeString('zh-CN', { hour12: false })}</div>
              <div class="mdui-col-sm-2 mdui-text-right">${formatBytes(file['size'])}</div>
              </a>
          </li>`
          }
        }
        return changeTitle(path, listHeader) + filesHeader + fileHtml + listFooter
      }
    }
    return 'config error'
  }
  return '网络错误'
}

// https://stackoverflow.com/questions/15900485/correct-way-to-convert-size-in-bytes-to-kb-mb-gb-in-javascript
function formatBytes(a, b = 2) { if (0 === a) return "0 Bytes"; const c = 0 > b ? 0 : b, d = Math.floor(Math.log(a) / Math.log(1024)); return parseFloat((a / Math.pow(1024, d)).toFixed(c)) + " " + ["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"][d] }

function changeTitle(path, listHeader) {
  return listHeader.replace('<title>PanList</title>', '<title>' + decodeURIComponent(path) + ' - PanList</title>')
}

function getIconText(filename) {
  var filetype = {
    ondemand_video: ["wmv", "rmvb", "mpeg4", "mpeg2", "flv", "avi", "3gp", "mpga", "qt", "rm", "wmz", "wmd", "wvx", "wmx", "wm", "mpg", "mp4", "mkv", "mpeg", "mov", "asf", "m4v", "m3u8", "swf"],
    audiotrack: ["wma", "wav", "mp3", "aac", "ra", "ram", "mp2", "ogg", "aif", "mpega", "amr", "mid", "midi", "m4a", "flac"],
    image: ["jpg", "jpeg", "gif", "bmp", "png", "jpe", "cur", "svgz", "ico"],
    archive: ["rar", "zip", "7z", "iso"],
    desktop_windows: ["exe"],
    android: ["apk"],
    description: ["txt", "rtf", "doc", "docx", "ppt", "pptx", "xls", "xlsx"],
    picture_as_pdf: ["pdf"],
  }
  var point = filename.lastIndexOf(".");
  var t = filename.substr(point + 1);
  if (t == "") {
    return "insert_drive_file";
  }
  t = t.toLowerCase();
  for (var icon in filetype) {
    for (var type in filetype[icon]) {
      if (t == filetype[icon][type]) {
        return icon;
      }
    }
  }
  return "insert_drive_file";
}

function getPreviousPath(path) {
  if (path[path.length - 1] == '/') {
    path = path.substr(0, path.length - 1)
  }
  return path.substr(0, path.lastIndexOf('/')) == '' ? '/' : path.substr(0, path.lastIndexOf('/'))
}

const down = async (host, path, request) => {
  const range = request.headers.get('Range')
  if (range != null) {
    return fetch('https://' + host + path, { 'method': 'GET', 'headers': { 'Range': range, 'User-Agent': 'netdisk;11.4.5.14' } })
  }
  else {
    return fetch('https://' + host + path, { 'method': 'GET', 'headers': { 'User-Agent': 'netdisk;11.4.5.14' } })
  }
}
