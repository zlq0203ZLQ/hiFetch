import { hashHistory } from 'react-router-dom'

export default request = (method,url,body)=>{
	method = method.toUpperCase();
	if (method == 'GET'){
		body = undefined
	}else{
		body = body && JSON.stringify(body);
	}

	return fetch(url,{
		headers: new Headers({
			'Accept': 'application/json',
			'Content-Type': 'application',
			'Access-Token': sessionStorage.getItem('access-token')
		}),
		method: method,
		body： body
	})
		.then(res=>{
			if(res.status == 401){
				hashHistory.push('/login')
				return Promise.reject('unauthorized')
			}else{	
				const token = res.headers.get('access-token')
				if(token){
					sessionStorage.setItem('access-token',token)
				}
				return res.json()
			}
		});


}

export const get = url => request('GET',url);
export const post = (url,body) => request('POST',url,body);
export const put = (url,body) => request('PUT',url,body);
export const del = (url,body)=> request('DELETE',url,body)