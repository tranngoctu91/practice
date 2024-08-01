import { useEffect, useRef, useState } from "react";

export default function useHover() {
    const [hovered, setHovered] = useState(false);
    const nodeRef = useRef(null);
    useEffect(() => {
        const handelMouseOver = () => {
            setHovered(true);
        };
        const handelMouseOut = () => {
            setHovered(false);
        };
        const dom = nodeRef.current;
        if (nodeRef.current) {
            dom.addEventListener("mouseover", handelMouseOver);
            dom.addEventListener("mouseover", handelMouseOut);
        }
        return () => {
            dom.removeEventListener("mouseover", handelMouseOver);
            dom.removeEventListener("mouseover", handelMouseOut);
        };
    }, []);
    return {
        hovered,
        nodeRef,
    };
}
