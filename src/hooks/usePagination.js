import {useMemo} from "react";

export const usePagination = (totalPagesCount) => {
    return useMemo(() => {
        return [...Array(totalPagesCount + 1).keys()].slice(1)
    }, [totalPagesCount])
}