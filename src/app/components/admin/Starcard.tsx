const stats = [
  { title: "Features", value: 18 },
  { title: "Users", value: 143 },
  { title: "Reports Generated", value: 520 },
  { title: "Errors", value: 5 },
];

export default function StatCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 my-8">
      {stats.map((stat, index) => (
        <div
          key={index}
          className="bg-white rounded-lg shadow-md p-6 text-center"
        >
          <h3 className="text-lg font-semibold text-gray-700">{stat.title}</h3>
          <p className="text-2xl font-bold text-purple-800">{stat.value}</p>
        </div>
      ))}
    </div>
  );
}
