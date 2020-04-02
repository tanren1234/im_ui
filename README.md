# im_ui

> im 前端界面

- git clone https://github.com/tanren1234/im_ui.git

- 下载node.js wget https://npm.taobao.org/mirrors/node/v12.16.1/node-v12.16.1-linux-arm64.tar.xz

```

cd /usr

mkdir software

cd software

wget https://npm.taobao.org/mirrors/node/v12.16.1/node-v12.16.1-linux-x64.tar.xz

tar xf node-v12.16.1-linux-x64.tar.xz

cd /usr/local

mv /usr/software/node-v12.16.1-linux-x64 .

mv node-v12.16.1-linux-x64/ nodejs

ln -s /usr/local/nodejs/bin/node /usr/local/bin/ 
ln -s /usr/local/nodejs/bin/npm /usr/local/bin/ 


npm install -g cnpm --registry=https://registry.npm.taobao.org

ln -s /usr/local/nodejs/bin/cnpm /usr/local/bin/
```


```
cnpm install

npm run build

```
