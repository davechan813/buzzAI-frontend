## Introduction
This project belongs to vuSearch Inc.

Authors: Masaki Nakada, Zhibang Chen, Jiayu Guo, Lawerence xu, Haejin Jo, Evan Yang.

Contact: davechan813@gmail.com

## To run
`npm install`

`npm start`


## Problems
You may encounter the problem:
`Module not found: Can't resolve 'fusioncharts/maps/fusioncharts.worldwithcountries' in '/Users/Potplus/Dropbox/buzz/buzzAI-frontend/src/components'`

To solve, 
1. download [this file](https://gist.github.com/davechan813/deab56c205e284f74ef00cf9054b0b3c) and put in `node_modules/fusioncharts/maps/`
2. create an empty file called `fusioncharts.worldwithcountries.js` and put in `node_modules/fusioncharts/maps/es/`
