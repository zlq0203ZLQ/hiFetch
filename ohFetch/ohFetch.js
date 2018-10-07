export default (params = {}) =>
    new Promise((resolve,reject)=>{
        fetch(
            params.host + params.path,
            {
                headers: new Headers({
                   'Accept': "application/json",
                   'Content-Type': 'application/json' 
                }),
                method: params.body?'POST':'GET',
                body:JSON.stringify(params.body)
            }
        ).then(res=>{
            resolve(res.json())
        }).catch(err=>{
            reject(err)
        })
    })