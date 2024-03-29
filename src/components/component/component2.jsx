
/**
 * This code was generated by v0 by Vercel.
 * @see https://v0.dev/t/zEIwE4Tiv86
 */
import Link from "next/link"
import { TableHead, TableRow, TableHeader, TableCell, TableBody, Table } from "@/components/ui/table"
import { Card, CardTitle, CardHeader, CardContent } from "@/components/ui/card"
import { ResponsiveBar } from "@nivo/bar"
import { Button } from "@/components/ui/button"

export function Component3() {
  return (
    (<div className="flex flex-col w-full min-h-screen">
      <header className="flex items-center h-16 px-4 border-b shrink-0 md:px-6">
        <nav
          className="flex-col hidden gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 lg:gap-6">
          <Link
            className="flex items-center gap-2 text-lg font-semibold md:text-base"
            href="#">
            <HomeIcon className="w-6 h-6" />
            <span className="sr-only">Attendance Portal</span>
          </Link>
          <Link className="font-bold" href="#">
            Home
          </Link>
          <Link className="text-gray-500 dark:text-gray-400" href="#">
            Attendance Records
          </Link>
          <Link className="text-gray-500 dark:text-gray-400" href="#">
            Statistics
          </Link>
          <Link className="text-gray-500 dark:text-gray-400" href="#">
            Settings
          </Link>
        </nav>
      </header>
      <main
        className="flex min-h-[calc(100vh_-_theme(spacing.16))] flex-1 flex-col gap-4 p-4 md:gap-8 md:p-10">
        <div>
          <Card>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[100px]">Date</TableHead>
                  <TableHead>Employee Name</TableHead>
                  <TableHead>Clock In Time</TableHead>
                  <TableHead className="text-right">Clock Out Time</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell className="font-medium">01/01/2024</TableCell>
                  <TableCell>John Doe</TableCell>
                  <TableCell>08:00 AM</TableCell>
                  <TableCell className="text-right">05:00 PM</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">01/02/2024</TableCell>
                  <TableCell>Jane Smith</TableCell>
                  <TableCell>09:00 AM</TableCell>
                  <TableCell className="text-right">06:00 PM</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">01/03/2024</TableCell>
                  <TableCell>Emily Johnson</TableCell>
                  <TableCell>08:30 AM</TableCell>
                  <TableCell className="text-right">05:30 PM</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </Card>
        </div>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-2">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
              <CardTitle className="text-sm font-medium">Overall Attendance</CardTitle>
              <UsersIcon className="w-4 h-4 text-gray-500 dark:text-gray-400" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">95%</div>
              <p className="text-xs text-gray-500 dark:text-gray-400">+2% from last month</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
              <CardTitle className="text-sm font-medium">Attendance Trends</CardTitle>
              <BarChartIcon className="w-4 h-4 text-gray-500 dark:text-gray-400" />
            </CardHeader>
            <CardContent>
              <BarChart className="w-full aspect-[4/3]" />
            </CardContent>
          </Card>
        </div>
        <div>
          <Card>
            <CardHeader>
              <CardTitle>Settings</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4">
                <div className="flex items-center">
                  <div>Account Preferences</div>
                  <Button className="ml-auto" variant="outline">
                    Manage
                  </Button>
                </div>
                <div className="flex items-center">
                  <div>Notification Preferences</div>
                  <Button className="ml-auto" variant="outline">
                    Manage
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>)
  );
}


function HomeIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <path d="m3 9 9-7 7v11a2 2 0 1-2 2H5a2 1-2-2z" />
      <polyline points="9 22 12 15" />
    </svg>)
  );
}


function UsersIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <path d="M16 21v-2a4 4 0 0-4-4H6a4 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 1 7.75" />
    </svg>)
  );
}


function BarChartIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <line x1="12" x2="12" y1="20" y2="10" />
      <line x1="18" x2="18" y1="20" y2="4" />
      <line x1="6" x2="6" y1="20" y2="16" />
    </svg>)
  );
}


function BarChart(props) {
  return (
    (<div {...props}>
      <ResponsiveBar
        data={[
          { name: "Jan", count: 111 },
          { name: "Feb", count: 157 },
          { name: "Mar", count: 129 },
          { name: "Apr", count: 150 },
          { name: "May", count: 119 },
          { name: "Jun", count: 72 },
        ]}
        keys={["count"]}
        indexBy="name"
        margin={{ top: 0, right: 0, bottom: 40, left: 40 }}
        padding={0.3}
        colors={["#2563eb"]}
        axisBottom={{
          tickSize: 0,
          tickPadding: 16,
        }}
        axisLeft={{
          tickSize: 0,
          tickValues: 4,
          tickPadding: 16,
        }}
        gridYValues={4}
        theme={{
          tooltip: {
            chip: {
              borderRadius: "9999px",
            },
            container: {
              fontSize: "12px",
              textTransform: "capitalize",
              borderRadius: "6px",
            },
          },
          grid: {
            line: {
              stroke: "#f3f4f6",
            },
          },
        }}
        tooltipLabel={({ id }) => `${id}`}
        enableLabel={false}
        role="application"
        ariaLabel="A bar chart showing data" />
    </div>)
  );
}
