import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function Announcements() {
  const announcements = [
    {
      id: 1,
      title: "Sunday Service Update",
      date: "March 15, 2024",
      description: "Join us this Sunday for our special worship service at 10:00 AM. We'll have special music and a message of hope and encouragement.",
    },
    {
      id: 2,
      title: "Community Outreach Event",
      date: "March 10, 2024",
      description: "We're organizing a community food drive next Saturday from 9:00 AM to 2:00 PM. All are welcome to participate! We're collecting non-perishable food items for local families in need.",
    },
    {
      id: 3,
      title: "Bible Study Group",
      date: "March 8, 2024",
      description: "New Bible study group starting this Wednesday evening at 7:00 PM. We'll be studying the book of Romans. All are welcome, no prior experience necessary.",
    },
    {
      id: 4,
      title: "Youth Group Meeting",
      date: "March 5, 2024",
      description: "Youth group meeting this Friday at 6:00 PM. We'll have games, worship, and a discussion about faith in everyday life. Ages 13-18 welcome!",
    },
    {
      id: 5,
      title: "Women's Ministry Breakfast",
      date: "March 1, 2024",
      description: "Join us for our monthly women's ministry breakfast this Saturday at 9:00 AM. We'll have fellowship, prayer, and a guest speaker.",
    },
    {
      id: 6,
      title: "Men's Prayer Group",
      date: "February 28, 2024",
      description: "Men's prayer group meets every Tuesday at 6:30 AM. Start your week with prayer and fellowship. Coffee and breakfast provided.",
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
                <CardDescription>{announcement.date}</CardDescription>
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

