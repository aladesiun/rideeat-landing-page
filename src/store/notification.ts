import { Notification, NotificationType } from "~~/models";
import { defineStore } from 'pinia';

export const useNotificationStore = defineStore({
    
    id:'notification-store',
    state: ()=> {
        return {
            notification: {type:0, message:"", time:0}
        }
    },
    actions:{
        setNotification(data:Notification) {
            this.notification.type = data.type;
            this.notification.message = data.message;
            this.notification.time = data.time;
            setTimeout(() => {
                this.notification.type = 0;
                this.notification.message = '';
            }, data.time);
        },
    },

    getters: {
        getNotification: state => state.notification,
      },
    
})
