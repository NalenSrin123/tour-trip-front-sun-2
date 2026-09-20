const HighLighCompo = ({ icon, visit, txtPara }) => {
  return (
    <div 
    className="group bg-white rounded-2xl p-6 shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border border-slate-100">
      <div
        className="
        w-10 h-10
        md:w-12 md:h-12
        lg:w-16 lg:h-16

        flex items-center justify-center

        rounded-lg md:rounded-xl

        bg-emerald-200
        text-emerald-600

        mb-3 md:mb-5

        group-hover:scale-110
        transition-all duration-300
        "
      >
        {icon}
      </div>

      <h2 className="text-sm lg:text-xl font-bold text-slate-800 mb-3">
        {visit}
      </h2>

      <p className="text-xs lg:text-base text-slate-500 leading-relaxed">
        {txtPara}
      </p>
    </div>
  );
};

export default HighLighCompo;
