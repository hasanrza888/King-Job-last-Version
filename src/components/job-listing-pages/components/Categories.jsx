import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addCategory } from "../../../features/filter/filterSlice";
const Categories = () => {
    const {categories} = useSelector(state=>state.category)
    const { jobList } = useSelector((state) => state.filter) || {};
    const [getCategory, setCategory] = useState(jobList.category);

    const dispatch = useDispatch();

    // category handler
    const categoryHandler = (e) => {
        dispatch(addCategory(e.target.value));
    };

    useEffect(() => {
        setCategory(jobList.category);
    }, [setCategory, jobList]);

    return (
        <>
            <select
                className="form-select"
                value={jobList.category}
                onChange={categoryHandler}
                style={{border:'1px solid #4356ff',borderRadius:"15px"}}
            >
                <option value="">Kategoriya</option>
                {
                    categories?.map(cat=>{
                        return <option value={cat.name}>{cat.name}</option>
                    })
                }
            </select>
            <span className="icon flaticon-briefcase"></span>
        </>
    );
};

export default Categories;
