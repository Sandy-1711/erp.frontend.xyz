export default function AttendanceTracker({cx,cy,radius,stroke,attendance,strokeWidth,circumference}) {
    return <div className="w-1/3 p-4 border border-slate-300 rounded-lg">
        <h1>Overall Attendance</h1>
        <svg height="150" width="150">
            <circle cx={cx} cy={cy} r={radius} fill="transparent" stroke={stroke} strokeWidth={strokeWidth} opacity="0.2" />
            <circle style={{ transition: '1s ease-in-out' }} cx={cx} cy={cy} r={radius} fill="transparent" stroke={stroke} strokeWidth={strokeWidth} strokeLinecap="round" transform="rotate(-90,75,75)" strokeDasharray={[circumference * attendance / 100, circumference]} />
            <text fontWeight='600' fill="black" x={cx - 15} y={cy - (-5)}>{attendance}%</text>
        </svg>
    </div>
}