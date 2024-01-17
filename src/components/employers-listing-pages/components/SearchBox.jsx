
'use client'

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addKeyword } from "../../../features/filter/employerFilterSlice";

const SearchBox = () => {
    const { keyword } = useSelector((state) => state.employerFilter);
    const [getKeyWord, setkeyWord] = useState(keyword);
    const dispath = useDispatch();

    // keyword handler
    const keywordHandler = (e) => {
        dispath(addKeyword(e.target.value));
    };

    useEffect(() => {
        setkeyWord(keyword);
    }, [setkeyWord, keyword]);

    return (
        <>
            <input
                type="text"
                name="listing-search"
                placeholder="Şirkət adı"
                value={getKeyWord}
                onChange={keywordHandler}
                // style={{border:'1px solid #4356ff',borderRadius:"15px"}}
            />
            <span className="icon flaticon-search-3"></span>
        </>
    );
};

export default SearchBox;
