import React from 'react';
import { Tag } from '../../types/index';
import './tagFilter.scss';

interface TagFilterProps {
  tags: Tag[];
  onTagClick: (tag: string) => void;
}

const TagFilter: React.FC<TagFilterProps> = ({ tags, onTagClick }) => {
  const hasSelectedTags = tags.some(tag => tag.selected);
  return (
    <div className="tag-filter">
    <button 
      key="all" 
      className={`tag-button ${!hasSelectedTags ? "selected" : ''}`} 
      onClick={() => onTagClick("")}
    >
      Все темы
    </button>
      {tags.map(tag => (
        <button 
          key={tag.name} 
          className={`tag-button ${tag.selected ? 'selected' : ''}`} 
          onClick={() => onTagClick(tag.name)}
        >
          {tag.name}
        </button>
      ))}
    </div>
  );
};

export default TagFilter;
