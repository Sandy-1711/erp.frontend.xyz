export default function LowestAttendance({ sub1, sub2, sub3 }) {
    return <div className="h-50 w-1/3 p-4 py-12 border border-slate-300  text-sm rounded-lg flex items-end justify-between">
        <div className={`bg-[#F46565] m-1 w-1/3 relative transition-transform rounded-t-md`} style={{ minHeight: '5px', height: `${sub1.subattendance / 14}rem`, display: 'inline-block' }}>
            <div className="absolute text-black -bottom-9 leading-4  flex w-full text-center flex-col items-center justify-center">
                <span>{sub1.name}</span>
                <span>{sub1.subattendance}%</span>
            </div>
        </div>
        <div className={`bg-[#FFC765] m-1 w-1/3 relative transition-transform rounded-t-md`} style={{ minHeight: '5px', height: `${sub2.subattendance / 14}rem`, display: 'inline-block' }}>
            <div className="absolute text-black -bottom-9 leading-4 flex w-full text-center flex-col items-center justify-center">
                <span>{sub2.name}</span>
                <span>{sub2.subattendance}%</span>
            </div>
        </div>
        <div className={`bg-[#FFE583] m-1  w-1/3 relative transition-transform rounded-t-md`} style={{ minHeight: '5px', height: `${sub3.subattendance / 14}rem`, display: 'inline-block' }}>
            <div className="absolute text-black -bottom-9 leading-4 flex w-full text-center flex-col items-center justify-center">
                <span>{sub3.name}</span>
                <span>{sub3.subattendance}%</span>
            </div>
        </div>
    </div>
}