import { useLocation } from "react-router";
import { useMemo } from "react";
import { parse } from "qs";


export default function useParsedQueryString<T>(): T | null {
    const {search} = useLocation();
    return useMemo(() => (search && search.length > 1 ? parse(search, {
            ignoreQueryPrefix: true,
            comma: true
        }) as unknown as T : null),
        [search]);
}
