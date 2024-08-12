type CourseCardProps = {
    title: string;
    category: string;
    description: string;
    imageUrl: string;
  };
  
  const CourseCard = ({ title, category, description, imageUrl }: CourseCardProps) => {
    return (
      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        <img src={imageUrl} alt={title} className="w-full h-32 object-cover w-146 " />
        <div className="p-4">
          <h3 className="text-lg font-semibold">{title}</h3>
          <p className="text-sm text-gray-600">{category}</p>
          <p className="text-sm mt-2">{description}</p>
          <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded">Enroll Now</button>
        </div>
      </div>
    );
  };
  
  export default CourseCard;
  