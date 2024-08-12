import CourseCard from '@/components/CourseCard';

const CourseList = () => {
  const courses = [
    { title: 'Cricket Coaching', category: 'Sports', description: 'Learn the basics of cricket...', imageUrl: '/images/cricket.png' },
    { title: 'Basketball Coaching', category: 'Sports', description: 'Master the skills of basketball...', imageUrl: '/images/basketball.png' },
    { title: 'Football Coaching', category: 'Sports', description: 'Kick-start your football career...', imageUrl: '/images/football.png' },
    { title: 'Badminton Coaching', category: 'Sports', description: 'Learn to smash the shuttle...', imageUrl: '/images/badminton.png' },
  ];

  return (
    <section className="container mx-auto py-8">
      <h2 className="text-2xl font-bold mb-4">Our Best Courses</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {courses.map((course, index) => (
          <CourseCard key={index} {...course} />
        ))}
      </div>
    </section>
  );
};

export default CourseList;
