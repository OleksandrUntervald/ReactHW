import {useEffect, useState} from "react";
import {IBaseResponseModel} from "../../models/IBaseResponseModel.ts";
import {getAll} from "../../services/general.api.service.ts";
import {IUser} from "../../models/IUser.ts";

export  const UsersComponent = () => {

    const [users, setUsers] = useState<IUser[]>([]);
    useEffect(() => {
        getAll<IBaseResponseModel & {users: IUser[]}>('/users')
            .then(({users}) => setUsers(users));
    }, []);
    return (
         <div>
             {
                 users.map((user: IUser) => <div key={user.id}>{user.username}</div>)
             }
         </div>
    );
};
