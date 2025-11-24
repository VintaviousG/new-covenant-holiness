import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function Home() {
  const latestAnnouncements = [
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
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-church-purple-100 via-church-purple-50 to-church-gold-100 dark:from-church-purple-900 dark:via-church-purple-800 dark:to-church-gold-900 py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-church-purple-900 dark:text-white mb-6">
            Welcome to Our Church
          </h1>
          <p className="text-xl md:text-2xl text-church-purple-700 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
            A community of faith, hope, and love. Join us as we grow together in Christ.
          </p>
          <Button asChild size="lg" className="text-lg px-8 py-6 bg-church-purple-600 hover:bg-church-purple-700 text-white">
            <Link href="https://meet.google.com/hhn-cmqr-fue" target="_blank" rel="noopener noreferrer">
              Join Our Online Service
            </Link>
          </Button>
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-16 px-4 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-8 bg-gradient-to-r from-church-purple-600 to-church-gold-600 bg-clip-text text-transparent dark:from-church-purple-400 dark:to-church-gold-400">About Us</h2>
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
              We are a welcoming community dedicated to spreading God&apos;s love and serving our neighbors.
              Our mission is to create a place where everyone can experience the grace and mercy of Jesus Christ.
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
              Through worship, fellowship, and service, we strive to build a strong foundation of faith
              that extends beyond our church walls and into the community.
            </p>
            <Button asChild variant="outline">
              <Link href="/about">Learn More About Us</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Latest Announcements Section */}
      <section className="py-16 px-4 bg-gradient-to-b from-gray-50 via-church-purple-50 to-white dark:from-gray-800 dark:via-church-purple-900 dark:to-gray-900">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-church-purple-600 to-church-gold-600 bg-clip-text text-transparent dark:from-church-purple-400 dark:to-church-gold-400">
            Latest Announcements
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {latestAnnouncements.map((announcement) => (
              <Card key={announcement.id}>
                <CardHeader>
                  <CardTitle>{announcement.title}</CardTitle>
                 
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 dark:text-gray-300">{announcement.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-8">
            <Button asChild variant="outline">
              <Link href="/announcements">View All Announcements</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
