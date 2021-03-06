define(['jadeRuntime'], function(jade) {
return function anonymous(locals, attrs, escape, rethrow, merge) {
attrs = attrs || jade.attrs; escape = escape || jade.escape; rethrow = rethrow || jade.rethrow; merge = merge || jade.merge;
var buf = [];
with (locals || {}) {
var interp;
buf.push('<!DOCTYPE html><head><title>jade-amd example app</title><script>var require = { urlArgs: \'cacheBuster\' };  </script><script src="/js/require.js" data-main="/js/main" type="text/javascript" charset="utf-8"></script></head><body><h1>Sample app</h1><p>This is an example app that demonstrates the wrapping that occurs</p><h2>Sample Jade</h2><pre>' + escape((interp =  sampleJade ) == null ? '' : interp) + '</pre><h2>Jade as HTML (done on server)</h2><pre>' + escape((interp =  sampleHTML ) == null ? '' : interp) + '</pre><h2>Jade as HTML (rendered in client)</h2><pre id="rendered_in_client">ERROR - this should be replaced by the rendered content</pre><h2>Compiled Jade client function</h2><pre>' + escape((interp =  sampleFunction ) == null ? '' : interp) + '</pre><h2>AMD wrapped compiled Jade client function</h2><pre>' + escape((interp =  sampleAMD ) == null ? '' : interp) + '</pre><h2>AMD wrapped Jade runtime</h2><pre>' + escape((interp =  jadeRuntimeAmdString ) == null ? '' : interp) + '</pre></body>');
}
return buf.join("");
};
});
