<p align="center">
  <img src="https://i.imgur.com/vWFbw3h.png" height="300px" alt="Sublime's custom image"/>
</p>

# CodeSandbox Desktop Client

codesandbox-client is an unofficial <a href="https://electronjs.org">Electron</a>-based <a href="https://codesandbox.io">CodeSandbox</a> desktop app for Windows, macOS and Linux.

***

### Installation    
* Pre-built binaries are available in the Release tab
* Just download and launch &ndash; no setups required
* You can also clone this repo to build it yourself    


### Build it yourself

Clone repo
```
git clone https://github.com/emilavara/codesandbox-client.git
```
CD into the repo folder
```
cd codesandbox-client
```
Install Electron and dependencies
```
npm i electron
npm i --save-dev electron-packager
```

Time to build!

Build for Windows | Build for macOS | Build for Linux
------------ | ------------- | -------------
``` npm run package-win ``` | ``` npm run package-mac ``` | ``` npm run package-linux ```

You'll find your binaries in /release-builds.
