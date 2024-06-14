import React, { useEffect, useRef, useState } from "react";

const ScrollFunc = (WrappedComponent) => {
    const recordsPerPage = 5;
    const ScrollHOC = (props) => {
        const { todoList , updateLoading } = props;
        const [currentPage, setCurrentPage] = useState(1);
        const refOfComponent = useRef(null);

        useEffect(() => {
            const handleScrollToEnd = () => {
                const lastIndex = currentPage * recordsPerPage;
                const { scrollTop, scrollHeight, clientHeight } = refOfComponent.current;
                if (scrollTop >= scrollHeight - clientHeight && lastIndex < todoList.length) {
                    updateLoading(true);
                    setTimeout(() => {
                        setCurrentPage(prevPage => prevPage + 1);
                        updateLoading(false);
                    }, 1000);
                }
            };
            refOfComponent.current.addEventListener('scroll', handleScrollToEnd);
            return () => {
                refOfComponent.current.removeEventListener('scroll', handleScrollToEnd);
            };
        }, [todoList, currentPage, updateLoading]);

        return (
            <div ref={refOfComponent}
            >
                <WrappedComponent 
                    {...props}
                    recordsPerPage={recordsPerPage}
                    currentPage={currentPage}
                    refOfComponent={refOfComponent} 
                />
            </div>
        );
    };

    return ScrollHOC;
};

export default ScrollFunc;
