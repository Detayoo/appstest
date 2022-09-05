const ProfileSidebar = ({ Text, subText }) => {
  return (
    <div className="w-[41.5%] flex justify-center items-center pl-[92px] pr-[80px] h-screen bg-green text-white">
      <div>
        <h1 className="text-[26px] mt-[48px]  font-[500]">{Text}</h1>
        <p className="mt-[10px] font-light text-[15px]">{subText}</p>
      </div>
    </div>
  );
};

export default ProfileSidebar;
