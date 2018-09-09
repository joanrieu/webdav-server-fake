# webdav-server-fake

A fake WebDAV server to read/write local files.

CORS rules allow accessing the server from any webpage, so it can be used with applications such as KeeWeb which expect minimal WebDAV support to edit remote files.

## DISCLAIMER

There is no authentication: anyone can overwrite anything.  
This is not a full WebDAV server: only HEAD, GET and PUT are supported.

## INSTALLATION

```
npm install -g webdav-server-fake
```

## USAGE

### Quick start

```
webdav-server-fake
```

### Full syntax

```
PORT=1234 webdav-server-fake ~/my/files
```
