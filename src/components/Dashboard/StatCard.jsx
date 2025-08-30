const StatCard = ({ icon: Icon, title, value }) => {
  return (
    <div className="card bg-white shadow hover:shadow-lg transition p-5 rounded-lg flex items-center gap-4">
      <div className="text-primary text-3xl">
        <Icon />
      </div>
      <div>
        <p className="text-gray-500 text-sm">{title}</p>
        <h3 className="text-xl font-semibold">{value}</h3>
      </div>
    </div>
  );
};

export default StatCard;
