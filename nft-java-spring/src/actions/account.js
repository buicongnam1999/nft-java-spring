import http from 'ultis/http';

export const loginHome = (params) => {
    try {
        return http.post('login-home', params);
    } catch (err) {
        throw err;
    }
}

export const loginAdmin = (params) => {
    try {
        return http.post('login-admin', params);
    } catch (err) {
        throw err;
    }
}