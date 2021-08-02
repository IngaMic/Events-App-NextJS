import { createContext, useState, useEffect } from "react";

const NotificationContext = createContext({
    notification: null, // { title, message, status }
    showNotification: function (notificationData) {},
    hideNotification: function () {},
});

export function NotificationContextProvider(props) {
    const [activeNotification, setActiveNotification] = useState();

    useEffect(() => {
        if (
            activeNotification &&
            //either of these following cases:
            (activeNotification.status === "success" ||
                activeNotification.status === "error")
        ) {
            const timer = setTimeout(() => {
                setActiveNotification(null);
            }, 3000);

            //to not have multiple timers at the same time:
            return () => {
                clearTimeout(timer);
            };
        }
    }, [activeNotification]);

    function showNotificationHandler(notificationData) {
        setActiveNotification(notificationData);
    }

    function hideNotificationHandler() {
        setActiveNotification(null);
    }

    const context = {
        notification: activeNotification,
        showNotification: showNotificationHandler,
        hideNotification: hideNotificationHandler,
    };

    return (
        <NotificationContext.Provider value={context}>
            {props.children}
        </NotificationContext.Provider>
    );
}

export default NotificationContext;
