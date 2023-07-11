/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { Link } from "react-router-dom";
import upload from "../../assets/upload.png";
import { useDropzone } from "react-dropzone";

const AddCourse = () => {
  const [file, setFile] = useState({});
  const [thumbnail, setThumbnail] = useState({});
  const [introFile, setIntroFile] = useState({});

  const { getRootProps: getRootfileProps, getInputProps: getInputfileProps } =
    useDropzone({
      // accept: "image/*",
      onDrop: (acceptedFile) => {
        setFile(
          Object.assign(acceptedFile[0], {
            preview: URL.createObjectURL(acceptedFile[0]),
          })
        );
      },
    });

  const {
    getRootProps: getRootThumbnailProps,
    getInputProps: getInputThumbnailProps,
  } = useDropzone({
    // accept: "image/*",
    onDrop: (acceptedFile) => {
      setThumbnail(
        Object.assign(acceptedFile[0], {
          preview: URL.createObjectURL(acceptedFile[0]),
        })
      );
    },
  });

  const { getRootProps: getRootIntroProps, getInputProps: getInputIntroProps } =
    useDropzone({
      // accept: "image/*",
      onDrop: (acceptedFile) => {
        setIntroFile(
          Object.assign(acceptedFile[0], {
            preview: URL.createObjectURL(acceptedFile[0]),
          })
        );
      },
    });

  return (
    <div className="bg-[#F7F8FE] min-h-screen mb-5">
      <div className="bg-white px-5 pt-3 md:pt5">
        <h2 className="text-2xl font-bold">Discover</h2>
        <div className="text-sm breadcrumbs">
          <ul>
            <li>
              <Link to={"/dashboard"}>Dashboard</Link>
            </li>
            <li className="text-primary">Add New Course</li>
          </ul>
        </div>
      </div>
      <div className="bg-white m-5 rounded-lg">
        <form action="">
          <div className="grid grid-cols-1 md:grid-cols-2 px-5 pt-3 md:pt-5 gap-3">
            {/* file upload */}

            <div>
              <h2 className="text-xl font-medium mb-2">File Upload</h2>
              <span>Main Course File</span>
              {/* main course file */}
              <section className="container border-dashed border-2 h-[10.5rem] flex flex-col items-center justify-center my-1">
                <div
                  {...getRootfileProps({
                    className: "dropzone cursor-pointer",
                  })}
                >
                  <input {...getInputfileProps()} />
                  <div>
                    <figure className="flex justify-center">
                      <img
                        src={upload}
                        alt=""
                        className="bg-[#F5F5F5] p-4 rounded-full"
                      />
                    </figure>
                    <p className="text-center text-sm text-gray-500">
                      Drop files here or click to upload.
                    </p>
                  </div>
                  <aside>
                    <ul className="text-center text-sm py-2">{file.name}</ul>
                  </aside>
                </div>
              </section>

              {/* thumbnail file */}
              <span>Thumbnail File</span>
              <section className="container border-dashed border-2 h-16 flex flex-col items-center justify-center my-2">
                <div
                  {...getRootThumbnailProps({
                    className: "dropzone cursor-pointer",
                  })}
                >
                  <input {...getInputThumbnailProps()} />
                  <div className="flex items-center justify-center">
                    <figure className="flex justify-center">
                      <img
                        src={upload}
                        alt=""
                        className="bg-[#F5F5F5] p-2 rounded-full w-9/12"
                      />
                    </figure>
                    <p className="text-sm text-gray-500 ms-2">
                      Drop files here or click to upload.
                    </p>
                  </div>
                  <aside>
                    <ul className="text-center text-sm">{thumbnail.name}</ul>
                  </aside>
                </div>
              </section>
              {/* Intro file */}
              <span>Introduction File</span>
              <section className="container border-dashed border-2 h-16 flex flex-col items-center justify-center mt-1">
                <div
                  {...getRootIntroProps({
                    className: "dropzone cursor-pointer",
                  })}
                >
                  <input {...getInputIntroProps()} />
                  <div className="flex items-center justify-center">
                    <figure className="flex justify-center">
                      <img
                        src={upload}
                        alt=""
                        className="bg-[#F5F5F5] p-2 rounded-full w-9/12"
                      />
                    </figure>
                    <p className="text-sm text-gray-500 ms-2">
                      Drop files here or click to upload.
                    </p>
                  </div>
                  <aside>
                    <ul className="text-center text-sm">{introFile.name}</ul>
                  </aside>
                </div>
              </section>
            </div>
            {/* other info */}
            <div>
              <h2 className="text-xl font-medium">Other Information</h2>
              <div className="mt-2">
                <label htmlFor="tags">Tags</label>
                <br />
                <input
                  type="text"
                  id="tags"
                  placeholder="Tags..."
                  className="input input-bordered w-full mt-1 focus:outline-none"
                />
              </div>
              <div className="mt-2">
                <label htmlFor="lesson">Lesson Name</label>
                <br />
                <input
                  type="text"
                  id="lesson"
                  placeholder="Lesson Name..."
                  className="input input-bordered w-full mt-1 focus:outline-none"
                />
              </div>
              <div className="mt-2">
                <label htmlFor="des">Description / Overview</label>
                <br />
                <textarea
                  id="des"
                  className="textarea textarea-bordered focus:outline-none w-full h-28 mt-1"
                  placeholder="Type Here . . ."
                />
              </div>
              <div className="mt-2">
                <label htmlFor="price">Price</label>
                <br />
                <input
                  type="text"
                  id="price"
                  placeholder="$500"
                  className="input input-bordered w-full mt-1 focus:outline-none"
                />
              </div>
            </div>
          </div>
          <div className="p-5">
            <input
              type="button"
              className="bg-[#4C6FFF] text-white px-3 py-2 rounded-md cursor-pointer mt-2"
              value="Add Course"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddCourse;
