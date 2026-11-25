import { japanCompanyChinese } from './japanCompanyChinese'

export function bilingualCompanyBlocks(blocks, sectionNumber) {
  const original = japanCompanyChinese.sections[sectionNumber]
  if (!original) return blocks
  const paragraphs = original.blocks.filter(
    (block) => block.type === 'paragraph',
  )
  let paragraphIndex = 0
  return blocks.map((block) => {
    if (block.type === 'paragraph')
      return { ...block, textZh: paragraphs[paragraphIndex++]?.textZh }
    if (block.type === 'chart') {
      const figure = original.blocks.find((item) => item.id === block.id)
      return figure
        ? {
            ...block,
            titleZh: figure.title,
            captionZh: figure.caption
              .replace(figure.title, '')
              .replace(/^来源\s*/, '')
              .trim(),
          }
        : block
    }
    return block
  })
}

export const chineseCompanySources = japanCompanyChinese.sources
