import { useState } from "react";
import Notification from "../Notification/index";
import ConfirmDialog from "../ConfirmDialog/index";


export default function TutorialCardStudent({ tutorial }) {
    const [notify, setNotify] = useState({
        isOpen: false,
        message: "",
        type: "",
    });

    const [confirmDialog, setConfirmDialog] = useState({
        isOpen: false,
        title: "",
        subTitle: "",
    });

    const callTutorial = () => {};
    return (
        <div className="w-1/5 rounded-lg transform transition-all hover:-translate-y-2 duration-300 shadow-lg hover:shadow-2xl">
            <div className=" pt-2 px-2 bg-gray-100">
            
                <div className=""></div>
                <img
                    className="h-40 w-full object-cover rounded-lg"
                    src="https://static.vecteezy.com/system/resources/previews/000/274/360/large_2x/exchange-student-global-education-concept-vector.jpg"
                    alt=""
                />
                <div className="p-2">
                    <h2 className="font-bold text-lg mb-2">
                        {tutorial.tutorialName}
                    </h2>
                </div>
                <div>
                    <div>
                        <span className="text-gray-800 font-bold pl-2">
                            {tutorial.subject}
                        </span>
                    </div>
                    <div>
                        <span className="text-gray-800 font-bold pl-2">
                            {tutorial.grade}
                        </span>
                    </div>
                    <div>
                        <span className="text-gray-800 font-bold pl-2">
                            {tutorial.teacherName}
                        </span>
                    </div>
                    <div>
                        <span className="text-gray-800 font-bold pl-2">
                            {tutorial.lessonName}
                        </span>
                    </div>
                    <div>
                        <span className="text-gray-800 font-bold pl-2">
                            {tutorial.link}
                        </span>
                    </div>
                </div>
            </div>
            <a href="#">
                <button 
                    className="bg-green-600 w-full text-white font-bold py-2 px-4 rounded-b-lg"
                    onClick={callTutorial}>
                    Download
                </button>
            </a>
            <Notification notify={notify} setNotify={setNotify} />
            <ConfirmDialog
                confirmDialog={confirmDialog}
                setConfirmDialog={setConfirmDialog}
            />
        </div>
    );
}