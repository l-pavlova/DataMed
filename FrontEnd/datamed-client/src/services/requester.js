const HOST = "http://localhost:8081"

const urlBuilder = (...paths) => {
    const url = paths
        .filter(x => x && typeof (x) === "string")
        .join('');

    return url;
}

const initRequest = async (contentType, method, body) => {
    //refreshToken();
    return {
        method,
        //credentials: 'include', todo:: uncomment when auth is ready
        headers: {
            ...(contentType && { "Content-Type": contentType })
        },
        body: body
    }
};


const initBlobRequest = async (contentType, responseType, method, body) => {
    //refreshToken();
    return {
        method,
        //credentials: 'include', todo:: uncomment when auth is ready
        headers: {
            ...(contentType && { "Content-Type": contentType })
        },
        body: body
    }
};


const initBaseRequest = initRequest.bind(null, "application/json");

const initFileSendRequest = initRequest.bind(null, null);//no headers

const initBaseBlobRequest = initRequest.bind(null, null, "blob");

const responseHandler = async res => {
    if (!res.ok) {
        if (res.status === 401) {
            let response = await res.json();

            if (response.error?.details !== 'Specify id token for this request!') {
                // logout();
            }

            throw response;
        }

        throw await res.json();
    }
    return res.json();
};


const responseHandlerCreate = async res => {
    if (!res.ok) {
        if (res.status === 401) {
            let response = await res.json();

            if (response.error?.details !== 'Specify id token for this request!') {
                // logout();
            }

            throw response;
        }

        throw await res.json();
    }
    return res.text();
};


const requester = (endpoint) => ({
    get: () => initBaseRequest('GET').then(options => fetch(urlBuilder(endpoint), options)).then(responseHandler),
    getBlob: () => initBaseBlobRequest('GET').then(options => fetch(urlBuilder(endpoint), options)).then(responseHandler),
    create: data => initBaseRequest('POST', JSON.stringify(data)).then(options => fetch(urlBuilder(endpoint), options)).then(responseHandler),
    createWithFile: data => initFileSendRequest('POST', data).then(options => fetch(urlBuilder(endpoint), options)).then(responseHandler),
    update: data => initBaseRequest('PUT', JSON.stringify(data)).then(options => fetch(urlBuilder(endpoint), options)).then(responseHandler),
    patch: data => initBaseRequest('PATCH', JSON.stringify(data)).then(options => fetch(urlBuilder(endpoint), options)).then(responseHandler),
    delete: () => initBaseRequest('DELETE').then(options => fetch(urlBuilder(endpoint), options)).then(responseHandler),
})

export default requester;