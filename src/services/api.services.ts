import{ITodosResponse} from "../models/ITodosResponse.ts";

 const url = import.meta.env.VITE_API_URL;
 const getAllTodos = async (): Promise<ITodosResponse> =>  {

    const  todosResponsObject = await fetch(url + '/todos')
        .then(value => value.json());
     return todosResponsObject;
}

export {
    getAllTodos
}