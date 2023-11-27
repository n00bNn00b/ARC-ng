import React from "react";
import { DiCss3, DiJavascript, DiNpm } from "react-icons/di";
import { FaList, FaRegFolder, FaRegFolderOpen } from "react-icons/fa";

import TreeView, { flattenTree } from "react-accessible-treeview";
import StepTest from "./StepTest";
import DragTest from "./DragTest";

const folder = {
  name: "",
  children: [
    {
      name: "src",
      children: [{ name: "index.js" }, { name: "styles.css" }],
    },
    {
      name: "node_modules",
      children: [
        {
          name: "react-accessible-treeview",
          children: [{ name: "index.js" }],
        },
        { name: "react", children: [{ name: "index.js" }] },
      ],
    },
    {
      name: ".npmignore",
    },
    {
      name: "package.json",
    },
    {
      name: "webpack.config.js",
    },
  ],
};

const TreeComponent = () => {
  const data = flattenTree(folder);
  return (
    <div className="my-20 ">
      <div className=" p-5 list-none block">
        <TreeView
          data={data}
          // aria-label="directory"
          className="p-5 border-r-4 list-none cursor-pointer block"
          togglableSelect
          clickAction="EXCLUSIVE_SELECT"
          multiSelect
          nodeRenderer={({
            element,
            isBranch,
            isExpanded,
            getNodeProps,
            level,
            handleSelect,
          }) => (
            <div {...getNodeProps()} style={{ paddingLeft: 20 * (level - 1) }}>
              {isBranch ? (
                <FolderIcon isOpen={isExpanded} />
              ) : (
                <FileIcon filename={element.name} />
              )}
              {element.name}
            </div>
          )}
        />
      </div>
      <StepTest />
      <DragTest />
    </div>
  );
};
const FolderIcon = ({ isOpen }) =>
  isOpen ? (
    <FaRegFolderOpen color="e8a87c" className="align-middle" />
  ) : (
    <FaRegFolder color="e8a87c" className="align-middle" />
  );

const FileIcon = ({ filename }) => {
  const extension = filename.slice(filename.lastIndexOf(".") + 1);
  switch (extension) {
    case "js":
      return <DiJavascript color="yellow" className="align-middle" />;
    case "css":
      return <DiCss3 color="turquoise" className="align-middle" />;
    case "json":
      return <FaList color="yellow" className="align-middle" />;
    case "npmignore":
      return <DiNpm color="red" className="align-middle" />;
    default:
      return null;
  }
  // const items = Object.keys(folder).reduce((single, key) => {
  //   single.push(folder[key]);
  //   return single;
  // }, []);
  // console.log(items);
};

export default TreeComponent;
