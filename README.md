
# No framework SPA app

An example app and presentation. Focused on implementing a modern JS SPA app using vanilla JS (especially WebComponents). Webpack is used for bundling and transpiling from newer versions of JavaScript.

## Presentation

[Download here](presentation.pdf)

## Suggested VSCode extension

For html highlighting in template literals, use `es6-string-html` Visual Studio Code plugin.

## Webpack setup reference

### Install webpack
Init npm in your local directory
```sh
npm init
```

Install webpack
```
npm i -D webpack webpack-cli
```

Open package.json and add to scripts the following:

```js
{
    // ....
    "scripts": {
        "build": "webpack",
        // ....
    }
}
    
```

Now, create src/index.js file.

Then, you can test it. Run
```
npm run build
```

### Configure webpack

Create webpack.config.js in your main directory.



```
npm i -D html-webpack-plugin html-loader
```

And paste in:
```js
const HtmlWebpackPlugin = require("html-webpack-plugin")

module.exports = {
    module: {
        rules: [
            {
                test: /\.html$/,
                use: [
                    {
                        loader: "html-loader",
                        options: { minimize: true }
                    }
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/index.html",
            filename: "./index.html"
        })
    ]
}
```


### Set up dev server
```
npm i -D webpack-dev-server
```
And to package.json

```js
"start": "webpack-dev-server",
```

### Set up babel if you want
```
npm i -D @babel/core babel-loader @babel/preset-env
```

Add rule to webpack

```js
{
    test: /\.js$/,
    exclude: /node_modules/,
    use: [
        {
            loader: "babel-loader",
        }
    ]
},

```

### Loader for images
```
npm i -D file-loader
```

```
{
    test: /\.(png|svg|jpg|gif)$/,
    use: [
        {
            loader: "file-loader",
        }
    ]
},

```