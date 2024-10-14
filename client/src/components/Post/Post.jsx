import React, { useState } from "react";
import axios from "axios";
import { SERVER_API_ENDPOINT } from "../../../server";

const Post = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios
      .post(`${SERVER_API_ENDPOINT}/post/create`, {
        title,
        description,
      })
      .then((res) => {
        alert("Post created successfully!");
        console.log(res.data);
        setTitle("");
        setDescription("");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <div className="text-black">
        <section className="bg-slate-200 w-[500px] h-auto flex mx-auto mt-20 rounded-lg">
          <div className="py-10 px-7 w-full">
            <h1 className="text-2xl font-bold flex justify-center">
              Create Post
            </h1>
            <div className="mt-7">
              <div className="flex flex-col gap-y-2">
                <label htmlFor="" className="font-semibold text-lg">
                  Title:
                </label>
                <input
                  onChange={(e) => setTitle(e.target.value)}
                  type="text"
                  name="title"
                  className="bg-white border border-gray-400 px-3 py-2 rounded-md"
                  placeholder="Enter post title"
                />
              </div>
              <div className="flex flex-col gap-y-2 mt-7">
                <label htmlFor="" className="font-semibold text-lg">
                  Description:
                </label>
                <textarea
                  onChange={(e) => setDescription(e.target.value)}
                  type="text"
                  name="description"
                  className="bg-white border border-gray-400 px-3 py-2 rounded-md"
                  placeholder="Enter post description"
                />
              </div>

              <button
                onClick={handleSubmit}
                className="mt-5 justify-center bg-blue-500 px-3 mx-auto text-white text-sm py-2 flex rounded-lg font-semibold hover:opacity-90"
              >
                Create Post
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Post;
