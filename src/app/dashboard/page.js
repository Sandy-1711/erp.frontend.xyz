import AttendanceTracker from "@/components/AttendanceTracker/AttendanceTracker";
import CourseDetails from "@/components/CourseDetails/CourseDetails";
import DashboardAssignments from "@/components/DashboardAssignments/DashboardAssignments";
import DashboardProfile from "@/components/DashboardProfile/DashboardProfile";
import LowestAttendance from "@/components/LowestAttendance/LowestAttendance";
import NoticeBoard from "@/components/NoticeBoard/NoticeBoard";
import ResultDashboard from "@/components/ResultDashboard/ResultDashboard";

export default function DashboardPage() {
    var student = false;
    var faculty = true;
    const sub1 = {
        name: "BEC-101",
        subattendance: 100,
    }
    const sub2 = {
        name: "BSM",
        subattendance: 60,
    }
    const sub3 = {
        name: "BEC",
        subattendance: 0,
    }
    const attendance = 100;
    const radius = "50"
    const cx = "75"
    const cy = "75"
    const stroke = attendance == 100 ? "lightgreen" : attendance >= 75 ? "#AEE2FF" : attendance >= 60 ? "orange" : "red"
    const strokeWidth = "20"
    const circumference = 2 * Math.PI * (radius);
    return <div className="h-max w-screen container mx-auto">
        {student && <div className=" h-max flex justify-between p-5 gap-5">
            <DashboardProfile />
            <AttendanceTracker
                cx={cx}
                cy={cy}
                radius={radius}
                circumference={circumference}
                stroke={stroke}
                strokeWidth={strokeWidth}
                attendance={attendance}
            />
            <LowestAttendance
                sub1={sub1}
                sub2={sub2}
                sub3={sub3}
            />
        </div>}
        {faculty && <div className="p-5 flex gap-5 justify-between">
            <DashboardProfile />
            <div className="p-4 w-1/3 border border-slate-300 rounded-lg flex gap-4">
                {/* <div>
                    <span className="text-base font-semibold">Subjects</span>
                    <div className="flex flex-col">
                        <span>BEC-120</span>
                        <span>BEC-120</span>
                        <span>BEC-120</span>
                        <span>BEC-120</span>
                    </div>
                </div> */}
                <div></div>
            </div>
        </div>}
        {student && <CourseDetails />}
        <NoticeBoard />
        {student && <ResultDashboard />}
        {student && <DashboardAssignments />}

    </div>
}