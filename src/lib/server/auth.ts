import type { RequestEvent } from "@sveltejs/kit";

export const userAuthorization = (event : RequestEvent) =>{
    const {cookies} = event
    const tokenUser = cookies.get("auth")

    if(tokenUser == "regularusertoken"){
        const user = {
            id: 101,
            email: "userdash@anymail.com",
            role: "USER",
        }
        return user;
    }
    return null;
}
