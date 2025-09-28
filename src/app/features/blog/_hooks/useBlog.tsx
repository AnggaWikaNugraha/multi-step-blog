// hooks/useTableData.ts
import { useEffect, useState } from "react";
import {getDataService} from "../_service/blogs";
import {useBlogContext} from "@/app/features/blog/model/blog";

export function useGetData() {
    const { state , dispatch } = useBlogContext();
    const getDataApi = async () => {

        dispatch({ type: "SET_LOADING", payload: true });

        try {
            let res = {};

            res = await getDataService()

            if (state?.data?.length === 0) {
                dispatch({ type: "SET_DATA", payload: res ?? [] });
            }

        } catch (e) {

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
