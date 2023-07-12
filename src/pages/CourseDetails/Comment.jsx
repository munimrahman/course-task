/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import person from "../../assets/person.png";
const Comment = ({ comment }) => {
  const {
    comment: commentDetails,
    created_at,
    user_info: { full_name },
  } = comment;
  return (
    <>
      <div className="grid grid-cols-12 gap-5 my-2">
        <div className="hidden md:block md:col-span-1">
          <div className="avatar">
            <div className="w-14 rounded-full">
              <img src={person} alt="" />
            </div>
          </div>
        </div>
        <div className="col-span-11 px-3 py-3 md:py-0">
          <div className="flex items-start justify-between">
            <div className="">
              <h4 className="text-lg">{full_name}</h4>
              <span className="text-neutral text-sm">
                <i className="fas fa-clock mr-1" />
                {created_at}
              </span>
            </div>
          </div>
          <p className="my-2">{commentDetails}</p>
        </div>
      </div>
      <hr />
    </>
  );
};

export default Comment;
