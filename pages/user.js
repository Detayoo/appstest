import { useEffect, useState } from "react";

const User = () => {
    const [user, setUser] = useState(null);
    const subscribe = () => {
        removeSubscription = subscription(userId, (user) => setUser(firstName: 'Baba Alaja'));
    }
    useEffect((prev)=> {
        const controller = new AbortController();
        subscribe();
        if(userId !== prev.userId ) {
            removeSubscription();
            subscribe();
        }
        return controller.abort();
    }, [])
    return (user);
}
 
export default User;