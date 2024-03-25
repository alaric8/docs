import fastGlob from "fast-glob";
import path from "path";
export function pathToObject(pathList: string[]) {
  const buffer = {};
  pathList.forEach((path) => accessObject(path, buffer));
  return buffer;
}
export function nav(source: string[]) {
  const pathList = fastGlob.sync(source, {
    cwd: path.join(process.cwd(), "./src"),
    onlyDirectories: true,
    deep: 2,
    dot: true,
  });
  const buffer = pathToObject(pathList);
  const result = walkPath(buffer, (item) => {
    item.link = item.link + "/index";
    return item;
  });
  return result;
}
export function siderbar(source: string[]) {
  const pathList = fastGlob.sync(source, {
    cwd: path.join(process.cwd(), "./src"),
    dot: true,
  });
  const buffer = pathToObject(pathList);
  const result = walkPath(buffer, (item) => {
    item.link = item.link.replace(".md", "");
    item.text = item.text.replace(".md", "");
    return item;
  });
  return result;
}
type Cb<T> = (item: T) => T;
export function walkPath<T extends object>(node: T, cb: Cb<{ text: string; link: string }>) {
  const valueKey = Object.keys(node);
  const exclude = ["fullPath"];
  const filterKey = valueKey.filter((path) => !exclude.includes(path));
  return filterKey.map((key) => {
    if (typeof node[key] == "object") {
      const _path = walkPath(node[key], cb);
      if (_path.length) {
        return { text: key, items: _path };
      } else {
        return cb({
          text: key,
          link: `/${node[key]["fullPath"]}`,
        });
      }
    }
    return {
      text: key,
    };
  });
}
export function accessObject(path: string, obj: any, delimit: string = "/"): any {
  const parts = path.split(delimit);
  let result = obj;
  for (const part of parts) {
    if (part) {
      result[part] = result[part] || {};
      result = result[part];
    }
  }
  result["fullPath"] = path;
  return result;
}
