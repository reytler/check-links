import { toast } from "react-toastify";

export const enumTypeNotification = {
    ERROR: 'ERROR',
    SUCCESS: 'SUCCESS'
}

export function Notify(type:string,msg:string){
    switch(type){
        case enumTypeNotification.SUCCESS:
            toast.success(msg,{
                position: 'top-right',
                autoClose: 3000,
                theme: 'colored'
            })
            break;
        case enumTypeNotification.ERROR:
            toast.error(msg,{
                position: 'top-right',
                autoClose: 3000,
                theme: 'colored'
            })
            break;
    }
}