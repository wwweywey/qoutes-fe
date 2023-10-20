
const apiUrl = import.meta.env.VITE_API_URL;

export const loginUserRequest = async (userData) => {
    const api = `${apiUrl}/api/v1/login`;
    console.log(userData);

    return fetch(api, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
    })
        .then((response) => {
            if (!response.ok) {
                throw new Error("Network response was not ok");
            }

            return response.json();

        })
        .then((data) => {
            console.log(data);
            if (data.token) {
                // Token is available in the 'Authorization' header
                // You can store it in localStorage or a cookie for future use
                localStorage.setItem('token', data.token);
                localStorage.setItem('userId', data.id);

            }
            return data; // Return true to indicate successful login
        })
        .catch((error) => {
            console.error("Error login:", error);
            return false; // Return false to indicate failed login
        });
};

