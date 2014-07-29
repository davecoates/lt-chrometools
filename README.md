LT Remote Chrome Debugging
==========================

With this plugin you can use Chrome for live code eval &amp; debugging from LightTable. 

You can set watches, eval code, set / remove breakpoints and interact with the Chrome
debugger (including code evaluation on selected call frame). 

It also supports adding file watches. This is useful for things that have
preprocessors that make normal code eval harder or useless (such as
browserify). Any JavaScript or CSS files that change in the watched directory
will be sent to Chrome.

## Usage

To start install the plugin and launch chrome with the --remote-debugging-port, eg.

OSX: `open -a Google\ Chrome --args --remote-debugging-port=9222`

Add a new connection and choose *Chrome (Remote Debugging Protocol)*. You will
then be prompted to select which open tab to connect to - click the tab you
wish to eval code in / debug. You can connect to as many tabs as you have open
- as with other LT connections when you eval some code you choose which
connection to use.

*NOTE:* If you open devtools in Chrome you will be disconnected. Chrome only
allows one connection at a time and devtools takes priority. This means if you
have devtools open when you try to connect it will also fail. To make this less
painful  when you are disconnected a button will popup in the debug panel 
that you can click to reconnect to Chrome. This makes it easy to switch to
devtools when necessary and then re-establish your debugging connection when
done.


## Options

The following options can be added to your behaviors file,

```clojurescript 
{:+ {
  :inspector.object [:lt.plugins.chrometools.devtools/auto-open-inspector-object]
  }
}
```
