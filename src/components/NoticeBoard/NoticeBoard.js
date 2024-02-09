export default function NoticeBoard() {
    return <main className="flex flex-1 flex-col gap-4 p-5 md:gap-8 md:p-5">
        <div className="rounded-lg border bg-card text-card-foreground shadow-sm" data-v0-t="card">
            <div className="flex flex-col space-y-1.5 p-6">
                <h3 className="text-2xl font-semibold whitespace-nowrap leading-none tracking-tight">Announcements</h3>
                <p className="text-sm text-muted-foreground">Important updates, events, and deadlines</p>
            </div>
            <div className="p-6 prose">
                <ul className=" list-disc ">
                    <li>
                        <strong>Midterm Exam:</strong> The midterm exam for all courses will be held on October 15th, 2023.
                    </li>
                    <li>
                        <strong>Guest Lecture:</strong> Dr. Smith will deliver a guest lecture on the topic of Quantum Physics
                        on October 20th, 2023.
                    </li>
                    <li>
                        <strong>Library Closure:</strong> The university library will be closed for renovations from October
                        25th to November 5th, 2023.
                    </li>
                </ul>
            </div>
        </div>
    </main>
}