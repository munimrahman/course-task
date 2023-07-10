/* eslint-disable no-unused-vars */
import React from "react";

const CommentBox = () => {
  return (
    <div className="my-5">
      <p className="mb-2 text-lg">Leave Your Comment</p>
      <div className="">
        <textarea
          className="textarea textarea-bordered bg-[#F7F8FE] focus:outline-none w-full h-28"
          placeholder="Write Your Comment . . ."
        />
        <div className="mt-2">
          <button className="bg-[#4C6FFF] text-white px-3 py-2 rounded-md">
            Publish Review
          </button>
        </div>
      </div>
    </div>
  );
};

export default CommentBox;
