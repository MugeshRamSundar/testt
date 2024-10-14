import React from "react";

const items = [
  {
    id: 1,
    name: "Home",
    link: "/",
  },
  {
    id: 2,
    name: "Community",
    link: "/community",
  },
  {
    id: 3,
    name: "Post",
    link: "/post",
  },
  {
    id: 4,
    name: "Contact",
    link: "/contact",
  },
  {
    id: 5,
    name: "FeedBack",
    link: "/feedback",
  },
];

const NavItems = ({ id }) => {
  return (
    <>
      <nav className="my-auto bg-black px-5 py-2.5 rounded-full">
        <ul className="flex gap-x-5">
          {items.map((item) => {
            return (
              <li key={item.id}>
                <a
                  href={item.link}
                  className={`${
                    item.id === id
                      ? "bg-white rounded-md px-2 py-1 text-black"
                      : " hover:bg-white hover:rounded-md px-2 py-1 hover:text-black"
                  }`}
                >
                  {item.name}
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
    </>
  );
};

export default NavItems;
