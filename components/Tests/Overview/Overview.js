import OverviewSidebar from "./OverviewSidebar";

const Overview = () => {
  return (
    <div className="flex">
      <div className="w-[74.5%] h-full pt-[40px] pr-[75px] overflow-y-auto">
        <div>
          <p className="font-[500] text-[24px] tracking-tight">Access</p>
          <p className="text-[13px] text-black/60 mt-[5px]">
            Access information will be visible while the test is running and
            only to testers who have joined the test
          </p>
        </div>

        <div className="mt-[28px]">
          <p className="font-[500] text-[24px] tracking-tight">
            Goal of this test
          </p>
          <p className="text-[13px] text-black/60 mt-[5px]">
            Regression testing
          </p>
        </div>

        <div className="mt-[28px]">
          <p className="font-[500] text-[24px] tracking-tight">Out of scope</p>
          <p className="text-[13px] text-black/60 mt-[5px] leading-relaxed">
            Excluded features: Checkout, Order Confirmation, Account Pages (i.e.
            Orders, Autoship, Addresses, Payment Methods, Account Settings)
          </p>
          <p className="text-black/60 mt-[14px] text-[13px] tracking-wide">
            Excluded features: Low
          </p>
        </div>

        <div className="mt-[28px] ">
          <p className="font-[500] text-[24px] tracking-tight">
            Additional requirement
          </p>
          <p className="text-[13px] text-black/60 mt-[5px]">No information</p>
        </div>

        <div className="mt-[28px] ">
          <p className="font-[500] text-[24px] tracking-tight">
            Test these features
          </p>
        </div>
      </div>
      <OverviewSidebar />
    </div>
  );
};

export default Overview;
