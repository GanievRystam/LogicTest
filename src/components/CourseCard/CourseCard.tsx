import React from 'react';
import { Course } from '../../types/index';
import './courseCard.scss';

interface CourseCardProps {
  course: Course;
}

const CourseCard: React.FC<CourseCardProps> = ({ course }) => {
  return (
    <div className="course-card">
        <div className='course-card__wrap' style={{background:course.bgColor}}>
            <img src={course.image} alt={course.name} className="course-image" />
        </div>
      <h3 className="course-title">{course.name}</h3>
    </div>
  );
};

export default CourseCard;
