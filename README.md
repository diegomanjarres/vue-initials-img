# vue-initials-img

![demo](https://raw.github.com/diegomanjarres/vue-initials-img/master/demo.png)


## Introduction
a vue-avatar like package that renders an img tag instead of a custom tag, for easier use with vuetify.
highly influenced by vue-letter-avatar and a codepen from @arturheinze.
## Install
```shell
$ npm install vue-initials-img
```

## Usage

```js
import VueInitialsImg from 'vue-initials-img';

Vue.use(VueInitialsImg);
```

Create avatar
```html
<vue-initials-img :name="'Frank Underwood'"/>
```

## Properties

| Name    | Required | Type    | Default | Description            |
| ---     | ---      | ---     | ---     | ---                    |
| name    | true     | String  |         | the name of avatar     |
| size    | false    | String  | 50      | the size of avatar     |
