
const apiUrl = import.meta.env.VITE_API_URL;

export const fetchQouteCategoriesServoce = async () => {
    const api = `${apiUrl}/api/v1/categories`

    try {
        const res = await fetch(api).then(res => res.json())
        return { data: res.data }

    } catch (error) {
        return { message: error, data: [] }
    }
};
export const fetchQoutesService = async (categoryId) => {
    const api = categoryId
        ? `${apiUrl}/api/v1/categories/${categoryId}`
        : `${apiUrl}/api/v1/quote/list`;

    try {
        const res = await fetch(api).then(res => res.json())
        return { data: res.data }

    } catch (error) {
        return { message: error, data: [] }
    }
};


export const fetchUserQoutes = async (userId) => {
    const api = `${apiUrl}/api/v1/quote/user/${userId}`

    try {
        const res = await fetch(api).then(res => res.json())
        return { data: res.data }

    } catch (error) {
        return { message: error, data: [] }
    }
};


export const fetchFavoriteQoutesRequest = async (userId) => {
    const api = `${apiUrl}/api/v1/quote/favorites/${userId}`

    try {
        const res = await fetch(api).then(res => res.json())
        return { data: res.data }

    } catch (error) {
        return { message: error, data: [] }
    }
};


export const createQouteRequest = async (formBody) => {
    const api = `${apiUrl}/api/v1/quote/ `
    return fetch(api, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: formBody,
    })
};

