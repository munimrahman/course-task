/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import upload from "../../assets/upload.png";
import { useDropzone } from "react-dropzone";
import { useCreateCourseMutation } from "../../features/courses/coursesApi";

const AddCourse = () => {
  const navigate = useNavigate();
  const [file, setFile] = useState({});
  const [thumbnail, setThumbnail] = useState({});
  const [introFile, setIntroFile] = useState({});
  const [tags, setTags] = useState([]);
  const [lessonName, setLessonName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [createCourse, { isLoading, error, isError }] =
    useCreateCourseMutation();
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

  const handleSubmit = (e) => {
    e.preventDefault();
    // Create form data
    const formData = new FormData();
    formData.append("main_course_file", file);
    formData.append("thumbnail_file", thumbnail);
    formData.append("introduction_file", introFile);
    tags.forEach((tag) => formData.append("tags[]", tag));
    formData.append("lesson_name", lessonName);
    formData.append("description", description);
    formData.append("price", price);
    createCourse(formData);
    if (!isLoading && !isError) {
      navigate("/courses");
    }
  };
  console.log(error);
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
        <form onSubmit={handleSubmit}>
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
                  placeholder="React, Node, JavaScript"
                  className="input input-bordered w-full mt-1 focus:outline-none"
                  value={tags.join(",")}
                  onChange={(e) => setTags(e.target.value.split(","))}
                  required
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
                  value={lessonName}
                  onChange={(e) => setLessonName(e.target.value)}
                  required
                />
              </div>
              <div className="mt-2">
                <label htmlFor="des">Description / Overview</label>
                <br />
                <textarea
                  id="des"
                  className="textarea textarea-bordered focus:outline-none w-full h-28 mt-1"
                  placeholder="Type Here . . ."
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  required
                />
              </div>
              <div className="mt-2">
                <label htmlFor="price">Price</label>
                <br />
                <input
                  type="number"
                  id="price"
                  placeholder="$500"
                  className="input input-bordered w-full mt-1 focus:outline-none"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                  required
                />
              </div>
            </div>
          </div>
          <div className="p-5">
            <input
              type="submit"
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
