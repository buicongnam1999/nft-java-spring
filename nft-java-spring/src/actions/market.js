import http from 'ultis/http';

export const getToken = async (params) => {
    try {
        const result = await http.post('login_users/authenticate', params);
        
        return result;
    } catch (err) {
        throw err;
    } 
}

export const fetchItemList = async (page) => {
    try {
        const result = await http.get('marketplace/nft-sale/page='+page);

        return result;
    } catch (err) {
        throw err;
    }
}

export const fetchItemCount = async () => {
    try {
        const result = await http.get('marketplace/nft-sale/count');

        return result;
    } catch (err) {
        throw err;
    }
}

export const findItemById = async (id) => {
    try {
        const result = await http.get(`marketplace/nft-sale/findById/${id}`);
        
        return result;
    } catch (err) {
        throw err;
    }
}