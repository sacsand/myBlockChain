const Block = require("./block");

describe("Block", () => {
  let data, lastBlock, block;
  beforeEach(() => {
    data = "bar";
    lastBlock = Block.genesis();
    block = Block.mineBlock(lastBlock, data);
  });

  it("sets the `data` to the match the input", () => {
    expect(block.data).toEqual(data);
  });

  it("sets the `lastHash` to the mathc the hash of the block", () => {
    expect(block.lastHash).toEqual(lastBlock.hash);
  });
});
