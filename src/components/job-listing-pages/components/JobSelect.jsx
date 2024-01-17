
'use client'
import { useDispatch, useSelector } from "react-redux";
import {
    addDatePosted,
    addExperienceSelect,
    addJobTypeSelect,
    addSalary,
} from "../../../features/filter/filterSlice";

export default function JobSelect() {
    const {jobtypes} = useSelector(state=>state.jobtype)
    const { jobList } = useSelector((state) => state.filter);
    const { jobTypeList, datePost, experienceLavel } = useSelector(
        (state) => state.job
    );

    const dispatch = useDispatch();

    // job type handler
    const jobTypeHandler = (e) => {
        dispatch(addJobTypeSelect(e.target.value));
    };

    // date post handler
    const datePostHandler = (e) => {
        dispatch(addDatePosted(e.target.value));
    };

    // experience handler
    const experienceHandler = (e) => {
        dispatch(addExperienceSelect(e.target.value));
    };

    // salary handler
    const salaryHandler = (e) => {
        const data = JSON.parse(e.target.value);
        dispatch(addSalary(data));
    };

    return (
        <>
            <div className="showing-result">
                <div className="top-filters">
                    <div className="form-group">
                        <select
                            onChange={jobTypeHandler}
                            className="chosen-single form-select"
                            value={jobList?.jobTypeSelect}
                            // style={{border:'1px solid #4356ff',borderRadius:"15px"}}
                        >
                            <option value="">İş qrafiki</option>
                            {jobtypes?.map((item) => (
                                <option value={item.name} key={item._id}>
                                    {item.name}
                                </option>
                            ))}
                        </select>
                    </div>
                    {/* End job type filter */}

                    {/* <div className="form-group">
                        <select
                            onChange={datePostHandler}
                            className="chosen-single form-select"
                            value={jobList?.datePosted}
                        >
                            {datePost?.map((item) => (
                                <option value={item.value} key={item.id}>
                                    {item.name}
                                </option>
                            ))}
                        </select>
                    </div> */}
                    {/* End date posted filter */}

                    <div className="form-group">
                        <select
                            onChange={experienceHandler}
                            className="chosen-single form-select"
                            value={jobList?.experienceSelect}
                            // style={{border:'1px solid #4356ff',borderRadius:"15px"}}
                        >
                            <option>Təcrübə</option>
                            {experienceLavel?.map((item) => (
                                <option value={item.value} key={item.id}>
                                    {item.name}
                                </option>
                            ))}
                        </select>
                    </div>
                    {/* End ecperience level filter */}

                    <div className="form-group">
                        <select
                            onChange={salaryHandler}
                            className="chosen-single form-select"
                            value={JSON.stringify(jobList.salary)}
                            // style={{border:'1px solid #4356ff',borderRadius:"15px"}}
                        >
                            <option
                                value={JSON.stringify({
                                    min: 0,
                                    max: 20000,
                                })}
                            >
                                Maaş
                            </option>
                            <option
                                value={JSON.stringify({
                                    min: 0,
                                    max: 1500,
                                })}
                            >
                                0 - 1500
                            </option>
                            <option
                                value={JSON.stringify({
                                    min: 1500,
                                    max: 3000,
                                })}
                            >
                                1500 - 3000
                            </option>
                            <option
                                value={JSON.stringify({
                                    min: 3000,
                                    max: 4500,
                                })}
                            >
                                3000 - 4500
                            </option>
                            <option
                                value={JSON.stringify({
                                    min: 4500,
                                    max: 6000,
                                })}
                            >
                                4500 - 6000
                            </option>
                            <option
                                value={JSON.stringify({
                                    min: 6000,
                                    max: 7500,
                                })}
                            >
                                6000 - 7500
                            </option>
                            <option
                                value={JSON.stringify({
                                    min: 7500,
                                    max: 9000,
                                })}
                            >
                                7500 - 9000
                            </option>
                            <option
                                value={JSON.stringify({
                                    min: 9000,
                                    max: Infinity,
                                })}
                            >
                                9000 +
                            </option>
                        </select>
                    </div>
                    {/* End salary estimate filter */}
                </div>
            </div>
        </>
    );
}
