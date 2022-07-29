import http from 'ultis/http';

export const fetchItemList = async () => {
    try {
        const result = await http.get('marketplace/nft-sale');

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