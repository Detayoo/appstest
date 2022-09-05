import Link from "next/link";

import DashboardModal from "../../components/DashboardComponents/DashboardModal";
import { useDashboard } from "../../context/Dashboard-Context";
import DashboardLayout from "../../layouts/DashboardLayout";
import { PrimaryButton, WhiteButton } from "../../reusables/Buttons";
import AuthenticatedRoute from "../../utils/Authenticatedroute";

const Dashboard = () => {
  const { dashboardModal, setDashboardModal } = useDashboard();
  return (
    <div className="">
      <DashboardLayout>
        <div
          className={`pt-[62px] pl-[28px] pr-[95px] bg-lightestgray ${
            dashboardModal && "overflow-y-clip h-[90vh]"
          } `}
        >
          <h1 className="text-[24px] text-black/90  font-[500] tracking-tighter">
            Welcome to AppsTest!
          </h1>
          <p className="mt-[13px] text-black/70 text-[15px]">
            We are a platform of software testers. Take your time to learn
            <br /> about the platform and our rules - you don’t have to rush
            anything.
          </p>
          <div className="flex gap-[20px] w-full h-screen mt-[38px]  ">
            <div className="w-[75.6%] h-screen flex flex-col drop-shadow-md ">
              <div className="h-[36%] bg-white mb-[33px] pt-[40px] pl-[28px] pr-[82px] leading-6 rounded-[5px]">
                <p className="text-black/70 text-[15px] font-[500]">
                  We are pleased to show you the key functionalities of
                  AppsTest. This tour takes about 5 minutes - you will be a pro
                  in no-time!
                </p>
                <div className="flex mt-[37px] gap-[18px]">
                  <WhiteButton
                    text="Take the product tour"
                    className="px-[50px] py-[10px] text-[15px]  border-[2px] border-green"
                  />
                  <PrimaryButton
                    text="Create your first test"
                    className="px-[55px] py-[10px] text-[15px] font-[400]"
                    onClick={() => setDashboardModal(true)}
                  />
                </div>
              </div>
              <div className="h-[65%]">
                <p className="text-[18px] font-[500]">Onboarding Steps</p>
                <div className="flex mt-[21px] justify-between drop-shadow-sm">
                  <div className="bg-white w-[31.2%] pt-[20px] pb-[30px] pl-[20px] pr-[2px] rounded-[5px]">
                    <p className="font-[500] text-green text-[15px]">STEP 1</p>
                    <p className="font-[500] mt-[22px] text-black/80">
                      Invite Teams
                    </p>
                    <p className="font-[400] mt-[15px] mb-[20px]  text-[12.5px] text-black/60 ">
                      You can invite more of your team members to join before
                      moving your products to production.
                    </p>

                    <Link href="/">
                      <a className="text-[13px] font-[500] text-green underline decoreation-green">
                        Invite team
                      </a>
                    </Link>
                  </div>

                  <div className="bg-white w-[31.2%] pt-[20px] pb-[30px] pl-[20px] pr-[2px] rounded-[5px]">
                    <p className="font-[500] text-green text-[15px]">STEP 2</p>
                    <p className="font-[500] mt-[22px] text-black/80">
                      Create a test
                    </p>
                    <p className="font-[400] mt-[15px] mb-[20px]  text-[12.5px] text-black/60 ">
                      You can create your test by providing every necessary info
                      about your product for testing.
                    </p>

                    <Link href="/">
                      <a className="text-[13px] font-[500] text-green underline decoreation-green">
                        Create test
                      </a>
                    </Link>
                  </div>

                  <div className="bg-white w-[31.2%] pt-[20px] pb-[30px] pl-[20px] pr-[15px] rounded-[5px]">
                    <p className="font-[500] text-green text-[15px]">STEP 3</p>
                    <p className="font-[500] mt-[22px] text-black/80">
                      Test result
                    </p>
                    <p className="font-[400] mt-[15px] mb-[20px]  text-[12.5px] text-black/60 ">
                      You can upload your test tasks and we connect a certified
                      tester to your project.
                    </p>

                    <Link href="/">
                      <a className="text-[13px] font-[500] text-green underline decoreation-green">
                        Upload
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[22.1%]">
              <p className="font-[600] text-black/80 mt-[-20px]">
                Help & Resources
              </p>
              <div className="flex flex-col mt-[28px] gap-[20px]">
                <div className="bg-green/10 w-[100%] pt-[20px] pb-[28px] pl-[20px] pr-[20px] rounded-[5px]">
                  <p className="font-[600] mt-[1px] text-black/70 text-[13px]">
                    New to Software Testing?
                  </p>
                  <p className="font-[500] mt-[20px] mb-[18px]  text-[12.5px] text-black/60  leading-relaxed">
                    Start with the course Bug Reproductions to learn what bugs
                    are and how to document bug reports by reproducing the bugs
                    submitted by more experienced testers.
                  </p>

                  <Link href="/">
                    <a className="text-[13px] font-[500] text-green underline decoreation-green">
                      Bug Reproductions
                    </a>
                  </Link>
                </div>

                <div className="bg-pinkBg/10 w-[100%] pt-[20px] pb-[40px] pl-[20px] pr-[20px] rounded-[5px]">
                  <p className="font-[600] mt-[8px] text-black/70 text-[13px]">
                    Experienced?
                  </p>
                  <p className="font-[500] mt-[20px] mb-[14px]  text-[12.5px] text-black/60  leading-relaxed">
                    Start with the course Exploratory Testing and practice your
                    skills on live websites and apps!
                  </p>

                  <Link href="/">
                    <a className="text-[13px] font-[500] text-green underline decoreation-green">
                      Exploratory Testing
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </DashboardLayout>
      {dashboardModal && <DashboardModal />}
    </div>
  );
};

export default Dashboard;
