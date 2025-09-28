import { useEffect, useState } from "react";
import {getDataServiceById} from "../_service/api";
import {useBlogContext} from "@/app/features/blog/model/blog";

export function useGetDataID(id: string) {
    const { dispatch } = useBlogContext();
    const getDataApi = async () => {

        dispatch({ type: "SET_DETAIL_LOADING", payload: true });

        try {
            let res = {};

            res = await getDataServiceById(id)

            dispatch({ type: "SET_DETAIL", payload: res.data ?? [] });

        } catch (e) {

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
