import { add, addChat, toString, ChatMessage } from "./objectCompare.js";

describe("Basic test", () => {
  test("addChat", () => {
    const list = addChat("hello");
    expect(list.length).toEqual(1);
    expect(list[0].text).toEqual("hello");
  });

  test("add function should affect children", () => {
    const list = addChat("hello");

    let parent = new ChatMessage("hello", "red");
    let node = new ChatMessage("child", "black", 1);

    add(node, parent);

    expect(parent.childs.length).toEqual(1);
  });

  test("add function should affect children 2", () => {
    const list = addChat("hello");

    let parent = new ChatMessage("hello", "red");
    let node = new ChatMessage("child", "black", 1);
    let node2 = new ChatMessage("grandchild", "white", 2);

    add(node2, node);
    add(node, parent);

    console.log(toString([parent]));
  });
});
