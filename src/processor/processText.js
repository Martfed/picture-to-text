const processText = async (text) => {
  const lines = text.Blocks.filter(block => {
    return block.BlockType === "LINE"
  })

  return lines.map(line => {
    return line.Text
  }).join(' ')
};

module.exports = { processText };