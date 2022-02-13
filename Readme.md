# Shan or Myanmar text classification using ML

[Demo](https://shanormyanmar.netlify.app)

### CDN js

```javascript
https://cdn.jsdelivr.net/gh/haohaaorg/shanormyanmar@master/dist/som.min.js
```

### Usage

```javascript

const input_text = 'ၸၢမ်းတူၺ်းတူၺ်း';
const som = new Som();
const result = som.detect(input_text);
console.log(result);

```

#### Output Example

```javascript
{
    _confidence: 0.35789855240327934
    _label: "shan"
}
```

> This only detect phrases that are not too long and not too short. 

Credit library - [ml-classify-text](https://www.npmjs.com/package/ml-classify-text)
