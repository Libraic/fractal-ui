import { BlockType, type Paragraph } from '../../types/problem.api.types.ts';
import { BlockMath, InlineMath } from 'react-katex';

type ProblemDefinitionProps = {
  paragraphs?: Paragraph[];
};

export function ProblemStatement({ paragraphs }: ProblemDefinitionProps) {
  return (
    <div className="space-y-4">
      {(paragraphs ?? []).map((paragraph, paragraphIndex) => (
        <div key={paragraphIndex} className="font-light">
          {paragraph.blocks.map((block, blockIndex) => {
            switch (block.type) {
              case BlockType.Text:
                return <span key={blockIndex}>{block.content}</span>;

              case BlockType.Inline:
                return <InlineMath key={blockIndex} math={block.content} />;

              case BlockType.Block:
                return <BlockMath key={blockIndex} math={block.content} />;

              default:
                return null;
            }
          })}
        </div>
      ))}
    </div>
  );
}
