import { useEffect } from "react";
import {getDataServiceById} from "../_service/api";
import {useBlogContext} from "@/app/features/blog/model/blog";

export function useGetDataID(id: string) {
    const { dispatch } = useBlogContext();
    const getDataApi = async () => {

        dispatch({ type: "SET_DETAIL_LOADING", payload: true });

        try {
            const res = await getDataServiceById(id)

            dispatch({ type: "SET_DETAIL", payload: res.data ?? [] });

        } finally {
            setTimeout(() => {

                dispatch({ type: "SET_DETAIL_LOADING", payload: false });

            }, 3000)
        }
    };

    useEffect(() => {
        getDataApi()
    }, []);
}
