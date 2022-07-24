import http from 'ultis/http';

export const fetchItemList = (params) => {
    try {
        const result = await http.get('item-list-market', {params});

        return result;
    } catch (err) {
        throw err;
    }
}