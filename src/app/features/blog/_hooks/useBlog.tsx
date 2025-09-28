// hooks/useTableData.ts
import { useEffect, useState } from "react";
import {getDataService} from "../_service/blogs";
import {useBlogContext} from "@/app/features/blog/model/blog";

export function useGetData() {
    const { dispatch } = useBlogContext();
    const getDataApi = async () => {

        dispatch({ type: "SET_LOADING", payload: true });

        try {
            let res = {};

            res = await getDataService()

            dispatch({ type: "SET_DATA", payload: res.data ?? [] });

        } catch (e) {
            console.log(e)
        } finally {
            setTimeout(() => {

                dispatch({ type: "SET_LOADING", payload: false });

            }, 3000)
        }
    };

    useEffect(() => {
        getDataApi()
    }, []);
}
