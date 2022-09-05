import Image from "next/image";

const AdminBugList = () => {
  return (
    <div className="mt-[58px] h-[100vh] bg-white mr-[-15px]">
      <div className="flex items-center justify-between bug-list mr-[15px]">
        <div className="w-[28%]">
          <label className="text-[14px] text-black/50" htmlFor="">
            Search
          </label>
          <br />
          <div className="border-[1px] border-black/30 flex justify-between items-center mt-[4px] pl-[10px] pr-[15px] py-[8px] rounded-[5px]">
            <input type="text"  />
            <div className="relative w-[20px] h-[20px]">
              <Image src="/icons/Search.svg" layout="fill" />
            </div>
          </div>
        </div>

        <div className="w-[22%]">
          <label className="text-[14px] text-black/50" htmlFor="">
            Filter bug type
          </label>
          <br />
          <div className="flex items-center justify-between mt-[4px] pl-[10px] pr-[15px] py-[8px] bg-green rounded-[5px]">
            <select name="" id="" className="w-[110%] bg-green text-white">
              <option value="">All</option>
            </select>
            <div className="relative w-[1px]">
              <Image src="/images/Thin Line.svg" layout="fill" />
            </div>
            <div className="relative w-[11px] h-[11px] ">
              <Image src="/icons/Arrow Down.svg" layout="fill" />
            </div>
          </div>
        </div>

        <div className="w-[22%]">
          <label className="text-[14px] text-black/50" htmlFor="">
            Feature
          </label>
          <br />
          <div className="flex items-center justify-between mt-[4px] pl-[10px] pr-[15px] py-[8px] bg-green rounded-[5px]">
            <select name="" id="" className="w-full bg-green text-white">
              <option value="">All</option>
            </select>
            <div className="relative w-[1px] h-full">
              <Image src="/images/Thin Line.svg" layout="fill" />
            </div>
            <div className="relative w-[11px] h-[11px]">
              <Image src="/icons/Arrow Down.svg" layout="fill" />
            </div>
          </div>
        </div>

        <div className="w-[22%]">
          <label className="text-[14px] text-black/50" htmlFor="">
            Severity
          </label>
          <br />
          <div className="flex items-center justify-between mt-[4px] pl-[10px] pr-[15px] py-[8px] bg-green rounded-[5px]">
            <select name="" id="" className="w-full bg-green text-white">
              <option value="">All</option>
            </select>
            <div className="relative w-[1px] h-full">
              <Image src="/images/Thin Line.svg" layout="fill" />
            </div>
            <div className="relative w-[11px] h-[11px]">
              <Image src="/icons/Arrow Down.svg" layout="fill" />
            </div>
          </div>
        </div>
      </div>

      <div className="ml-[-15px] mt-[20px] flex h-14 items-center text-green text-[14px] p-[10px] ">
        <div className="flex justify-center items-center h-[30px] w-[5%] ">
          <div className="relative w-[35px] h-[35px]">
            <Image src="/icons/Green Bug.svg" layout="fill" />
          </div>
        </div>

        <div className="w-[10%] py-[10px] px-[15px]">
          <select name="" id="" className="">
            <option value="">ID</option>
          </select>
        </div>

        <div className="flex-1 py-[10px] px-[15px]">Bug title</div>
        <div className="w-[10%] py-[10px] px-[15px]">Status</div>
        <div className="w-[20%] py-[10px] px-[15px]">Feature</div>
        <div className="w-[10%] py-[10px] px-[15px]">Time</div>
        <div className="w-[10%] py-[10px] px-[15px]">Tester</div>
      </div>

      <div className="bg-lightAsh flex  pl-[2px]  items-center text-[13px]">
        <div className="flex justify-center items-center ml-[-7px] h-[30px] w-[5%]">
          <div className="relative w-[35px] h-[35px]">
            <Image src="/icons/Blue Bug.svg" layout="fill" />
          </div>
        </div>
        <div className="w-[10%] flex justify-center items-center min-h-[100px] p-[10px] ">
          #234704
        </div>
        <div className="flex-1 py-[10px] px-[15px]">
          The flow of quickly adding a link to a document to the group is
          interrupted if the user clicks + more documents in the search pop-up
        </div>
        <div className="w-[10%]">Forwarded to the customer</div>
        <div className="w-[20%] py-[10px] px-[15px]">
          Auth: Create account modal
        </div>
        <div className="w-[10%] py-[10px] px-[15px]">6 minutes ago</div>
        <div className="w-[10%] py-[10px] px-[15px]s">Tester Wizard</div>
      </div>

      <div className="flex pl-[2px]  items-center text-[13px]">
        <div className="flex justify-center items-center ml-[-7px]  h-[30px] w-[5%]">
          <div className="relative w-[35px] h-[35px]">
            <Image src="/icons/Red Bug.svg" layout="fill" />
          </div>
        </div>
        <div className="w-[10%] flex justify-center items-center min-h-[100px] p-[10px]">
          #234704
        </div>
        <div className="flex-1 py-[10px] px-[15px]">
          The flow of quickly adding a link to a document to the group is
          interrupted if the user clicks + more documents in the search pop-up
        </div>
        <div className="w-[10%]">Awaiting Review</div>
        <div className="w-[20%] py-[10px] px-[15px]">
          Auth: Create account modal
        </div>
        <div className="w-[10%] py-[10px] px-[15px]">6 minutes ago</div>
        <div className="w-[10%] py-[10px] px-[15px]s">Tester Wizard</div>
      </div>

      <div className="bg-lightAsh flex pl-[2px]  items-center text-[13px]">
        <div className="flex justify-center items-center ml-[-7px]  h-[30px] w-[5%]">
          <div className="relative w-[35px] h-[35px]">
            <Image src="/icons/Red Bug.svg" layout="fill" />
          </div>
        </div>
        <div className="w-[10%] flex justify-center items-center min-h-[100px] p-[10px]">
          #234704
        </div>
        <div className="flex-1 py-[10px] px-[15px]">
          The flow of quickly adding a link to a document to the group is
          interrupted if the user clicks + more documents in the search pop-up
        </div>
        <div className="w-[10%]">Awaiting Review</div>
        <div className="w-[20%] py-[10px] px-[15px]">
          Auth: Create account modal
        </div>
        <div className="w-[10%] py-[10px] px-[15px]">6 minutes ago</div>
        <div className="w-[10%] py-[10px] px-[15px]s">Tester Wizard</div>
      </div>

      <div className="flex pl-[2px]  items-center text-[13px]">
        <div className="flex justify-center items-center ml-[-7px]  h-[30px] w-[5%]">
          <div className="relative w-[35px] h-[35px]">
            <Image src="/icons/Red Bug.svg" layout="fill" />
          </div>
        </div>
        <div className="w-[10%] flex justify-center items-center min-h-[100px] p-[10px]">
          #234704
        </div>
        <div className="flex-1 py-[10px] px-[15px]">
          The flow of quickly adding a link to a document to the group is
          interrupted if the user clicks + more documents in the search pop-up
        </div>
        <div className="w-[10%]">Awaiting Review</div>
        <div className="w-[20%] py-[10px] px-[15px]">
          Auth: Create account modal
        </div>
        <div className="w-[10%] py-[10px] px-[15px]">6 minutes ago</div>
        <div className="w-[10%] py-[10px] px-[15px]s">Tester Wizard</div>
      </div>
    </div>
  );
};

export default AdminBugList;
