import { useState, useEffect } from "react";
import { addLinks } from "../../../../../services/api/candidate_api";
import { addLink,setLinks } from "../../../../../features/candidate/candidateSlice";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import React from 'react'
import { setLoading } from "../../../../../features/loading/loadingSlice";
import {toast} from 'react-toastify'
import { handleApiError } from "../../../../../utils/apiErrorHandling";
const SocialNetworkBox = () => {
  const dispatch = useDispatch();
  const { info } = useSelector((state) => state.candidate);

  // useEffect(() => {
  //   // Initialize the links state with existing links from info
  //   if (info && info.links) {
  //     dispatch(setLinks([info.links]));
  //   }
  // }, [info,dispatch]);

  const handleLinkChange = (index, value) => {
    // Update the links array with the new value
    const updatedLinks = [...info.links];
    updatedLinks[index] = { url: value };
    dispatch(setLinks(updatedLinks));
  };

  const addNewLink = () => {
    // Add a new empty link
    dispatch(addLink({url:""}))
    
  };

  const saveLinks = async (e) => {
    e.preventDefault();
    dispatch(setLoading(true))
    try {
      // Filter out empty links
      const nonEmptyLinks = info.links.filter((link) => link.url.trim() !== "");
      const { data } = await addLinks({ links: nonEmptyLinks });
      // console.log(data);
      // console.log(nonEmptyLinks);
      dispatch(setLoading(false))
      toast.success(data.message,{
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        })
    } catch (error) {
      dispatch(setLoading(false))
      handleApiError(error)
    }
  };

  return (
    <form onSubmit={saveLinks} className="default-form">
      <div className="row">
        {info?.links?.map((link, index) => (
          <div key={index} className="form-group col-lg-6 col-md-12">
            <label>{`Link ${index + 1}`}</label>
            <input
              type="text"
              name={`link-${index}`}
              placeholder={`Enter link ${index + 1}`}
              value={link.url}
              onChange={(e) => handleLinkChange(index, e.target.value)}
              disabled={link.url!==""}
            />
          </div>
        ))}
        <div className="form-group col-lg-6 col-md-12">
          <button type="button" onClick={addNewLink} className="theme-btn btn-style-one">
            +
          </button>
        </div>
        <div className="form-group col-lg-6 col-md-12">
          <button type="submit" className="theme-btn btn-style-one">
            Yadda saxla
          </button>
        </div>
      </div>
    </form>
  );
};

export default SocialNetworkBox;

