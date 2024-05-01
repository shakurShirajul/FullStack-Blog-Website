import { useState } from "react";
import { MdDriveFileRenameOutline } from "react-icons/md";
import { TbPasswordUser } from "react-icons/tb";
const SettingsForm = () => {
    const [isDisabledName, setIsDisabledName] = useState(true);
    const [isDisabledURL, setIsDisabledURL] = useState(true);
    const toggleDisabledName = () => {
        setIsDisabledName(!isDisabledName);
    }
    const toggleDisabledURL = () => {
        setIsDisabledURL(!isDisabledURL)
    }
    return (
        <div>
            <form className='grid grid-cols-1 gap-4'>
                <label className='flex bg-[#ECECEC] py-4 px-4 rounded-lg justify-between items-center gap-1'>
                    <div className="flex items-center gap-7 w-full">
                        <MdDriveFileRenameOutline className="text-2xl" />
                        <div className="w-full">
                            <p className="text-sm font-normal">Name:</p>
                            <input type='text'
                            placeholder="Update Your Name"
                                className="bg-[#ECECEC] text-base focus:outline-none w-full"
                                disabled={isDisabledName}
                            />
                        </div>
                    </div>
                    
                    <div>
                        <button
                            type="button"
                            className={isDisabledName ? "edit-btn" : "hidden"}
                            onClick={toggleDisabledName}>
                            EDIT
                        </button>
                    </div>
                </label>
                <label className='flex bg-[#ECECEC] py-4 px-4 rounded-lg justify-between items-center gap-1'>
                    <div className="flex items-center gap-7 w-full">
                        <MdDriveFileRenameOutline className="text-2xl" />
                        <div className="w-full">
                            <p className="text-sm font-normal">Bio:</p>
                            <textarea type='text'
                                className="bg-[#ECECEC] text-base focus:outline-none w-full"
                                placeholder="Update Your Bio"
                                disabled={isDisabledName}
                            />
                        </div>
                    </div>
                    <div>
                        <button
                            type="button"
                            className={isDisabledName ? "edit-btn" : "hidden"}
                            onClick={toggleDisabledName}>
                            EDIT
                        </button>
                    </div>
                </label>
                <label className='bg-[#ECECEC] py-4 pl-4 rounded-lg gap-1'>
                    <div className="flex items-center gap-7 w-full">
                        <TbPasswordUser className="text-2xl" />
                        <div className="w-full">
                            <p className="text-sm font-normal">Password:</p>
                            <input type='email'
                                disabled
                                placeholder="Update Your Password"
                                className="bg-[#ECECEC] text-base focus:outline-none w-full"
                            />
                        </div>
                    </div>
                </label>
                <div className="flex  justify-end">
                    <input type="submit" value="Update Profile" className="px-6 py-4 font-semibold border-none border-[#1A8917] border-2 rounded-2xl text-white bg-[#1A8917] cursor-pointer" />
                </div>
            </form>
        </div>
    );
};

export default SettingsForm;