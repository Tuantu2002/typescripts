import api  from "./axios";

export const getCategorys= () => {
    return api.get('/Category ')
}

export const getCategory = (id:string|undefined) => {
    return api.get(`/Category /${id}`);
};

export const createCategory  = (data :any) => {
    return api.post('/Category ', data);
};

export const updateCategory = (id :string | undefined , data :any ) => {
    return api.put(`/Category /${id}`, data);
};


export const deleteCategory  = (id: number|string) => {
    return api.delete(`/Category /${id}`);
}