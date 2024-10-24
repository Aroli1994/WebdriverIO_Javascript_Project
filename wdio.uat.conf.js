//merge parent conf object + add new changes in uat conf(baseurl, connectiontimeout)
//import merge from "deepmerge"
//import wdioConfig from "./wdio.conf.js"
const wdioConfig = require('./wdio.conf.js')
const merge = require('deepmerge')

exports.config = merge(wdioConfig.config, {
    baseUrl: 'https://rahulshettyacademyUAT.com/',
    waitforTimeout: 5000,

})

    1                         