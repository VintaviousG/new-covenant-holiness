import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";

export default function About() {
    return (
        <div className="min-h-screen py-16 px-4 bg-gradient-to-b from-white via-church-purple-50 to-white dark:from-gray-900 dark:via-church-purple-900 dark:to-gray-900">
            <div className="max-w-7xl mx-auto">
                <h1 className="text-5xl font-bold text-center mb-12 bg-gradient-to-r from-church-purple-600 to-church-gold-600 bg-clip-text text-transparent dark:from-church-purple-400 dark:to-church-gold-400">
                    About Our Church
                </h1>

                {/* Mission Section */}
                <section className="mb-12">
                    <Card>
                        <CardHeader>
                            <CardTitle className="text-3xl text-church-purple-700 dark:text-church-purple-300">
                                Our Mission
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-lg text-gray-700 dark:text-gray-300">
                                New Covenant Holiness Ministries mission is to
                                teach, preach and live holiness. We want to
                                reach believers and unbelievers. This ministry
                                will represent a place of worship where God&apos;s
                                grace, unmerited favor, is giving to all. We
                                will stand on the word of God while ministering
                                the gospel. Our job is to be a beacon of light
                                for the lost to be found, thus building up the
                                body of Christ.
                            </p>
                        </CardContent>
                    </Card>
                </section>

                {/* Vision Section */}
                <section className="mb-12">
                    <Card>
                        <CardHeader>
                            <CardTitle className="text-3xl text-church-purple-700 dark:text-church-purple-300">
                                Our Vision
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-lg text-gray-700 dark:text-gray-300">
                            To reach God&apos;s children by any Godly means necessary.
                            </p>
                        </CardContent>
                    </Card>
                </section>

                {/* Values Section */}
                <section className="mb-12">
                    <Card>
                        <CardHeader>
                            <CardTitle className="text-3xl text-church-purple-700 dark:text-church-purple-300">
                                Our Values
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <ul className="space-y-4 text-lg text-gray-700 dark:text-gray-300">
                                <li>
                                    <strong className="text-church-purple-700 dark:text-church-purple-300">
                                        Faith:
                                    </strong>{" "}
                                    We believe in the power of faith to
                                    transform lives and communities.
                                </li>
                                <li>
                                    <strong className="text-church-purple-700 dark:text-church-purple-300">
                                        Love:
                                    </strong>{" "}
                                    We demonstrate Christ&apos;s love through
                                    our actions and relationships.
                                </li>
                                <li>
                                    <strong className="text-church-purple-700 dark:text-church-purple-300">
                                        Service:
                                    </strong>{" "}
                                    We are called to serve others with humility
                                    and compassion.
                                </li>
                                <li>
                                    <strong className="text-church-purple-700 dark:text-church-purple-300">
                                        Community:
                                    </strong>{" "}
                                    We foster a sense of belonging and support
                                    for all members.
                                </li>
                                <li>
                                    <strong className="text-church-purple-700 dark:text-church-purple-300">
                                        Excellence:
                                    </strong>{" "}
                                    We strive for excellence in all we do,
                                    honoring God with our best efforts.
                                </li>
                            </ul>
                        </CardContent>
                    </Card>
                </section>

                {/* Leadership Section */}
                <section>
                    <Card>
                        <CardHeader>
                            <CardTitle className="text-3xl text-church-purple-700 dark:text-church-purple-300">
                                Our Leadership
                            </CardTitle>
                            <CardDescription>
                                Meet the team guiding our church community
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <p className="text-lg text-gray-700 dark:text-gray-300">
                                Our leadership team is dedicated to shepherding
                                our congregation with wisdom, integrity, and a
                                heart for service. Led by our pastor and
                                supported by a team of elders and ministry
                                leaders, we work together to guide our church in
                                fulfilling God&apos;s purpose. Each leader
                                brings unique gifts and experiences to serve our
                                community and help us grow in faith together.
                            </p>
                        </CardContent>
                    </Card>
                </section>
            </div>
        </div>
    );
}
