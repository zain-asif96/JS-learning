// Shallow copy of javascript object
function shallowObj(obj) {
  return Object.assign({}, obj);
}

const original = { nae: "John", marks: [100, 120, 110] };

const shallow = shallowObj(original);

shallow.marks.push(115);

console.log({ originalObjInfo: original.marks });
console.log({ shallowObjInfo: original.marks });
