import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function About() {
  return (
    <div className="min-h-screen py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-5xl font-bold text-center mb-12 text-gray-900 dark:text-white">
          About Our Church
        </h1>

        {/* Mission Section */}
        <section className="mb-12">
          <Card>
            <CardHeader>
              <CardTitle className="text-3xl">Our Mission</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-lg text-gray-700 dark:text-gray-300">
                Our mission is to spread the Gospel of Jesus Christ and make disciples of all nations.
                We are committed to creating a welcoming environment where people from all walks of life
                can come together to worship, learn, and grow in their faith. Through our ministries and
                outreach programs, we aim to serve our community and share God&apos;s love with everyone we meet.
              </p>
            </CardContent>
          </Card>
        </section>

        {/* Vision Section */}
        <section className="mb-12">
          <Card>
            <CardHeader>
              <CardTitle className="text-3xl">Our Vision</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-lg text-gray-700 dark:text-gray-300">
                We envision a church where every member is actively engaged in ministry, where families
                are strengthened through biblical teaching, and where our community is transformed by the
                power of the Holy Spirit. Our vision extends beyond our local congregation to impact the
                world through missions, evangelism, and compassionate service.
              </p>
            </CardContent>
          </Card>
        </section>

        {/* Values Section */}
        <section className="mb-12">
          <Card>
            <CardHeader>
              <CardTitle className="text-3xl">Our Values</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-4 text-lg text-gray-700 dark:text-gray-300">
                <li>
                  <strong className="text-gray-900 dark:text-white">Faith:</strong> We believe in the
                  power of faith to transform lives and communities.
                </li>
                <li>
                  <strong className="text-gray-900 dark:text-white">Love:</strong> We demonstrate
                  Christ&apos;s love through our actions and relationships.
                </li>
                <li>
                  <strong className="text-gray-900 dark:text-white">Service:</strong> We are called
                  to serve others with humility and compassion.
                </li>
                <li>
                  <strong className="text-gray-900 dark:text-white">Community:</strong> We foster a
                  sense of belonging and support for all members.
                </li>
                <li>
                  <strong className="text-gray-900 dark:text-white">Excellence:</strong> We strive for
                  excellence in all we do, honoring God with our best efforts.
                </li>
              </ul>
            </CardContent>
          </Card>
        </section>

        {/* Leadership Section */}
        <section>
          <Card>
            <CardHeader>
              <CardTitle className="text-3xl">Our Leadership</CardTitle>
              <CardDescription>Meet the team guiding our church community</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-lg text-gray-700 dark:text-gray-300">
                Our leadership team is dedicated to shepherding our congregation with wisdom, integrity,
                and a heart for service. Led by our pastor and supported by a team of elders and
                ministry leaders, we work together to guide our church in fulfilling God&apos;s purpose.
                Each leader brings unique gifts and experiences to serve our community and help us grow
                in faith together.
              </p>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
}

