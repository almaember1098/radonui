function getObject(url) {
    return request('GET', url).getBody()
}