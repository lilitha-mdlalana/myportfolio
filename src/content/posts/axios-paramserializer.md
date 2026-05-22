---
title: 'Axios paramsSerializer for Arrays'
description: 'A summary of my fight with Axios'
pubDate: '2026-05-13'
tags: ['axios', 'javascript', 'learning']
---

A little into my fight with Axios and the adjustment of the paramsSerializer for params with arrays.


We have a custom table component and the data for that component gets fetched from our backend via a REST API. The backend team provides us with an endpoint and one of the docs show that the filter can be sent as an array of strings. Which means that in detail the query for the data on products with a status of 'published' and 'draft' would look something like:

````bash
'http://localhost:8000/api/products?status=published&status=draft'
````

With the feature almost done, I noticed that everything was working except the filters. It seemed that my filters were being sent but they were not reflecting. Weird, right? After a good couple hours debugging, I noticed my network was showing a query of:

````bash
'http://localhost:8000/api/products?status[]=published&status[]=draft'
````

which was obviously wrong therefore being ignored by the BE. After some research I learned that this was the default behavior for Axios. When you send a GET request with query parameters, Axios will serialize the parameters and append them to the URL as a string.

So obviously we needed to adjust that, how do we do that? By applying a paramSerializer with an indexes null key value pair.

````javascript
const axiosInstance = axios.create({
    paramsSerializer: {
        indexes: null
    },
});
````

After that an array will be serialized as with and the Axios GET query will look as expected:

````bash
'http://localhost:8000/api/products?status=published&status=draft'
````

---
Thanks for stopping by. <br/>
Logging out