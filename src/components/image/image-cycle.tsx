import React, {
    CSSProperties,
    Children,
    PropsWithChildren,
    useEffect,
    useRef,
    useState,
} from 'react';

export interface ImageCycleProps {
    className?: string;
    interval: number;
}

export function ImageCycle({
    className,
    children,
    interval,
}: PropsWithChildren<ImageCycleProps>) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const indexRef = useRef(currentIndex);

    useEffect(() => {
        const count = Children.count(children);

        const intervalCount = setInterval(() => {
            let nextIndex = 0;
            if (indexRef.current < count - 1) {
                nextIndex = indexRef.current + 1;
            }

            indexRef.current = nextIndex;
            setCurrentIndex(nextIndex);
        }, interval);

        return () => {
            clearInterval(intervalCount);
        };
    }, []);

    const childrenWithProps = Children.map(children, (child, index) => {
        if (React.isValidElement(child)) {
            let style: Partial<CSSProperties> | null = null;

            if (index !== currentIndex) {
                style = { display: 'none' };
            }

            return React.cloneElement(child, { style } as any);
        }
        return child;
    });

    return <>{childrenWithProps}</>;
}
