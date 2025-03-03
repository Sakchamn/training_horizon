// pages/index.js
import Card from '@/components/Card';
import Link from 'next/link';
import Dropdown from '@/components/Dropdown';

const Home = () => {
    const courses = [
        { title: 'Cricket', category: 'Sports', gender: 'Boys and Girls', description: 'Learn the basics of cricket...', imageUrl: '/images/cricket.png', time: '8:00 PM to 9:30 PM' },
        { title: 'Basketball', category: 'Sports', gender: 'Boys Only', description: 'Master the skills of basketball...', imageUrl: '/images/basketball.png', time: '2 hrs' },
        { title: 'Football', category: 'Sports', gender: 'Boys Only', description: 'Kick-start your football career...', imageUrl: '/images/football.png', time: '2 hrs'},
        { title: 'Badminton', category: 'Sports', gender: 'Boys and Girls', description: 'Learn to smash the shuttle...', imageUrl: 'images//badminton.png', time: '2 hrs' },
        { title: 'Mathematics', category: 'Educational', gender: 'Boys and Girls', description: 'Ace the formulas ',imageUrl: '/images/math.png', time: '8:00 PM to 9:30 PM'  },
        { title: 'Science', category: 'Educational', gender: 'Boys and Girls', description: 'Ace the formulas ',imageUrl: '/images/lab.png', time: '2 hrs'  },
        { title: 'History', category: 'Educational', gender: 'Boys', description: 'Ace the formulas ',imageUrl: '/images/history.png', time: '2 hrs'  },
        { title: 'History', category: 'Educational', gender: 'Boys', description: 'Ace the formulas ',imageUrl: '/images/history.png', time: '2 hrs'  },

      ];

      const sportsCourse = courses.filter(course => course.category == 'Sports')
      const educationalCourse = courses.filter(course => course.category == 'Educational')
      return (
        <>
        <div className="w-full flex max-sm:flex-col container mx-auto py-6">
          <h2 className="text-2xl max-sm:text-base font-bold mb-4 max-sm:px-2 ">Our Best Courses</h2>
          <div className="gap-4 w-auto flex-grow flex justify-end max-sm:justify-start max-sm:px-2">
            <Dropdown label="Select Category" options={['Sports', 'Arts', 'Music']} />
            <Dropdown label="Gender" options={['Boys','Boys and Girls']} />
          </div>
          </div>
          <div className="flex max-sm:px-2 container mx-auto">
              <h1 className=" text-base font-bold">Sports</h1>
              <Link href={'/'}
              className="flexEnd w-full text-sky-400"
               >
              View All
              </Link>
          </div>
          <span className="flex items-center mt-4 border-b w-full"></span>
          <div className="container mx-auto py-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {sportsCourse.map((course, index) => (
              <Card key={index} {...course} />
            ))}
          </div>
          <div className="flex max-sm:px-2 container mx-auto">
              <h1 className=" text-base font-bold">Educational</h1>
              <Link href={'/'}
              className="flexEnd w-full text-sky-400"
               >
              View All
              </Link>
          </div>
          <span className="flex items-center mt-4 border-b w-full"></span>
          <div className="container mx-auto py-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {educationalCourse.map((course, index) => (
              <Card key={index} {...course} />
            ))}
          </div>
          <div className="flex max-sm:px-2 container mx-auto">
              <h1 className=" text-base font-bold">Educational</h1>
              <Link href={'/'}
              className="flexEnd w-full text-sky-400"
               >
              View All
              </Link>
          </div>
          <span className="flex items-center mt-4 border-b w-full"></span>
          <div className="container mx-auto py-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {educationalCourse.map((course, index) => (
              <Card key={index} {...course} />
            ))}
          </div>
        </>
      );
}

export default Home