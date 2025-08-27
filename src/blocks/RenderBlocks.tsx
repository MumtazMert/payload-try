import React from 'react'

export const RenderBlocks: React.FC<{
  blocks: {
    blockType?: string
    [key: string]: any
  }[]
}> = (props) => {
  const { blocks } = props

  const hasBlocks = blocks && Array.isArray(blocks) && blocks.length > 0

  if (hasBlocks) {
    return (
      <>
        {blocks.map((block, index) => {
          // Note: Blocks are now handled directly in RichText component
          // This component is kept for backward compatibility but currently unused
          return (
            <div className="my-16" key={index}>
              <pre>Block type: {block.blockType}</pre>
            </div>
          )
        })}
      </>
    )
  }

  return null
}
