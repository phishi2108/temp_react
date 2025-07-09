import { useEffect, useState } from "react";

const useOnlineStatus = () => {
	// try to check if online or offline

    const [onlineStatus, setOnlineStatus] = useState(true);

    useEffect(() => {
        window.addEventListener("offline", () => {
            setOnlineStatus(false);
        })
    },[])
	return onlineStatus; // will return a boolean
};
export default useOnlineStatus;