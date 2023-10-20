function showSpoiler(elemId, linkId, hideLink)
{
  var elem = document.getElementById(elemId);
  var link = document.getElementById(linkId);
  if (elem.style.position == 'absolute')
  {
    elem.style.position = 'static';
    elem.style.visibility = 'visible';
    elem.style.opacity = '1';
    link.innerHTML = link.innerHTML.replace("+", "-");
  }
  else
  {
    elem.style.position = 'absolute';
    elem.style.visibility = 'hidden';
    elem.style.opacity = '0';
    link.innerHTML = link.innerHTML.replace("-", "+");
  }
  if(hideLink)
    link.innerHTML = ("");
}
let links = document.querySelectorAll('a');
for (let i = 0; i < links.length; i++) {
  let link = links[i];
  if (link.textContent === 'Download' || link.textContent === '(Mirror)') {
    let href = link.getAttribute('href');
    href = href.replace('http://adfoc.us/serve/sitelinks/?id=475250&url=', '');
    href = href.replace('http://optifine.net/', '');
    href = href.replace('adloadx', 'download');
    link.setAttribute('href', href);
  }
  if (link.textContent === 'Show all versions') {
    let script = link.getAttribute('href');
    script = script.replace('javascript:', '');
    // "script" 変数に格納されたコードを実行する
    var code = script.replace(/^showSpoiler\((.+)\);?$/g, '$1');
    var args = code.split(',');
    args = args.map(function(arg) {
      return arg.trim().replace(/^['"]|['"]$/g, '');
    });
    window.showSpoiler.apply(null, args);

  }
}