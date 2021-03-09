function list(names) {
  const newArray = names.map(({ name }) => name);
  const final = newArray.pop() || "";

  return newArray.length ? newArray.join(", ") + " & " + final : final;
}

list([
  { name: "Bart" },
  { name: "Lisa" },
  { name: "Maggie" },
  { name: "Homer" },
  { name: "Marge" },
]);

list([{ name: "Bart" }, { name: "Lisa" }, { name: "Maggie" }]);
list([{ name: "Bart" }, { name: "Lisa" }]);
list([{ name: "Bart" }]);
list([]);
