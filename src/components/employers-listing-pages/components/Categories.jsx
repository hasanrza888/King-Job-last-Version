
'use client'
import { useDispatch, useSelector } from "react-redux";
import { addCategory } from "../../../features/filter/employerFilterSlice";

const Categories = () => {
    const { category } = useSelector((state) => state.employer) || {};
    const { category: getCategory } = useSelector(
        (state) => state.employerFilter
    );
    const dispatch = useDispatch();

    const categoryHandler = (e) => {
        dispatch(addCategory(e.target.value));
    };
    return (
        <>
            <select
                className="form-select"
                onChange={categoryHandler}
                value={getCategory}
                // style={{border:'1px solid #4356ff',borderRadius:"15px"}}
            >
                <option value="">Kateqoriya</option>
                {category?.map((item) => (
                    <option value={item.value} key={item.id}>
                        {item.name}
                    </option>
                ))}
            </select>
            <span className="icon flaticon-briefcase"></span>
        </>
    );
};

export default Categories;
