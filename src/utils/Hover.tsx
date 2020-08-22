import { useRef, useEffect, useState } from "react"
// Hook
export default function useHover() {
    const [value, setValue] = useState(false);

    const ref = useRef();

    const handleMouseOver = () => setValue(true);
    const handleMouseOut = () => setValue(false);

    useEffect(
        () => {
            const node: any = ref.current;
            if (node) {

                node.addEventListener('mouseover', handleMouseOver);
                node.addEventListener('mouseout', handleMouseOut);

                return () => {
                    node.removeEventListener('mouseover', handleMouseOver);
                    node.removeEventListener('mouseout', handleMouseOut);
                };
            }
        },
        [] // Recall only if ref changes
    );

    return [ref, value];
}