import {Gladly} from "./Gladly.node";

test("smoke", () => {
    const node = new Gladly()
    expect(node.description.properties).toBeDefined()
})
