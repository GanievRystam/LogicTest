// src/App.tsx
import React, { useState, useMemo } from 'react';
import useFetch from './hooks/useFetch';
import Layout from './components/Layout/Layout';
import TagFilter from './components/TagFilter/TagFilter';
import CourseList from './components/CourseList/CourseList';
import { Course, Tag } from './types/index';

const App: React.FC = () => {
  const { data, loading, error } = useFetch<Course[]>('https://logiclike.com/docs/courses.json');
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  const allTags: Tag[] = useMemo(() => {
    const tags = new Set<string>();
    data?.forEach(course => course.tags.forEach(tag => tags.add(tag)));
    return Array.from(tags).map(tag => ({ name: tag, selected: selectedTags.includes(tag) }));
  }, [data, selectedTags]);

  const handleTagClick = (tag: string) => {
    if(tag === '') {
      setSelectedTags([tag]);
    }
    setSelectedTags(prevTags => 
      prevTags.includes(tag) ? [] : [tag]
    );
  };

  const filteredCourses = useMemo(() => {
    if (selectedTags.length === 0) return data || [];
    return (data || []).filter(course => 
      course.tags.some(tag => selectedTags.includes(tag))
    );
  }, [data, selectedTags]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <Layout>
      <TagFilter tags={allTags} onTagClick={handleTagClick} />
      <CourseList courses={filteredCourses} />
    </Layout>
  );
};

export default App;
