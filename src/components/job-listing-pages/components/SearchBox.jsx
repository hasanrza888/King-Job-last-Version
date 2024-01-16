import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addKeyword } from "../../../features/filter/filterSlice";

const SearchBox = () => {
    const { jobList } = useSelector((state) => state.filter);
    const [getKeyWord, setkeyWord] = useState(jobList.keyword);
    const dispath = useDispatch();

    // keyword handler
    const keywordHandler = (e) => {
        dispath(addKeyword(e.target.value));
    };

    useEffect(() => {
        setkeyWord(jobList.keyword);
    }, [setkeyWord, jobList]);

    return (
        <>
            <input
                type="text"
                name="listing-search"
                placeholder="Vakansiya adı"
                value={getKeyWord}
                onChange={keywordHandler}
                style={{border:'1px solid #4356ff',borderRadius:"15px"}}
            />
            <span className="icon flaticon-search-3"></span>
        </>
    );
};

export default SearchBox;
