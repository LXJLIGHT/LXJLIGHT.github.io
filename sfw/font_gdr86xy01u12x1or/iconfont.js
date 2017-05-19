;(function(window) {

  var svgSprite = '<svg>' +
    '' +
    '<symbol id="icon-iconfontxiazai" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M894.682567 511.995907 735.231625 511.995907 511.997442 735.217874 288.766328 511.995907 129.314363 511.995907 1.751972 767.108189 1.751972 830.886771 1022.245981 830.886771 1022.245981 767.108189Z"  ></path>' +
    '' +
    '<path d="M1.751972 894.663306l1020.494009 0 0 63.780629-1020.494009 0 0-63.780629Z"  ></path>' +
    '' +
    '<path d="M799.012821 320.66937 575.778637 320.66937 575.778637 65.556065 448.21727 65.556065 448.21727 320.66937 224.985132 320.66937 511.997442 607.662757Z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-ds" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M512 129.039l124.432 252.125 278.237 40.431-201.334 196.253 47.528 277.113-248.863-130.836-248.863 130.836 47.528-277.113-201.334-196.253 278.238-40.431z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-hanbaobao" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M362.474498 627.133204M73.591065 278.392498c-29.520337 0-53.537334-24.016996-53.537334-53.53631 0-29.520337 24.016996-53.537334 53.537334-53.537334l876.816846 0c29.521361 0 53.537334 24.016996 53.537334 53.537334 0 29.519314-24.015973 53.53631-53.537334 53.53631L73.591065 278.392498zM73.591065 592.350003c-29.520337 0-53.537334-24.01802-53.537334-53.541427 0-29.520337 24.016996-53.537334 53.537334-53.537334l876.816846 0c29.521361 0 53.537334 24.016996 53.537334 53.537334 0 29.523407-24.015973 53.541427-53.537334 53.541427L73.591065 592.350003zM73.591065 903.797337c-29.520337 0-53.537334-24.015973-53.537334-53.537334 0-29.521361 24.016996-53.537334 53.537334-53.537334l876.816846 0c29.521361 0 53.537334 24.015973 53.537334 53.537334 0 29.521361-24.015973 53.537334-53.537334 53.537334L73.591065 903.797337z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '</svg>'
  var script = function() {
    var scripts = document.getElementsByTagName('script')
    return scripts[scripts.length - 1]
  }()
  var shouldInjectCss = script.getAttribute("data-injectcss")

  /**
   * document ready
   */
  var ready = function(fn) {
    if (document.addEventListener) {
      if (~["complete", "loaded", "interactive"].indexOf(document.readyState)) {
        setTimeout(fn, 0)
      } else {
        var loadFn = function() {
          document.removeEventListener("DOMContentLoaded", loadFn, false)
          fn()
        }
        document.addEventListener("DOMContentLoaded", loadFn, false)
      }
    } else if (document.attachEvent) {
      IEContentLoaded(window, fn)
    }

    function IEContentLoaded(w, fn) {
      var d = w.document,
        done = false,
        // only fire once
        init = function() {
          if (!done) {
            done = true
            fn()
          }
        }
        // polling for no errors
      var polling = function() {
        try {
          // throws errors until after ondocumentready
          d.documentElement.doScroll('left')
        } catch (e) {
          setTimeout(polling, 50)
          return
        }
        // no errors, fire

        init()
      };

      polling()
        // trying to always fire before onload
      d.onreadystatechange = function() {
        if (d.readyState == 'complete') {
          d.onreadystatechange = null
          init()
        }
      }
    }
  }

  /**
   * Insert el before target
   *
   * @param {Element} el
   * @param {Element} target
   */

  var before = function(el, target) {
    target.parentNode.insertBefore(el, target)
  }

  /**
   * Prepend el to target
   *
   * @param {Element} el
   * @param {Element} target
   */

  var prepend = function(el, target) {
    if (target.firstChild) {
      before(el, target.firstChild)
    } else {
      target.appendChild(el)
    }
  }

  function appendSvg() {
    var div, svg

    div = document.createElement('div')
    div.innerHTML = svgSprite
    svgSprite = null
    svg = div.getElementsByTagName('svg')[0]
    if (svg) {
      svg.setAttribute('aria-hidden', 'true')
      svg.style.position = 'absolute'
      svg.style.width = 0
      svg.style.height = 0
      svg.style.overflow = 'hidden'
      prepend(svg, document.body)
    }
  }

  if (shouldInjectCss && !window.__iconfont__svg__cssinject__) {
    window.__iconfont__svg__cssinject__ = true
    try {
      document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>");
    } catch (e) {
      console && console.log(e)
    }
  }

  ready(appendSvg)


})(window)