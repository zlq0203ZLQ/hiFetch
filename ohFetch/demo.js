import fetch from './ohFetch'
import {defaultEnv} from './hostApi'

let queryPost = (params = {})=> fetch({
    host: defaultEnv,
    path: '/list',
    body:params,
})

let queryGet = (params ={})=>fetch({
    host: defaultEnv,
    path: '/list'
})