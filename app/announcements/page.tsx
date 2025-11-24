import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function Announcements() {
  const announcements = [
    {
      id: 1,
      title: "Sunday Service Time",
      description: "Join us this Sunday for our special worship service at 10:00 AM.",
    },
    {
      id:2, 
      title: "Prayer Meeting Time",
      description: "Prayer meeting every Wednesday evening at 7:00 PM.",
    },
    {
      id: 3,
      title: "Bible Study Group",
      description: "New Bible study everyWednesday evening at 7:30 PM.",
    },
   
  ];

  return (
    <div className="min-h-screen py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-5xl font-bold text-center mb-12 text-gray-900 dark:text-white">
          Church Announcements
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {announcements.map((announcement) => (
            <Card key={announcement.id} className="h-full">
              <CardHeader>
                <CardTitle>{announcement.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 dark:text-gray-300">{announcement.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}

